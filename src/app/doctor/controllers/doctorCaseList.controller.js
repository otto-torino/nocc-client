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

    DoctorCaseListCtrl.$inject = ['$scope', '$state', 'authenticationService', 'doctorService', 'contactService', 'caseService', 'dialogs', 'request'];

    /**
     * @namespace DoctorSidebarCtrl
     * @description Controller of the doctor's profile view
     * @permissions hasProfile
     */
    function DoctorCaseListCtrl($scope, $state, authenticationService, doctorService, contactService, caseService, dialogs, request) {

        var vm = this;
        vm.actions = [];

        vm.surgeon_cases = [];

        var user = authenticationService.getAuthenticatedUser();

        /**
         * @summary Gets surgeon contacts data
         * @uses nocc.doctor.services.doctorService
         * @uses nocc.contact.services.contactService
         */
        doctorService.get(user.username).then(function(response) {
            vm.surgeon = response.data;
            contactService.list(user.username).then(function(response) {
                vm.surgeon_contacts = response.data;
            });
        });

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
            console.log(vm.surgeon_contacts);
            if(vm.surgeon_contacts.length === 0) {
                dialogs.error('Errore', 
                              'Devi aggiungere un <a href="#/profile">contatto</a> prima di poter aprire casi clinici',
                              { size: 'sm' });
            }
            else {
                dialogs.create('doctor/templates/form_case.tpl.html', 'DoctorNewCaseCtrl', { ctrl: vm }, { copy: false });
            }
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
