/**
* @file editProfile.controller.js
* @namespace nocc.profile.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('EditDoctorProfileCtrl', EditDoctorProfileCtrl);

        EditDoctorProfileCtrl.$inject = ['$scope', '$modalInstance', '$state', '$timeout', 'Upload', 'doctorService', 'authenticationService', 'data'];

    /**
     * @namespace EditProfileCtrl
     * @description Controller of the doctor's profile main info editing view
     */
    function EditDoctorProfileCtrl($scope, $modalInstance, $state, $timeout, Upload, doctorService, authenticationService, doctor) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_doctor) {
                $state.go('home');
            }
        })();

        // stores errors reurned from the API after the update request
        $scope.errors = {};

        // object in order to have the $watch function working
        $scope.file = {
            cv: null,
            photo: null
        };

        // profile's data, I make a copy because original data should be updated only when user saves changes
        $scope.doctor = angular.copy(doctor.model);

        // cv upload
        $scope.$watch('file.cv', function () {
            $scope.upload($scope.file.cv, 'cv');
        });
        $scope.show_progress_bar_cv = false;
        $scope.uploadError_cv = false;

        // photo upload
        $scope.$watch('file.photo', function () {
            $scope.upload($scope.file.photo, 'ph');
        });
        $scope.show_progress_bar_ph = false;
        $scope.uploadError_ph = false;

        $scope.upload = function (files, type) {
            var success = function (response) {
                $scope.doctor = response.data;
                // update parent controller data
                doctor.model = response.data;
                $timeout(function() {
                    $scope['show_progress_bar_' + type] = false;
                }, 2000);
            };
            var progress = function (evt) {
                $scope['show_progress_bar_' + type] = true;
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total, 10);
                $scope['progressValue_' + type] = progressPercentage;
            };
            var error = function(response) {
                $scope['show_progress_bar_' + type] = false;
                $scope['uploadError_' + type] = true;
                if(response.status == 400) {
                    for(var p in response.data) {
                        if(response.data.hasOwnProperty(p)) {
                            $scope.errors[p] = response.data[p];
                        }
                    }
                }
                $timeout(function() {
                    $scope['uploadError_' + type] = false;
                }, 2000);
            };
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    if(type == 'cv') {
                        doctorService.updateCV(doctor.model.user.username, file).then(success, error, progress);
                    }
                    else if (type == 'ph') {
                        doctorService.updatePhoto(doctor.model.user.username, file).then(success, error, progress);
                    }
                }
            }
        };

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // save the update form
        $scope.save = function() {

            // the cv and photo filea are uploaded alone, so here are deleted to avoid "no file errors" or deleting them (null)
            delete $scope.doctor.cv;
            delete $scope.doctor.photo;
            // the service requesting a PUT
            doctorService.update($scope.doctor.user.username, $scope.doctor).then(saveSuccessFn, saveErrorFn);

            // reinitialize the profile view controller, then dismiss the modal
            function saveSuccessFn(response) {
                // updates user_data.doctor properties, changes are seen by the ProfileController which updates is properties
                $scope.doctor = response.data;
                // update parent controller data
                doctor.model = response.data;
                $modalInstance.dismiss();
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
