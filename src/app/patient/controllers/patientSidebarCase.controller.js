/**
* @file patientSidebarCase.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientSidebarCaseCtrl', PatientSidebarCaseCtrl);

    PatientSidebarCaseCtrl.$inject = ['$scope', '$state', 'therapeuticProposalService', 'caseObj', 'STATUS'];

    /**
     * @namespace patientSidebarCaseCtrl
     * @description Controller which controls the sidebar case nav when inside a case
     */
    function PatientSidebarCaseCtrl($scope, $state, therapeuticProposalService, caseObj, STATUS) {

        $scope.nav = { title: 'Caso', items: [] };

        $scope.nav.items.push({
            state: 'case.detail.patient.main',
            text: 'principale',
            fa: 'star'
        });
        if(caseObj.relapse) {
            $scope.nav.items.push({
                state: 'case.detail.patient.main( { caseId: ' + caseObj.relapse + ' } )',
                text: 'recidiva',
                fa: 'reply'
            });
        }
        $scope.nav.items.push({
            state: 'case.detail.patient.examination',
            text: 'esami clinici',
            fa: 'file'
        });
        /**
         * Uncomment if tp must be seen when accepted
         *
        if(caseObj.status == STATUS.proposal_accepted) {
            $scope.nav.items.push({
                state: 'case.detail.patient.tp',
                text: 'proposta terapeutica',
                fa: 'life-bouy'
            });
        }
        */
        if(caseObj.status >= STATUS.started) {
            $scope.nav.items.push({
                state: 'case.detail.patient.tp',
                text: 'proposta terapeutica',
                fa: 'life-bouy'
            });
            $scope.nav.items.push({
                state: 'case.detail.patient.fu',
                text: 'follow up',
                fa: 'recycle'
            });
        }
        therapeuticProposalService.getInitialTherapeuticProposal(caseObj).then(function(response) {
            if(caseObj.status >= STATUS.revaluation_started && response.data.need_revaluation) {
                $scope.nav.items.push({
                    state: 'case.detail.patient.revaluation',
                    text: 'rivalutazione',
                    fa: 'refresh'
                });
            }
        });

        therapeuticProposalService.getAdjuvantTherapeuticProposal(caseObj).then(function(response) {
            if(caseObj.status >= STATUS.adjuvant_started) {
                $scope.nav.items.push({
                    state: 'case.detail.patient.adjuvant',
                    text: 'terapia adiuvante',
                    fa: 'life-bouy'
                });
            }
        });
    }

})();
