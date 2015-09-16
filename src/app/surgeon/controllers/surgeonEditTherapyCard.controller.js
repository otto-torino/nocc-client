/**
* @file surgeonEditEditTherapyCard.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonEditTherapyCardCtrl', SurgeonEditTherapyCardCtrl);

    SurgeonEditTherapyCardCtrl.$inject = ['$rootScope', '$scope', '$state', '$modalInstance', 'dialogs', 'authenticationService', 'therapyCardService', 'data', 'THERAPY_CARD_TYPES'];

    /**
     * @namespace SurgeonEditTherapyCardCtrl
     * @description Controller of the view with which the surgeon creates therapeutic proposals
     * @permissions isCaseSurgeon
     */
    function SurgeonEditTherapyCardCtrl($rootScope, $scope, $state, $modalInstance, dialogs, authenticationService, therapyCardService, data, THERAPY_CARD_TYPES) {

        var parent_scope = data.scope;
        var tcn = data.tcn;
        $scope.therapyCard = angular.copy(parent_scope.data[tcn]);
        $scope.tc_type = data.tc_type;

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon || !parent_scope.isCaseSurgeon()) {
                $state.go('home');
            }
        })();

        // stores errors reurned from the API after the create request
        $scope.errors = {};
        $scope.parent_scope = parent_scope;
        $scope.data = {};

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // save
        $scope.save = function() {
            $scope.therapyCard['date'] = moment($scope.therapyCard.date).format('YYYY-MM-DD');
            therapyCardService.update(parent_scope.model.caseObj.id, $scope.therapyCard).then(function(response) {
                $scope.therapyCard = response.data;
                parent_scope.data[tcn] = response.data;
                $rootScope.$broadcast('update_notifications');
                $modalInstance.dismiss();
            }, function(response) {
                $scope.errors = response.data;
            });
        };


    }

})();
