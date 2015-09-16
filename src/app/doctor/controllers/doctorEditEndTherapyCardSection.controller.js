/**
* @file doctorEditEndTherapyCardSection.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorEditEndTherapyCardSectionCtrl', DoctorEditEndTherapyCardSectionCtrl);

    DoctorEditEndTherapyCardSectionCtrl.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$modalInstance', 'dialogs', 'authenticationService', 'endTherapyCardService', 'data'];

    /**
     * @namespace DoctorEditEndTherapyCardSectionCtrl
     * @description Controller of the view with which the doctor edits therapy card sections
     * @permissions isCaseDoctor
     */
    function DoctorEditEndTherapyCardSectionCtrl($rootScope, $scope, $state, $timeout, $modalInstance, dialogs, authenticationService, endTherapyCardService, data) {

        var user = authenticationService.getAuthenticatedUser();
        var parent_scope = data.scope;
        var etcsn = data.etcsn;
        var etcn = data.etcn;
        $scope.endTherapyCardSection = angular.copy(parent_scope.data[etcsn]);

        /**
         * Checks if the current user is the dispenser of the therapy card section
         * @param {Object} section
         * @return {Boolean}
         */
        function userIsSectionDispenser(section) {
            if(section.dispenser == parent_scope.model.caseObj.surgeon_contact_obj.id && parent_scope.model.caseObj.surgeon_contact_obj.doctor.user.id == user.id) {
                return true;
            }
            else if(section.dispenser == parent_scope.model.caseObj.oncologist_contact_obj.id && parent_scope.model.caseObj.oncologist_contact_obj.doctor.user.id == user.id) {
                return true;
            }
            else if(section.dispenser == parent_scope.model.caseObj.radiotherapist_contact_obj.id && parent_scope.model.caseObj.radiotherapist_contact_obj.doctor.user.id == user.id) {
                return true;
            }

            return false;

        }

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_doctor || !userIsSectionDispenser($scope.endTherapyCardSection)) {
                $state.go('home');
            }
        })();

        // stores errors reurned from the API after the create request
        $scope.errors = {};
        $scope.parent_scope = parent_scope;
        $scope.file = {
            attachments: []
        };

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        $scope.$watch('parent_scope.data.' + etcn + '.sections', function (value) {
            if(value) {
                parent_scope.data[etcn].sections.forEach(function(section) {
                    if(userIsSectionDispenser(section)) {
                        parent_scope.data[etcsn] = section;
                        $scope.endTherapyCardSection = angular.copy(section);
                    }
                });
            }
        });

        // save
        $scope.save = function() {
            var close = false;
            endTherapyCardService.updateSection(parent_scope.model.caseObj.id, $scope.endTherapyCardSection).then(function(response) {
                parent_scope.data[etcn] = response.data;
                $scope.endTherapyCardSection = angular.copy(parent_scope.data[etcsn]);
            }, function(response) {
                $scope.errors = response.data;
            });
            $rootScope.$broadcast('update_notifications');
            $modalInstance.dismiss();
        };

        // attachments upload
        $scope.$watch('file.attachments', function (files) {
            if(files !== null) {
                /* jshint loopfunc:true */
                for (var i = 0; i < files.length; i++) {
                    $scope.errorMsg = null;
                    (function (file) {
                        upload(file);
                    })(files[i]);
                }
            }
        });
        $scope.show_progress_bar_attachment = false;
        $scope.uploadError_attachment = false;

        function upload(file) {
            var success = function (response) {
                $scope.endTherapyCardSection.attachments.push(response.data);
                parent_scope.data[etcsn].attachments.push(response.data);
                $timeout(function() {
                    $scope['show_progress_bar_attachment'] = false;
                }, 2000);
            };
            var progress = function (evt) {
                $scope['show_progress_bar_attachment'] = true;
                //file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total, 10));
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total, 10);
                $scope['progressValue_attachment'] = progressPercentage;

            };
            var error = function(response) {
                $scope['show_progress_bar_attachment'] = false;
                $scope['uploadError_attachment'] = true;
                if(response.status == 400) {
                    for(var p in response.data) {
                        if(response.data.hasOwnProperty(p)) {
                            $scope.errors[p] = response.data[p];
                        }
                    }
                }
                $timeout(function() {
                    $scope['uploadError_attachment'] = false;
                }, 2000);
            };

            endTherapyCardService.uploadAttachment(parent_scope.model.caseObj.id, $scope.endTherapyCardSection, file).then(success, error, progress);
        }

        $scope.deleteAttachment = function(attachment) {
            endTherapyCardService.killAttachment(parent_scope.model.caseObj.id, parent_scope.data[etcn].id, attachment.id).then(function(response) {
                $scope.endTherapyCardSection.attachments.splice( $scope.endTherapyCardSection.attachments.indexOf(attachment), 1);
                parent_scope.data[etcsn].attachments.splice(parent_scope.data[etcsn].attachments.indexOf(attachment), 1);
            }, function(response) {
                console.log('error'); // @TODO
            });
        };



    }

})();
