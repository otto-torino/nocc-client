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

    PatientCaseDetailMainCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request', 'caseObj'];

    /**
     * @namespace PatientCaseDetailMainCtrl
     * @description Controller of the patient case detail main view
     * @permissions isPatientCase
     */
    function PatientCaseDetailMainCtrl($scope, $state, authenticationService, caseService, dialogs, request, caseObj) {

        var vm = this;
        vm.caseObj = caseObj;

    }

})();
