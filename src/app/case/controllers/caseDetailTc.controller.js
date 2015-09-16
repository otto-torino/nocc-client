/**
* @file caseDetailTc.controller.js
* @namespace nocc.case.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.case.controllers')
        .controller('CaseDetailTcCtrl', CaseDetailTcCtrl);

    CaseDetailTcCtrl.$inject = ['$scope', '$state', 'therapyCardService', 'request'];

    /**
     * @namespace CaseDetailTcCtrl
     * @description Controller of the case therapeutic proposal view
     * @permissions isSurgeonCase, isDoctorCase, isPatientCase
     */
    function CaseDetailTcCtrl($scope, $state, therapyCardService, request) {

        var vm = this;

        vm.user = request.user;

        therapyCardService.getInitial($scope.model.caseObj).then(function(response) {
            vm.tc = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });
    }

})();
