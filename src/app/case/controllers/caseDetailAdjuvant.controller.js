/**
* @file caseDetailAdjuvant.controller.js
* @namespace nocc.case.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.case.controllers')
        .controller('CaseDetailAdjuvantCtrl', CaseDetailAdjuvantCtrl);

    CaseDetailAdjuvantCtrl.$inject = ['$scope', '$state', 'therapeuticProposalService'];

    /**
     * @namespace CaseDetailAdjuvantCtrl
     * @description Controller of the case revaluation view
     * @permissions isSurgeonCase, isDoctorCase, isPatientCase
     */
    function CaseDetailAdjuvantCtrl($scope, $state, therapeuticProposalService) {

        var vm = this;

        therapeuticProposalService.getAdjuvantTherapeuticProposal($scope.model.caseObj).then(function(response) {
            vm.tp = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });
    }

})();
