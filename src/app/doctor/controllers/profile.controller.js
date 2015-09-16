/**
* @file profile.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorProfileCtrl', DoctorProfileCtrl);

    DoctorProfileCtrl.$inject = ['$scope', '$state', 'authenticationService', 'doctorService', 'contactService', 'files', 'dialogs'];

    /**
     * @namespace DoctorProfileCtrl
     * @description Controller of the doctor's profile view
     * @permissions hasProfile
     */
    function DoctorProfileCtrl($scope, $state, authenticationService, doctorService, contactService, files, dialogs) {

        var vm = this;
        vm.doctor = {};

        /**
         * @summary Gets User data
         * @description After getting data, other properties are set using the data received
         * @uses nocc.profile.services.doctorService
         */
        doctorService.get($scope.auth.user.username).then(function(response) { 
            vm.doctor.model = response.data;
            // set other shortcut properties
            vm.updateExtendedProps();

            // contacts
            contactService.list(vm.doctor.model.user.username).then(function(response) {
                vm.doctor.contacts = response.data;
                if(vm.doctor.contacts.length) {
                    vm.doctor.contacts[0].active = true;
                }
                // closure to use c param inside loop
                var successFactory = function(c) {
                    return function(response) {
                        c.exceptions = response.data;
                    };
                };
                var errorFactory = function(c) {
                    return function(response) {
                        c.exceptions = [];
                    };
                };
                /* jshint loopfunc:true */
                for (var i = 0, len = vm.doctor.contacts.length; i < len; i++) {
                    var c = vm.doctor.contacts[i];
                    contactService.listExceptions(vm.doctor.model.user.username, c.id).then(successFactory(c), errorFactory(c));
                }
            }, function(response) { vm.doctor.contacts = []; });

            // add a watcher, when the model changes (profile edit form) then all extended properties are evaluated again
            $scope.$watch(angular.bind(this, function() {
                return vm.doctor;
            }), function (new_val) {
                vm.updateExtendedProps();
            }, true);
        });

        /**
         * @summary Adds some shortcut properties
         * @memberOf nocc.doctor.controllers.DoctorProfileCtrl
         */
        vm.updateExtendedProps = function() {
            vm.doctor.fullname = [vm.doctor.model.firstname, vm.doctor.model.lastname].join(' ');
            vm.doctor.cv_extension = files.getExtension(vm.doctor.model.cv);
            vm.doctor.cv_filename = files.getFilename(vm.doctor.model.cv);
            vm.doctor.doctor_types = [];
            if(vm.doctor.model.is_surgeon) { vm.doctor.doctor_types.push('chirurgo'); }
            if(vm.doctor.model.is_oncologist) { vm.doctor.doctor_types.push('oncologo'); }
            if(vm.doctor.model.is_radiotherapist) { vm.doctor.doctor_types.push('radioterapista'); }
        };

        /**
         * @summary Opens the dialog with the doctor profile form
         * @description When the form is saved with success, then the doctor property changes and the listener is called updating the extended properties
         * @memberOf nocc.doctor.controllers.DoctorProfileCtrl
         */
        vm.openMainInfoForm = function() {
            dialogs.create('doctor/templates/edit_main_profile.tpl.html', 'EditDoctorProfileCtrl', vm.doctor, { copy: false });
        };

        /**
         * @summary Opens the dialog with the add contact form
         * @description When the form is saved with success, then the doctor property changes and the listener is called updating the extended properties
         * @memberOf nocc.doctor.controllers.DoctorProfileCtrl
         */
        vm.openNewContactForm = function() {
            dialogs.create('doctor/templates/form_contact_profile.tpl.html', 'AddEditDoctorContactCtrl', { ctrl: vm, contact: null }, { copy: false });
        };

        /**
         * @summary Opens the dialog with the edit contact form
         * @description When the form is saved with success, then the doctor property changes and the listener is called updating the extended properties
         * @param {Object} contact
         * @memberOf nocc.doctor.controllers.DoctorProfileCtrl
         */
        vm.openEditContactForm = function(contact) {
            dialogs.create('doctor/templates/form_contact_profile.tpl.html', 'AddEditDoctorContactCtrl', { ctrl: vm, contact: contact }, { copy: false });
        };

        /**
         * @summary Opens a dialog displaying a confirmation message and deletes the contact if the user confirms
         * @memberOf nocc.doctor.controllers.DoctorProfileCtrl
         */
        vm.confirmAndDelete = function(contact) {
            var dlg = dialogs.confirm('Sicuro di voler eliminare il contatto?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                contactService.kill($scope.auth.user.username, contact.id).then(
                    function() {
                        vm.doctor.contacts.splice(vm.doctor.contacts.indexOf(contact), 1);
                    },
                    function() {
                        console.log('error'); // @TODO
                    }
                );
            },function(btn){
                // cancel
            });
        };

        /**
         * @summary Opens the dialog with the add availability exception form
         * @param {object} contact
         * @memberOf nocc.doctor.controllers.DoctorProfileCtrl
         */
        vm.openContactAvailabilityExceptionForm = function(contact) {
            dialogs.create('doctor/templates/add_contact_exception_profile.tpl.html', 'AddDoctorContactAvailabilityExceptionCtrl',  { ctrl: vm, contact: contact }, { size: 'md', copy: false });
        };

        /**
         * @summary Opens a dialog displaying a confirmation message and deletes the contact availability exception if the user confirms
         * @param {Object} contact
         * @param {Object} exception
         * @memberOf nocc.doctor.controllers.DoctorProfileCtrl
         */
        vm.confirmAndDeleteException = function(contact, exception) {
            var dlg = dialogs.confirm('Sicuro di voler eliminare l\'eccezione?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                contactService.killException($scope.auth.user.username, contact.id, exception.id).then(
                    function() {
                        contact.exceptions.splice(contact.exceptions.indexOf(exception), 1);
                    },
                    function() {
                        console.log('error'); // @TODO
                    }
                );
            },function(btn){
                // cancel
            });
        };

    }
})();

