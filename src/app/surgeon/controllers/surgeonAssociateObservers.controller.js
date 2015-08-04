/**
* @file surgeonAssociateObservers.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonAssociateObserversCtrl', SurgeonAssociateObserversCtrl);

    SurgeonAssociateObserversCtrl.$inject = ['$rootScope', '$scope', '$state', '$modalInstance', 'authenticationService', 'caseService', 'doctorService', 'contactService', 'dialogs', 'data'];

    /**
     * @namespace SurgeonAssociateObserversCtrl
     * @description Controller of the view with which the surgeon associates an radiotherapist to the case
     * @permissions isSurgeon
     */
    function SurgeonAssociateObserversCtrl($rootScope, $scope, $state, $modalInstance, authenticationService, caseService, doctorService, contactService, dialogs, parent_scope) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon || !parent_scope.isCaseSurgeon()) {
                $state.go('home');
            }
        })();

        $scope.data = {
            observers: parent_scope.model.caseObj.observers
        };

        // exclude surgeon, oncologist and radiotherapist from selection
        var exclude = [parent_scope.model.caseObj.surgeon_contact_obj.doctor.id];
        if(parent_scope.model.caseObj.oncologist_contact) {
            exclude.push(parent_scope.model.caseObj.oncologist_contact_obj.doctor.id);
        }
        if(parent_scope.model.caseObj.radiotherapist_contact) {
            exclude.push(parent_scope.model.caseObj.radiotherapist_contact_obj.doctor.id);
        }

        doctorService.observers(exclude).then(function(response) {
            $scope.observers = response.data;
            console.log($scope.observers);
        }, function() {
            // @TODO
            console.log('error');
        });


        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // dismiss the modal without doing anything
        $scope.save = function() {
            caseService.associateObservers(parent_scope.model.caseObj, $scope.data.observers).then(function(response) {
                console.log(response.data);
                parent_scope.model.caseObj = response.data;
                $modalInstance.dismiss();
            }, function() {
                // @TODO
                console.log('error');
            });
        };


    }

})();
