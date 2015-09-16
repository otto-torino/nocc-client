/**
* @file patientCaseDetailMain.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientCaseDetailMainCtrl', PatientCaseDetailMainCtrl);

    PatientCaseDetailMainCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'followupService', 'dialogs', 'request', 'STATUS', 'FU_STATUS_DICT', 'FU_TYPE_DICT'];

    /**
     * @namespace PatientCaseDetailMainCtrl
     * @description Controller of the patient case detail main view
     * @permissions isPatientCase
     */
    function PatientCaseDetailMainCtrl($scope, $state, authenticationService, caseService, followupService, dialogs, request, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {

        var vm = this;
        vm.model = $scope.model;

        switch(vm.model.caseObj.status) {

            case STATUS.started:
                statusStarted(vm, followupService, FU_STATUS_DICT, FU_TYPE_DICT);
                break;

            case STATUS.adjuvant_started:
                statusAdjuvantStarted(vm, followupService, FU_STATUS_DICT, FU_TYPE_DICT);
                break;

            case STATUS.ended:
                statusEnded(vm, followupService, FU_STATUS_DICT, FU_TYPE_DICT);
                break;

            case STATUS.relapse:
                statusRelapse(vm, caseService);
                break;
        }

    }

    function statusStarted(vm, followupService, FU_STATUS_DICT, FU_TYPE_DICT) {

        vm.data = {};

        followupService.list(vm.model.caseObj.id, FU_TYPE_DICT.initial, [FU_STATUS_DICT.accepted]).then(function(response) {
            vm.data.followups = response.data;
        }, function() {
            console.log('error'); // @TODO
        });

    }

    function statusAdjuvantStarted(vm, followupService, FU_STATUS_DICT, FU_TYPE_DICT) {

        vm.data = {};

        followupService.list(vm.model.caseObj.id, FU_TYPE_DICT.adjuvant, [FU_STATUS_DICT.accepted]).then(function(response) {
            vm.data.followups = response.data;
        }, function() {
            console.log('error'); // @TODO
        });

    }

    function statusEnded(vm, followupService, FU_STATUS_DICT, FU_TYPE_DICT) {

        vm.data = {};

        followupService.list(vm.model.caseObj.id, FU_TYPE_DICT.final, [FU_STATUS_DICT.accepted]).then(function(response) {
            vm.data.followups = response.data;
        }, function() {
            console.log('error'); // @TODO
        });

    }



    function statusRelapse(vm, caseService) {
        vm.data = {};
        caseService.getRelapse(vm.model.caseObj).then(function(response) {
            vm.data.relapse = response.data;
        }, function() {
            console.log('error'); // @TODO
        });
    }

})();
