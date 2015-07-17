/**
* @file patientCaseList.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientCaseListCtrl', PatientCaseListCtrl);

    PatientCaseListCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request'];

    /**
     * @namespace PatientCaseListCtrl
     * @description Controller of the patient case list view
     * @permissions isPatient
     */
    function PatientCaseListCtrl($scope, $state, authenticationService, caseService, dialogs, request) {

        var vm = this;
        vm.actions = [];

        vm.cases = [];

        var user = authenticationService.getAuthenticatedUser();

        /**
         * @summary retrieves surgeon cases
         * @uses nocc.case.services.caseService
         */
        caseService.listAsPatient().then(function(response) { 
            vm.cases = response.data;
        });

    }

})();
