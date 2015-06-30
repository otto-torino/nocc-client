/**
* @file doctorCaseList.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorCaseListCtrl', DoctorCaseListCtrl);

    DoctorCaseListCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request'];

    /**
     * @namespace DoctorSidebarCtrl
     * @description Controller of the doctor's profile view
     * @permissions hasProfile
     */
    function DoctorCaseListCtrl($scope, $state, authenticationService, caseService, dialogs, request) {

        var vm = this;
        vm.actions = [];

        vm.surgeon_cases = [];

        /**
         * @summary retrieves surgeon cases
         * @uses nocc.case.services.caseService
         */
        caseService.listAsSurgeon().then(function(response) { 
            vm.surgeon_cases = response.data;
        });

        /**
         * @summary Opens the dialog with the add case form
         * @memberOf nocc.doctor.controllers.DoctorCaseListCtrl
         */
        vm.openNewCaseForm = function() {
            dialogs.create('doctor/templates/form_case.tpl.html', 'DoctorNewCaseCtrl', { ctrl: vm }, { copy: false });
        };

        if(request.user.is_surgeon) {
            vm.actions.push(
                {
                    fa: 'plus-circle',
                    exec: vm.openNewCaseForm
                }
            );
        }

    }

})();
