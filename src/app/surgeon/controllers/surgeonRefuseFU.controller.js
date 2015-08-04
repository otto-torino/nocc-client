/**
* @file surgeonRefuseFU.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonRefuseFUCtrl', SurgeonRefuseFUCtrl);

    SurgeonRefuseFUCtrl.$inject = ['$rootScope', '$scope', '$state', '$modalInstance', 'authenticationService', 'followupService', 'data'];

    /**
     * @namespace SurgeonRefuseFUCtrl
     * @description Controller of the refuse FU layer view
     * @permissions isSurgeonCase
     */
    function SurgeonRefuseFUCtrl($rootScope, $scope, $state, $modalInstance, authenticationService, followupService, data) {

        var parent_scope = data.scope;
        $scope.fu = data.followup;

        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon || !parent_scope.$parent.isCaseSurgeon()) {
                $state.go('home');
            }
        })();

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        $scope.save = function() {
            var index = parent_scope.data.followups.indexOf(data.followup);
            followupService.refuse(parent_scope.model.caseObj.id, $scope.fu).then(function(response) {
                parent_scope.data.followups.splice(index, 1);
                $rootScope.$broadcast('update_notifications');
                $modalInstance.dismiss();
            }, function(response) {
                console.log('error'); //@TODO
            });
        };

    }

})();
