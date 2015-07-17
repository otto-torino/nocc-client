/**
* @file patientSidebarCase.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientSidebarCaseCtrl', PatientSidebarCaseCtrl);

    PatientSidebarCaseCtrl.$inject = ['$scope', '$state', 'caseObj', 'STATUS'];

    /**
     * @namespace patientSidebarCaseCtrl
     * @description Controller which controls the sidebar case nav when inside a case
     */
    function PatientSidebarCaseCtrl($scope, $state, caseObj, STATUS) {

        $scope.nav = { title: 'Caso', items: [] };

        if(caseObj.status == STATUS.open) {
            $scope.nav.items.push({
                state: 'case.medicalExamination',
                text: 'esami clinici',
                fa: 'file'
            });
        }
    }

})();
