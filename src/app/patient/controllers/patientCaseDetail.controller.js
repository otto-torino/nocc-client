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

    PatientCaseDetailCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request', 'caseObj', 'ASSOCIATION_STATUS'];

    /**
     * @namespace PatientCaseDetailCtrl
     * @description Controller of the patient case detail view
     * @permissions isPatientCase
     */
    function PatientCaseDetailCtrl($scope, $state, authenticationService, caseService, dialogs, request, caseObj, ASSOCIATION_STATUS) {

        // all child controllers will inherit this, and should update this object in order to have
        // always the "global" case object updated
        // case object is defined as a property of a model object because otherwise child scopes
        // get their own object
        $scope.model = {
            caseObj: caseObj,
            ASSOCIATION_STATUS: ASSOCIATION_STATUS
        };

    }

})();
