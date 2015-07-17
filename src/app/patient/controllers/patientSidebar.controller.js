/**
* @file patientSidebar.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientSidebarCtrl', PatientSidebarCtrl);

    PatientSidebarCtrl.$inject = ['$scope', '$state'];

    /**
     * @namespace PatientSidebarCtrl
     * @description Controller of the patient's sidebar
     */
    function PatientSidebarCtrl($scope, $state) {

        $scope.navMain = [
            {
                state: 'case',
                text: 'casi clinici',
                fa: 'ambulance'
            }
        ];

    }

})();
