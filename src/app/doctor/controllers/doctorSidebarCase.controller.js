/**
* @file doctorSidebarCase.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorSidebarCaseCtrl', DoctorSidebarCaseCtrl);

    DoctorSidebarCaseCtrl.$inject = ['$scope', '$state', 'caseObj'];

    /**
     * @namespace DoctorSidebarCaseCtrl
     * @description Controller which controls the sidebar case nav when inside a case
     */
    function DoctorSidebarCaseCtrl($scope, $state, caseObj) {

        $scope.nav = { title: 'Caso', items: [] };

        if(caseObj.status == 1) {
            $scope.nav.items.push({
                state: 'case.medicalExamination',
                text: 'esami clinici',
                fa: 'file'
            });
        }
        console.log($scope.nav);
    }

})();


