/**
* @file surgeonAssociateOncologist.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonAssociateOncologistCtrl', SurgeonAssociateOncologistCtrl);

    SurgeonAssociateOncologistCtrl.$inject = ['$rootScope', '$scope', '$state', '$modalInstance', 'authenticationService', 'caseService', 'doctorService', 'contactService', 'dialogs', 'data'];

    /**
     * @namespace SurgeonAssociateOncologistCtrl
     * @description Controller of the view with which the surgeon associates an oncologist to the case
     * @permissions isSurgeon
     */
    function SurgeonAssociateOncologistCtrl($rootScope, $scope, $state, $modalInstance, authenticationService, caseService, doctorService, contactService, dialogs, parent_scope) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon || !parent_scope.isCaseSurgeon()) {
                $state.go('home');
            }
        })();

        $scope.data = {};

        doctorService.oncologists().then(function(response) {
            $scope.oncologists = response.data;
            console.log($scope.oncologists);
        }, function() {
            // @TODO
            console.log('error');
        });

        /**
         * when seleciong a doctor, his contacts must be retrieved
         */
        $scope.$watch('data.oncologist', function () {
            if($scope.data.oncologist) {
                var username = null;
                for(var i = 0, l = $scope.oncologists.length; i < l; i++) {
                    if($scope.oncologists[i].id == $scope.data.oncologist) {
                        username = $scope.oncologists[i].user.username;
                    }
                }
                contactService.list(username).then(function(response) {
                    $scope.oncologist_contacts = response.data;
                }, function() {
                    console.log('error retrieving contacts');
                });
            }
        });

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // dismiss the modal without doing anything
        $scope.save = function() {
            caseService.associateOncologist(parent_scope.model.caseObj, $scope.data.oncologist_contact).then(function(response) {
                parent_scope.model.caseObj = response.data;
                $rootScope.$broadcast('update_notifications');
                $modalInstance.dismiss();
            }, function() {
                // @TODO
                console.log('error');
            });
        };


    }

})();
