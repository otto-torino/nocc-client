/**
* @file doctorCaseDetail.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorCaseDetailCtrl', DoctorCaseDetailCtrl);

    DoctorCaseDetailCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request'];

    /**
     * @namespace DoctorCaseDetailCtrl
     * @description Controller of the doctor's profile view
     * @permissions hasProfile
     */
    function DoctorCaseDetailCtrl($scope, $state, authenticationService, caseService, dialogs, request) {

        var vm = this;

    }

})();
