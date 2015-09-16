/**
* @file observerCaseDetailMain.controller.js
* @namespace nocc.observer.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.observer.controllers')
        .controller('ObserverCaseDetailMainCtrl', ObserverCaseDetailMainCtrl);

    ObserverCaseDetailMainCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'followupService', 'dialogs', 'request', 'STATUS', 'FU_STATUS_DICT', 'FU_TYPE_DICT'];

    /**
     * @namespace ObserverCaseDetailMainCtrl
     * @description Controller of the observer case detail main view
     * @permissions isObserverCase
     */
    function ObserverCaseDetailMainCtrl($scope, $state, authenticationService, caseService, followupService, dialogs, request, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {

        var vm = this;
        vm.model = $scope.model;

    }

})();
