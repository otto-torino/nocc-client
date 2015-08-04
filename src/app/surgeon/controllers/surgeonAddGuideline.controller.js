/**
* @file surgeonAddGuideline.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonAddGuidelineCtrl', SurgeonAddGuidelineCtrl);

    SurgeonAddGuidelineCtrl.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$modalInstance', 'authenticationService', 'therapeuticProposalService', 'data'];

    /**
     * @namespace SurgeonAddGuidelineCtrl
     * @description Controller of the view with which the surgeon adds a guideline
     * @permissions isCaseSurgeon
     */
    function SurgeonAddGuidelineCtrl($rootScope, $scope, $state, $timeout, $modalInstance, authenticationService, therapeuticProposalService, parent_scope) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon || !parent_scope.parent_scope.isCaseSurgeon()) {
                $state.go('home');
            }
        })();

        $scope.data = {};

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // save
        $scope.show_progress_bar_file = false;
        $scope.uploadError_file = false;
        $scope.save = function() {

            var success = function (response) {
                console.log(response.data);
                parent_scope.data.guidelines.push(response.data);
                $timeout(function() {
                    $scope['show_progress_bar_file'] = false;
                    $modalInstance.dismiss();
                }, 2000);
            };

            var progress = function (evt) {
                $scope['show_progress_bar_file'] = true;
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total, 10);
                $scope['progressValue_file'] = progressPercentage;
            };

            var error = function(response) {
                $scope['show_progress_bar_file'] = false;
                $scope['uploadError_file'] = true;
                if(response.status == 400) {
                    for(var p in response.data) {
                        if(response.data.hasOwnProperty(p)) {
                            $scope.errors[p] = response.data[p];
                        }
                    }
                }
                $timeout(function() {
                    $scope['uploadError_file'] = false;
                }, 2000);
            };

            therapeuticProposalService.addGuideline($scope.guideline).then(success, error, progress);
        };

    }

})();
