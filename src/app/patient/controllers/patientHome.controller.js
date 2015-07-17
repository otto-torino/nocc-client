/**
* @file patientHome.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientHomeCtrl', PatientHomeCtrl);

    PatientHomeCtrl.$inject = ['$scope', '$state'];

    /**
     * @namespace PatientHomeCtrl
     * @description Controller of the patient's home page
     * @permissions isPatient
     */
    function PatientHomeCtrl($scope, $state) {

    }

})();
