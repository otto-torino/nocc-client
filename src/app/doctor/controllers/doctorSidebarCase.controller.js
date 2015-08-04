/**
* @file doctorSidebarCase.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorSidebarCaseCtrl', DoctorSidebarCaseCtrl);

    DoctorSidebarCaseCtrl.$inject = ['$scope', '$state', 'therapeuticProposalService', 'caseObj', 'STATUS'];

    /**
     * @namespace DoctorSidebarCaseCtrl
     * @description Controller which controls the sidebar case nav when inside a case
     */
    function DoctorSidebarCaseCtrl($scope, $state, therapeuticProposalService, caseObj, STATUS) {

        $scope.nav = { title: 'Caso', items: [] };

        $scope.nav.items.push({
            state: 'case.detail.doctor.main',
            text: 'principale',
            fa: 'star'
        });
        if(caseObj.relapse && (caseObj.relapse.oncologist_contact_obj.doctor.user.id == caseObj.oncologist_contact_obj.doctor.user.id || caseObj.relapse.radiotherapist_contact_obj.doctor.user.id == caseObj.radiotherapist_contact_obj.doctor.user.id)) {
            $scope.nav.items.push({
                state: 'case.detail.doctor.main( { caseId: ' + caseObj.relapse + ' } )',
                text: 'recidiva',
                fa: 'reply'
            });
        }
        $scope.nav.items.push({
            state: 'case.detail.doctor.examination',
            text: 'esami clinici',
            fa: 'file'
        });
        if(caseObj.status >= STATUS.proposal_accepted) {
            $scope.nav.items.push({
                state: 'case.detail.doctor.tp',
                text: 'proposta terapeutica',
                fa: 'medkit'
            });
        }
        if(caseObj.status >= STATUS.started) {
            $scope.nav.items.push({
                state: 'case.detail.doctor.fu',
                text: 'follow up',
                fa: 'recycle'
            });
        }
        therapeuticProposalService.getInitialTherapeuticProposal(caseObj).then(function(response) {
            if(caseObj.status >= STATUS.revaluation_proposal_accepted && response.data.need_revaluation) {
                $scope.nav.items.push({
                    state: 'case.detail.doctor.revaluation',
                    text: 'rivalutazione',
                    fa: 'refresh'
                });
            }
        });

        therapeuticProposalService.getAdjuvantTherapeuticProposal(caseObj).then(function(response) {
            if(caseObj.status >= STATUS.adjuvant_proposal_accepted) {
                $scope.nav.items.push({
                    state: 'case.detail.doctor.adjuvant',
                    text: 'terapia adiuvante',
                    fa: 'life-bouy'
                });
            }
        });


    }

})();


