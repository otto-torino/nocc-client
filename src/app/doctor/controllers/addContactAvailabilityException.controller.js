/**
* @file addContactAvailabilityException.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('AddDoctorContactAvailabilityExceptionCtrl', AddDoctorContactAvailabilityExceptionCtrl);

        AddDoctorContactAvailabilityExceptionCtrl.$inject = ['$scope','$modalInstance', 'contactService', 'authenticationService', 'data'];

    /**
     * @namespace AddDoctorContactAvailabilityExceptionCtrl
     * @description Controller of the doctor's contacts availibility exception add view
     */
    function AddDoctorContactAvailabilityExceptionCtrl($scope, $modalInstance, contactService, authenticationService, data) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_doctor) {
                $state.go('home');
            }
        })();

        $scope.errors = {};

        // parent controller, must be update when saving after submission in order to have changes reflected in the profile view
        var profile_ctrl = data.ctrl;

        $scope.exception = { doctor_contact: data.contact.id };

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        $scope.save = function() {
            contactService.createException({ doctor_contact: $scope.exception.doctor_contact, date: moment($scope.exception.date).format('YYYY-MM-DD') }).then(function(response) {
                var exception = response.data;
                // if contact was inserted without recharging the page
                if(typeof data.contact.exceptions == 'undefined') {
                    data.contact.exceptions = [];
                }
                data.contact.exceptions.push(exception);
                $modalInstance.dismiss();
            }, function(response) {
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
            });
        };

    }
})();
