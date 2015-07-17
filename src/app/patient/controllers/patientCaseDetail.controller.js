/**
* @file patientCaseDetail.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientCaseDetailCtrl', PatientCaseDetailCtrl);

    PatientCaseDetailCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request', 'caseObj'];

    /**
     * @namespace PatientCaseDetailCtrl
     * @description Controller of the patient case detail view
     * @permissions isPatientCase
     */
    function PatientCaseDetailCtrl($scope, $state, authenticationService, caseService, dialogs, request, caseObj) {

        var vm = this;
        vm.caseObj = caseObj;

    }

})();
