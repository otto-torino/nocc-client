/**
* @file surgeonEditEditEndTherapyCard.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonEditEndTherapyCardCtrl', SurgeonEditEndTherapyCardCtrl);

    SurgeonEditEndTherapyCardCtrl.$inject = ['$rootScope', '$scope', '$state', '$modalInstance', 'dialogs', 'authenticationService', 'endTherapyCardService', 'data', 'THERAPY_CARD_TYPES'];

    /**
     * @namespace SurgeonEditEndTherapyCardCtrl
     * @description Controller of the view with which the surgeon creates therapeutic proposals
     * @permissions isCaseSurgeon
     */
    function SurgeonEditEndTherapyCardCtrl($rootScope, $scope, $state, $modalInstance, dialogs, authenticationService, endTherapyCardService, data, THERAPY_CARD_TYPES) {

        var parent_scope = data.scope;
        var etcn = data.etcn;
        $scope.endTherapyCard = angular.copy(parent_scope.data[etcn]);

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
            $scope.endTherapyCard['date'] = moment($scope.endTherapyCard.date).format('YYYY-MM-DD');
            endTherapyCardService.update(parent_scope.model.caseObj.id, $scope.endTherapyCard).then(function(response) {
                $scope.endTherapyCard = response.data;
                parent_scope.data[etcn] = response.data;
                $rootScope.$broadcast('update_notifications');
                $modalInstance.dismiss();
            }, function(response) {
                $scope.errors = response.data;
            });
        };


    }

})();
