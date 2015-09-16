/**
* @file observerCaseDetail.controller.js
* @namespace nocc.observer.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.observer.controllers')
        .controller('ObserverCaseDetailCtrl', ObserverCaseDetailCtrl);

    ObserverCaseDetailCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request', 'caseObj', 'ASSOCIATION_STATUS'];

    /**
     * @namespace ObserverCaseDetailCtrl
     * @description Controller of the observer case detail view
     * @permissions isObserverCase
     */
    function ObserverCaseDetailCtrl($scope, $state, authenticationService, caseService, dialogs, request, caseObj, ASSOCIATION_STATUS) {

        // all child controllers will inherit this, and should update this object in order to have
        // always the "global" case object updated
        // case object is defined as a property of a model object because otherwise child scopes
        // get their own object
        $scope.model = {
            caseObj: caseObj,
            ASSOCIATION_STATUS: ASSOCIATION_STATUS
        };

    }

})();
