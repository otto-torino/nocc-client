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

    SurgeonCaseDetailCtrl.$inject = ['$scope', '$state', 'request', 'caseObj', 'ASSOCIATION_STATUS'];

    /**
     * @namespace SurgeonCaseDetailCtrl
     * @description Controller of the surgeon case detail view
     * @permissions hasProfile
     */
    function SurgeonCaseDetailCtrl($scope, $state, request, caseObj, ASSOCIATION_STATUS) {

        // all child controllers will inherit this, and should update this object in order to have
        // always the "global" case object updated
        // case object is defined as a property of a model object because otherwise child scopes
        // get their own object
        $scope.model = {
            caseObj: caseObj,
            ASSOCIATION_STATUS: ASSOCIATION_STATUS
        };

        // function to check that the user is the surgeon for this case.
        // Used to prevent access to dialog controllers which are not routed by
        // ui-router and so doesn't run Permissions
        $scope.isCaseSurgeon = function() {
            return caseObj.surgeon_contact_obj.doctor.user.id === request.user.id;
        };

        $scope.bar = {
            actions: []
        };

    }

})();
