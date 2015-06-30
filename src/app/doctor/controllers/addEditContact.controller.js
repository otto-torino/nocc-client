/**
* @file addEditContact.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('AddEditDoctorContactCtrl', AddEditDoctorContactCtrl);

        AddEditDoctorContactCtrl.$inject = ['$scope', '$window', '$modalInstance', '$state', '$timeout', 'doctorService', 'contactService', 'hospitalService', 'authenticationService', 'data'];

    /**
     * @namespace AddEditDoctorContactCtrl
     * @description Controller of the doctor's profile edit contact view
     */
    function AddEditDoctorContactCtrl($scope, $window, $modalInstance, $state, $timeout, doctorService, contactService, hospitalService, authenticationService, data) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_doctor) {
                $state.go('home');
            }
        })();

        $scope.errors = {};

        // parent controller, must be update when saving after submission in order to have changes reflected in the profile view
        var profile_ctrl = data.ctrl;

        $scope.availability_choices = [
            { id: 0, label: 'nessuna disponibilità' },
            { id: 1, label: 'disponibilità al mattino' },
            { id: 2, label: 'disponibilità al pomeriggio' },
            { id: 3, label: 'disponibilità tutto il giorno' }
        ];

        /**
         * @summary Gets Hospitals data
         * @uses nocc.hospital.services.hospitalService
         */
        hospitalService.list().then(function(response) { 
            $scope.hospital = { list: response.data };
        });
        // I make a copy because parent data have to be updated only if the user click "save" button
        $scope.doctor = angular.copy(profile_ctrl.doctor);
        // get the contact index on the original object since on the copied one cannot work (contact is a different - copied - object)
        var index = profile_ctrl.doctor.contacts.indexOf(data.contact);
        $scope.contact = data.contact ? $scope.doctor.contacts[index] : {};

        var action = (typeof $scope.contact.id !== 'undefined' && $scope.contact.id) ? 'edit' : 'insert';

        $scope.title = action === 'insert' ? 'Aggiungi contatto' : 'Modifica contatto';

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // save the insertion form
        $scope.save = function() {

            $scope.contact.doctor = $scope.doctor.model.id.toString();
            // create hospital instance
            if($scope.contact.new_hospital && $scope.contact.new_hospital.name) {
                var hospital = { name: $scope.contact.new_hospital.name };
                hospitalService.create(hospital).then(
                    function(response) {
                        $scope.hospital.list.push(response.data);
                        $scope.contact.hospital = response.data.id;
                        if(action === 'insert') {
                            contactService.create($scope.contact).then(saveSuccessFn, saveErrorFn);
                        }
                        else if (action === 'edit') {
                            contactService.update($scope.contact).then(saveSuccessFn, saveErrorFn);
                        }
                    },
                    function() {
                        console.log('error'); //@TODO
                    }
                );
            }
            else {
                if(action === 'insert') {
                    contactService.create($scope.contact).then(saveSuccessFn, saveErrorFn);
                }
                else if (action === 'edit') {
                    contactService.update($scope.contact).then(saveSuccessFn, saveErrorFn);
                }
            }

            function saveSuccessFn(response) {
                var contact = response.data;
                // active tab
                contact.active = true;
                if(action === 'insert') {
                    // add the new contact
                    $scope.doctor.contacts.push(contact);
                }
                else if (action === 'edit') {
                    $scope.doctor.contacts[index] = contact;
                }
                // update the parent doctor data
                profile_ctrl.doctor = $scope.doctor;

                $modalInstance.dismiss();
                //$window.location.reload(true);
            }

            // update the $scope.errors object
            function saveErrorFn(response) {
                if(response.status == 400) {
                    for(var p in response.data) {
                        if(response.data.hasOwnProperty(p)) {
                            $scope.errors[p] = response.data[p];
                        }
                    }
                }
                else {
                    console.log('error'); //@TODO error message
                }
            }
        };
    }
})();
