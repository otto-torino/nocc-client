/**
* @file surgeonSidebarCase.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonSidebarCaseCtrl', SurgeonSidebarCaseCtrl);

    SurgeonSidebarCaseCtrl.$inject = ['$scope', '$state', 'therapeuticProposalService', 'caseObj', 'STATUS'];

    /**
     * @namespace SurgeonSidebarCaseCtrl
     * @description Controller which controls the sidebar case nav when inside a case
     */
    function SurgeonSidebarCaseCtrl($scope, $state, therapeuticProposalService, caseObj, STATUS) {

        $scope.nav = { title: 'Caso', items: [] };
        $scope.nav.items.push({
            state: 'case.detail.surgeon.main',
            text: 'principale',
            fa: 'star'
        });
        if(caseObj.relapse) {
            $scope.nav.items.push({
                state: 'case.detail.surgeon.main( { caseId: ' + caseObj.relapse + ' } )',
                text: 'recidiva',
                fa: 'reply'
            });
        }
        $scope.nav.items.push({
            state: 'case.detail.surgeon.examination',
            text: 'esami clinici',
            fa: 'file'
        });
        if(caseObj.status >= STATUS.proposal_accepted) {
            $scope.nav.items.push({
                state: 'case.detail.surgeon.tp',
                text: 'proposta terapeutica',
                fa: 'medkit'
            });
        }
        if(caseObj.status >= STATUS.therapy_card) {
            $scope.nav.items.push({
                state: 'case.detail.surgeon.tc',
                text: 'scheda terapeutica',
                fa: 'file-o'
            });
        }
        if(caseObj.status >= STATUS.started) {
            $scope.nav.items.push({
                state: 'case.detail.surgeon.fu',
                text: 'follow up',
                fa: 'recycle'
            });
        }
        if(caseObj.status > STATUS.started) {
            $scope.nav.items.push({
                state: 'case.detail.surgeon.etc',
                text: 'scheda fine trattamento',
                fa: 'file-o'
            });
        }

        therapeuticProposalService.getInitialTherapeuticProposal(caseObj).then(function(response) {
            if(caseObj.status >= STATUS.revaluation_proposal_accepted && response.data.need_revaluation) {
                $scope.nav.items.push({
                    state: 'case.detail.surgeon.revaluation',
                    text: 'rivalutazione',
                    fa: 'refresh'
                });
            }
        });

        therapeuticProposalService.getAdjuvantTherapeuticProposal(caseObj).then(function(response) {
            if(caseObj.status >= STATUS.adjuvant_proposal_accepted) {
                $scope.nav.items.push({
                    state: 'case.detail.surgeon.adjuvant',
                    text: 'terapia adiuvante',
                    fa: 'life-bouy'
                });
            }
        });

    }

})();


