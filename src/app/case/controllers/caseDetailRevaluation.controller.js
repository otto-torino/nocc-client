/**
* @file caseDetailRevaluation.controller.js
* @namespace nocc.case.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.case.controllers')
        .controller('CaseDetailRevaluationCtrl', CaseDetailRevaluationCtrl);

    CaseDetailRevaluationCtrl.$inject = ['$scope', '$state', 'therapeuticProposalService'];

    /**
     * @namespace CaseDetailRevaluationCtrl
     * @description Controller of the case revaluation view
     * @permissions isSurgeonCase, isDoctorCase, isPatientCase
     */
    function CaseDetailRevaluationCtrl($scope, $state, therapeuticProposalService) {

        var vm = this;

        therapeuticProposalService.getRevaluationTherapeuticProposal($scope.model.caseObj).then(function(response) {
            vm.tp = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });
    }

})();
