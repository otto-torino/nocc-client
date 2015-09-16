/**
* @file caseDetailEtc.controller.js
* @namespace nocc.case.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.case.controllers')
        .controller('CaseDetailEtcCtrl', CaseDetailEtcCtrl);

    CaseDetailEtcCtrl.$inject = ['$scope', '$state', 'endTherapyCardService', 'request'];

    /**
     * @namespace CaseDetailEtcCtrl
     * @description Controller of the case therapeutic proposal view
     * @permissions isSurgeonCase, isDoctorCase, isPatientCase
     */
    function CaseDetailEtcCtrl($scope, $state, endTherapyCardService, request) {

        var vm = this;

        vm.user = request.user;

        endTherapyCardService.getInitial($scope.model.caseObj).then(function(response) {
            vm.etc = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });
    }

})();
