/**
* @file surgeonAssociateRadiotherapist.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonAssociateRadiotherapistCtrl', SurgeonAssociateRadiotherapistCtrl);

    SurgeonAssociateRadiotherapistCtrl.$inject = ['$rootScope', '$scope', '$state', '$modalInstance', 'authenticationService', 'caseService', 'doctorService', 'contactService', 'dialogs', 'data'];

    /**
     * @namespace SurgeonAssociateRadiotherapistCtrl
     * @description Controller of the view with which the surgeon associates an radiotherapist to the case
     * @permissions isSurgeon
     */
    function SurgeonAssociateRadiotherapistCtrl($rootScope, $scope, $state, $modalInstance, authenticationService, caseService, doctorService, contactService, dialogs, parent_scope) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon || !parent_scope.isCaseSurgeon()) {
                $state.go('home');
            }
        })();

        $scope.data = {};

        doctorService.radiotherapists().then(function(response) {
            $scope.radiotherapists = response.data;
            console.log($scope.radiotherapists);
        }, function() {
            // @TODO
            console.log('error');
        });

        /**
         * when seleciong a doctor, his contacts must be retrieved
         */
        $scope.$watch('data.radiotherapist', function () {
            if($scope.data.radiotherapist) {
                var username = null;
                for(var i = 0, l = $scope.radiotherapists.length; i < l; i++) {
                    if($scope.radiotherapists[i].id == $scope.data.radiotherapist) {
                        username = $scope.radiotherapists[i].user.username;
                    }
                }
                contactService.list(username).then(function(response) {
                    $scope.radiotherapist_contacts = response.data;
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
            caseService.associateRadiotherapist(parent_scope.model.caseObj, $scope.data.radiotherapist_contact).then(function(response) {
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
