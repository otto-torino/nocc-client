/**
* @file surgeonAddEditExamination.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonAddEditExaminationCtrl', SurgeonAddEditExaminationCtrl);

    SurgeonAddEditExaminationCtrl.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$modalInstance', 'authenticationService', 'examinationService', 'dialogs', 'EXAMINATION_TYPES', 'data'];

    /**
     * @namespace SurgeonAddEditExaminationCtrl
     * @description Controller of the view with which the surgeon adds or edits examinations
     * @permissions isSurgeon
     */
    function SurgeonAddEditExaminationCtrl($rootScope, $scope, $state, $timeout, $modalInstance, authenticationService, examinationService, dialogs, EXAMINATION_TYPES, data) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon) {
                $state.go('home');
            }
        })();

        var ctrl = data.ctrl;
        // store index to update parent controller examination when saving
        var index = ctrl.examinations.indexOf(data.examination);
        // make a copy in order to update parent only when save button is pressed
        $scope.examination = data.examination ? angular.copy(data.examination) : { attachments: [] };

        $scope.errors = {};

        $scope.types = {
            list: EXAMINATION_TYPES
        };

        $scope.file = {
            attachments: []
        };

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // save
        $scope.save = function() {
            $scope.examination['case'] = ctrl.caseObj.id;
            var examination = angular.copy($scope.examination);
            examination['date'] = moment(examination.date).format('YYYY-MM-DD');
            examinationService.create(ctrl.caseObj.id, examination).then(saveSuccessFn, saveErrorFn);
            function saveSuccessFn(response) {
                $scope.examination = response.data;
                ctrl.examinations.push($scope.examination);
                console.log(ctrl.examinations);
            }
            function saveErrorFn(response) {
                // @TODO
                console.log('error');
            }
        };

        // update
        $scope.update = function() {
            var examination = angular.copy($scope.examination);
            examination['date'] = moment(examination.date).format('YYYY-MM-DD');
            examinationService.update(ctrl.caseObj.id, examination).then(updateSuccessFn, updateErrorFn);
            function updateSuccessFn(response) {
                $scope.examination = response.data;
                ctrl.examinations[index] = response.data; // @TODO check anmd remove
                $modalInstance.dismiss();
            }
            function updateErrorFn(response) {
                // @TODO
                console.log('error');
            }
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
        $scope.show_progress_bar_ph = false;
        $scope.uploadError_ph = false;

        function upload(file) {
            console.log(file);
            var success = function (response) {
                console.log(response.data);
                $scope.examination.attachments.push(response.data);
                ctrl.examinations[index].attachments.push(response.data);
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

            examinationService.uploadAttachment(ctrl.caseObj.id, $scope.examination.id, file).then(success, error, progress);
        }


    }

})();
