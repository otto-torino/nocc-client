/**
* @file caseDetailFU.controller.js
* @namespace nocc.case.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.case.controllers')
        .controller('CaseDetailFUCtrl', CaseDetailFUCtrl);

    CaseDetailFUCtrl.$inject = ['$scope', '$state', 'followupService', 'FU_STATUS_DICT'];

    /**
     * @namespace CaseDetailFUCtrl
     * @description Controller of the case follow up view
     * @permissions isSurgeonCase, isDoctorCase, isPatientCase
     */
    function CaseDetailFUCtrl($scope, $state, followupService, FU_STATUS_DICT) {

        var vm = this;

        vm.data = {
            accepted: [],
            finalized: []
        };

        followupService.list($scope.model.caseObj.id, FU_STATUS_DICT.accepted).then(function(response) {
            vm.data.accepted = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list($scope.model.caseObj.id, FU_STATUS_DICT.finalized).then(function(response) {
            vm.data.finalized = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

    }

})();
