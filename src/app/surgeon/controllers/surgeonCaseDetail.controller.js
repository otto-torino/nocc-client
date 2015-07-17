/**
* @file surgeonCaseDetail.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonCaseDetailCtrl', SurgeonCaseDetailCtrl);

    SurgeonCaseDetailCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request', 'caseObj'];

    /**
     * @namespace SurgeonCaseDetailCtrl
     * @description Controller of the surgeon case detail view
     * @permissions hasProfile
     */
    function SurgeonCaseDetailCtrl($scope, $state, authenticationService, caseService, dialogs, request, caseObj) {

        $scope.caseObj = caseObj;

        $scope.bar = {
            actions: []
        };

    }

})();
