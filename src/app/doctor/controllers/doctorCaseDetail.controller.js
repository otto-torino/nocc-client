/**
* @file doctorCaseDetail.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorCaseDetailCtrl', DoctorCaseDetailCtrl);

    DoctorCaseDetailCtrl.$inject = ['$scope', '$state', 'request', 'caseObj', 'ASSOCIATION_STATUS'];

    /**
     * @namespace DoctorCaseDetailCtrl
     * @description Controller of the doctor case detail view
     * @permissions isDoctorCase
     */
    function DoctorCaseDetailCtrl($scope, $state, request, caseObj, ASSOCIATION_STATUS) {

        // all child controllers will inherit this, and should update this object in order to have
        // always the "global" case object updated
        // case object is defined as a property of a model object because otherwise child scopes
        // get their own object
        $scope.model = {
            caseObj: caseObj,
            ASSOCIATION_STATUS: ASSOCIATION_STATUS
        };

        $scope.bar = {
            actions: []
        };

    }

})();
