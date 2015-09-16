/**
* @file caseDetailTp.controller.js
* @namespace nocc.case.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.case.controllers')
        .controller('CaseDetailTpCtrl', CaseDetailTpCtrl);

    CaseDetailTpCtrl.$inject = ['$scope', '$state', 'therapeuticProposalService', 'request'];

    /**
     * @namespace CaseDetailTpCtrl
     * @description Controller of the case therapeutic proposal view
     * @permissions isSurgeonCase, isDoctorCase, isPatientCase
     */
    function CaseDetailTpCtrl($scope, $state, therapeuticProposalService, request) {

        var vm = this;

        vm.user = request.user;

        therapeuticProposalService.getInitialTherapeuticProposal($scope.model.caseObj).then(function(response) {
            vm.tp = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });
    }

})();
