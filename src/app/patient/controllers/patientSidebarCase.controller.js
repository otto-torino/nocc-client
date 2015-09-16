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

    PatientSidebarCaseCtrl.$inject = ['$scope', '$state', 'therapeuticProposalService', 'therapyCardService', 'endTherapyCardService', 'caseObj', 'STATUS'];

    /**
     * @namespace patientSidebarCaseCtrl
     * @description Controller which controls the sidebar case nav when inside a case
     */
    function PatientSidebarCaseCtrl($scope, $state, therapeuticProposalService, therapyCardService, endTherapyCardService, caseObj, STATUS) {

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
                state: 'case.detail.patient.fu',
                text: 'follow up',
                fa: 'recycle'
            });
        }

        if(caseObj.status > STATUS.proposal_accepted) {
            therapeuticProposalService.getInitialTherapeuticProposal(caseObj).then(function(response) {
                if(response.data.visible) {
                    $scope.nav.items.push({
                        state: 'case.detail.patient.tp',
                        text: 'proposta terapeutica',
                        fa: 'life-bouy'
                    });
                }
                if(caseObj.status >= STATUS.revaluation_started && response.data.need_revaluation) {
                    therapeuticProposalService.getRevaluationTherapeuticProposal(caseObj).then(function(response) {
                        if(response.data.visible) {
                            $scope.nav.items.push({
                                state: 'case.detail.patient.revaluation',
                                text: 'rivalutazione',
                                fa: 'refresh'
                            });
                        }
                        else {
                            therapyCardService.getRevaluation(caseObj).then(function(response) {
                                if(response.data.visible) {
                                    $scope.nav.items.push({
                                        state: 'case.detail.patient.revaluation',
                                        text: 'rivalutazione',
                                        fa: 'refresh'
                                    });
                                }
                                else if(caseObj.status >= STATUS.revaluation_ended) {
                                    endTherapyCardService.getRevaluation(caseObj).then(function(response) {
                                        if(response.data.visible) {
                                            $scope.nav.items.push({
                                                state: 'case.detail.patient.revaluation',
                                                text: 'rivalutazione',
                                                fa: 'refresh'
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }, function() { console.log('error'); });
                }
            });
        }

        if(caseObj.status > STATUS.therapy_card) {
            therapyCardService.getInitial(caseObj).then(function(response) {
                if(response.data.visible) {
                    $scope.nav.items.push({
                        state: 'case.detail.patient.tc',
                        text: 'scheda terapeutica',
                        fa: 'file-o'
                    });
                }
            });
        }

        if(caseObj.status > STATUS.started) {
            endTherapyCardService.getInitial(caseObj).then(function(response) {
                if(response.data.visible) {
                    $scope.nav.items.push({
                        state: 'case.detail.patient.etc',
                        text: 'scheda fine trattamento',
                        fa: 'file-o'
                    });
                }
            });
        }

        if(caseObj.status >= STATUS.adjuvant_started) {
            therapeuticProposalService.getAdjuvantTherapeuticProposal(caseObj).then(function(response) {
                if(response.data.visible) {
                    $scope.nav.items.push({
                        state: 'case.detail.patient.adjuvant',
                        text: 'terapia adiuvante',
                        fa: 'life-bouy'
                    });
                }
                else {
                    therapyCardService.getAdjuvant(caseObj).then(function(response) {
                        if(response.data.visible) {
                            $scope.nav.items.push({
                                state: 'case.detail.patient.adjuvant',
                                text: 'terapia adiuvante',
                                fa: 'life-bouy'
                            });
                        }
                        else if(caseObj.status >= STATUS.adjuvant_ended) {
                            endTherapyCardService.getAdjuvant(caseObj).then(function(response) {
                                if(response.data.visible) {
                                    $scope.nav.items.push({
                                        state: 'case.detail.patient.adjuvant',
                                        text: 'terapia adiuvante',
                                        fa: 'life-bouy'
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    }

})();
