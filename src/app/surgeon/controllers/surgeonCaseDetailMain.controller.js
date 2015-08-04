/**
* @file surgeonCaseDetailMain.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonCaseDetailMainCtrl', SurgeonCaseDetailMainCtrl);

    SurgeonCaseDetailMainCtrl.$inject = ['$scope', '$state', '$window', 'authenticationService', 'contactService', 'caseService', 'therapeuticProposalService', 'followupService', 'dialogs', 'request', 'STATUS', 'THERAPEUTIC_PROPOSAL_TYPES', 'FU_STATUS_DICT', 'FU_TYPE_DICT'];

    /**
     * @namespace SurgeonCaseDetailMainCtrl
     * @description Controller of the surgeon case detail view
     * @permissions hasProfile
     */
    function SurgeonCaseDetailMainCtrl($scope, $state, $window, authenticationService, contactService, caseService, therapeuticProposalService, followupService, dialogs, request, STATUS, THERAPEUTIC_PROPOSAL_TYPES, FU_STATUS_DICT, FU_TYPE_DICT) {

        // inherits the $scope.model object from the parent controller
console.log($scope.model.caseObj);
        $scope.bar.actions = [];
        if($scope.model.caseObj.status == STATUS.open) {
            statusOpen($scope, $state, $window, dialogs, caseService, STATUS);
        }
        else if($scope.model.caseObj.status == STATUS.doctor_association) {
            statusDoctorAssociation($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.proposals) {
            statusProposals($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.proposal_accepted) {
            statusProposalAccepted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS);
        }
        else if($scope.model.caseObj.status == STATUS.started) {
            statusStarted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT);
        }
        else if($scope.model.caseObj.status == STATUS.revaluation) {
            statusRevalutation($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.revaluation_proposal) {
            statusRevaluationProposal($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.revaluation_proposal_accepted) {
            statusRevaluationProposalAccepted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS);
        }
        else if($scope.model.caseObj.status == STATUS.revaluation_started) {
            statusRevaluationStarted($scope, $state, $window, dialogs, caseService, STATUS);
        }
        else if($scope.model.caseObj.status == STATUS.revaluation_ended || $scope.model.caseObj.status == STATUS.completed) {
            statusCompleted($scope, $state, $window, dialogs, caseService, STATUS);
        }
        else if($scope.model.caseObj.status == STATUS.adjuvant) {
            statusAdjuvant($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.adjuvant_proposal) {
            statusAdjuvantProposal($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.adjuvant_proposal_accepted) {
            statusAdjuvantProposalAccepted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS);
        }
        else if($scope.model.caseObj.status == STATUS.adjuvant_started) {
            statusAdjuvantStarted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT);
        }
        else if($scope.model.caseObj.status == STATUS.ended) {
            statusEnded($scope, $state, $window, dialogs, caseService, therapeuticProposalService, contactService, followupService, request, STATUS, FU_STATUS_DICT, FU_TYPE_DICT);
        }
        else if($scope.model.caseObj.status == STATUS.final_fu_ended) {
            statusFinalFUEnded($scope, $state, $window, dialogs, caseService, STATUS);
        }
        else if($scope.model.caseObj.status == STATUS.relapse) {
            statusRelapse($scope, $state, $window, dialogs, caseService, STATUS);
        }

    }

    /**
     * Open status
     * Surgeon has to associate an oncologist and a radiotherapist who have to accept the case. I one of them refuses then the
     * surgeon must choose another doctor till someone accepts
     */
    function statusOpen($scope, $state, $window, dialogs, caseService, STATUS) {
        $scope.associateOncologist = function() {
            dialogs.create('surgeon/templates/associate_oncologist.tpl.html', 'SurgeonAssociateOncologistCtrl', $scope, { copy: false });
        };
        $scope.associateRadiotherapist = function() {
            dialogs.create('surgeon/templates/associate_radiotherapist.tpl.html', 'SurgeonAssociateRadiotherapistCtrl', $scope, { copy: false });
        };
        $scope.associateObservers = function() {
            dialogs.create('surgeon/templates/associate_observers.tpl.html', 'SurgeonAssociateObserversCtrl', $scope, { copy: false });
        };
        $scope.forwardStatus = function() {
            var dlg = dialogs.confirm('Sicuro di voler passare alla creazione delle proposte terapeutiche?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.doctor_association).then(function(response) {
                    //$state.go('case.detail.surgeon.main', {}, {reload: true});
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };
    }

    /**
     * Doctor association status
     * Surgeon has to define two therapeutic proposals that will be voted by the other doctoes in the next step
     */
    function statusDoctorAssociation($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        $scope.data = {
            first_tp: null,
            second_tp: null
        };

        therapeuticProposalService.list($scope.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
            response.data.forEach(function(tp) {
                if(tp.priority == 1) {
                    $scope.data.first_tp = tp;
                }
                else {
                    $scope.data.second_tp = tp;

                }
            });
        }, function(response) {
            console.log('error'); // @TODO
        });

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.createTherapeuticProposal = function(tpn, priority) {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, priority: priority, tp_type: 'initial'}, { copy: false });
        };

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.editTherapeuticProposal = function(tpn) {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, tp_type: 'initial'}, { copy: false });
        };

        $scope.forwardStatus = function() {
            var dlg = dialogs.confirm('Sicuro di voler passare alla votazione delle proposte terapeutiche?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.proposals).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };
    }

    /**
     * Proposals status
     * Surgeon waits for the other doctors to vote the proposals. If none is accepted then after a group discussion a new proposal
     * must be inserted which is the definitive one
     */
    function statusProposals($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        $scope.data = {
            first_tp: null,
            second_tp: null,
            accepted_tp: null
        };

        therapeuticProposalService.list($scope.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
            $scope.data.pollingComplete = therapeuticProposalService.pollingComplete(response.data);
            $scope.data.accepted_tp = therapeuticProposalService.accepted(response.data);
            response.data.forEach(function(tp) {
                if(!tp.group_discussion && tp.priority == 1) { //@TODO add negation for other fields (followup, revaluation etc...)
                    $scope.data.first_tp = tp;
                }
                else if(!tp.group_discussion) {
                    $scope.data.second_tp = tp;
                }
            });
        }, function(response) {
            console.log('error'); // @TODO
        });

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.createTherapeuticProposal = function(tpn) {
            if(!$scope.data.pollingComplete || $scope.data.accepted_tp) {
                console.log('error');
                return;
            }
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, priority: 0, group_discussion: true, tp_type: 'initial'}, { copy: false });
        };

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.editTherapeuticProposal = function(tpn) {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, tp_type: 'initial'}, { copy: false });
        };

        $scope.freezeTpAndForwardStep = function() {
            if(!$scope.data.accepted_tp) {
                console.log('error');
            }
            else {
                therapeuticProposalService.setAccepted($scope.model.caseObj.id, $scope.data.accepted_tp.id).then(function(response) {
                    caseService.gotoStatus($scope.model.caseObj, STATUS.proposal_accepted).then(function(response) {
                        $window.location.reload();
                    }, function() {
                        console.log('error'); // @TODO
                    });
                }, function() {
                    console.log('error'); // @TODO
                });
            }
        };

    }

    function statusProposalAccepted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS) {
        $scope.forwardStatus = function() {
            var dlg = dialogs.confirm('Sicuro di voler avviare la terapia?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.started).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };
    }

    /**
     * Status Started
     */
    function statusStarted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {

        $scope.data = {
            followups: null,
            FU_STATUS_DICT: FU_STATUS_DICT
        };

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.initial, [FU_STATUS_DICT.to_be_accepted, FU_STATUS_DICT.accepted]).then(function(response) {
            $scope.data.followups = response.data;
        }, function() {
            console.log('error'); // @TODO
        });

        therapeuticProposalService.getInitialTherapeuticProposal($scope.model.caseObj).then(function(response) {
            $scope.tp = response.data;
            console.log($scope.tp);
        }, function() {
            console.log('error'); // @TODO
        });

        $scope.acceptFU = function(followup) {
            var dlg = dialogs.confirm('Sicuro di voler accettare la data proposta per il Follow Up?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                var index = $scope.data.followups.indexOf(followup);
                followupService.accept(followup['case'], followup.id).then(function(response) {
                    $scope.data.followups[index] = response.data;
                }, function() {
                    console.log('error');
                });
            },function(btn){
                // cancel
            });
        };

        $scope.refuseFU = function(followup) {
            dialogs.create('surgeon/templates/refuse_fu.tpl.html', 'SurgeonRefuseFUCtrl', {scope: $scope, followup: followup}, { copy: false });
        };

        $scope.closeFollowUp = function(followup) {
            var dlg = dialogs.confirm('Sicuro di voler chiudere il Follow Up?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                var index = $scope.data.followups.indexOf(followup);
                followupService.close(followup['case'], followup).then(function(response) {
                    $scope.data.followups.splice(index, 1);
                }, function() {
                    console.log('error');
                });
            },function(btn){
                // cancel
            });

        };

        $scope.forwardStatusRevaluation = function() {
            var dlg = dialogs.confirm('Sicuro di voler passare alla rivalutazione?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.revaluation).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

        $scope.forwardStatusCompleted = function() {
            var dlg = dialogs.confirm('Sicuro di voler chiudere la terapia?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.completed).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

    }

    /**
     * Status Revaluation
     */
    function statusRevalutation($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        $scope.data = {
            tp: null
        };

        therapeuticProposalService.list($scope.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
            if(response.data.length === 1) {
                $scope.data.tp = response.data[0];
            }
        }, function(response) {
            console.log('error'); // @TODO
        });

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.createTherapeuticProposal = function() {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: 'tp', priority: 1, tp_type: 'revaluation'}, { copy: false });
        };

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.editTherapeuticProposal = function(tpn) {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, tp_type: 'revaluation'}, { copy: false });
        };

        $scope.forwardStatus = function() {
            var dlg = dialogs.confirm('Sicuro di voler passare alla votazione della proposta terapeutica?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.revaluation_proposal).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

    }

    /**
     * Status Revaluation Proposal
     */
    function statusRevaluationProposal($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        $scope.data = {
            tp: null,
            accepted_tp: null
        };

        therapeuticProposalService.list($scope.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
            $scope.data.pollingComplete = therapeuticProposalService.pollingComplete(response.data);
            $scope.data.accepted_tp = therapeuticProposalService.accepted(response.data);
            response.data.forEach(function(tp) {
                if(!tp.group_discussion) { //@TODO add negation for other fields (followup, revaluation etc...)
                    $scope.data.tp = tp;
                }
            });
        }, function(response) {
            console.log('error'); // @TODO
        });

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.createTherapeuticProposal = function(tpn) {
            if(!$scope.data.pollingComplete || $scope.data.accepted_tp) {
                console.log('error');
                return;
            }
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, priority: 0, group_discussion: true, tp_type: 'revaluation'}, { copy: false });
        };

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.editTherapeuticProposal = function(tpn) {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, tp_type: 'revaluation'}, { copy: false });
        };

        $scope.freezeTpAndForwardStep = function() {
            if(!$scope.data.accepted_tp) {
                console.log('error');
            }
            else {
                therapeuticProposalService.setAccepted($scope.model.caseObj.id, $scope.data.accepted_tp.id).then(function(response) {
                    caseService.gotoStatus($scope.model.caseObj, STATUS.revaluation_proposal_accepted).then(function(response) {
                        $window.location.reload();
                    }, function() {
                        console.log('error'); // @TODO
                    });
                }, function() {
                    console.log('error'); // @TODO
                });
            }
        };

    }

    function statusRevaluationProposalAccepted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS) {

        $scope.forwardStatus = function() {
            var dlg = dialogs.confirm('Sicuro di voler avviare la rivalutazione?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.revaluation_started).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };
    }

    function statusRevaluationStarted($scope, $state, $window, dialogs, caseService, STATUS) {

        $scope.forwardStatus = function() {
            var dlg = dialogs.confirm('Sicuro di voler chiudere la rivalutazione?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.revaluation_ended).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

    }

    function statusCompleted($scope, $state, $window, dialogs, caseService, STATUS) {

        $scope.forwardStatusAdjuvant = function() {
            var dlg = dialogs.confirm('Sicuro di voler iniziare una terapia adiuvante?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.adjuvant).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };
    }

    /**
     * Status Adjuvant
     */
    function statusAdjuvant($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        $scope.data = {
            tp: null
        };

        therapeuticProposalService.list($scope.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
            if(response.data.length === 1) {
                $scope.data.tp = response.data[0];
            }
        }, function(response) {
            console.log('error'); // @TODO
        });

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.createTherapeuticProposal = function() {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: 'tp', priority: 1, tp_type: 'adjuvant'}, { copy: false });
        };

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.editTherapeuticProposal = function(tpn) {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, tp_type: 'adjuvant'}, { copy: false });
        };

        $scope.forwardStatus = function() {
            var dlg = dialogs.confirm('Sicuro di voler passare alla votazione della proposta terapeutica?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.adjuvant_proposal).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

    }

    /**
     * Status Adjuvant Proposal
     */
    function statusAdjuvantProposal($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        $scope.data = {
            tp: null,
            accepted_tp: null
        };

        therapeuticProposalService.list($scope.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
            $scope.data.pollingComplete = therapeuticProposalService.pollingComplete(response.data);
            $scope.data.accepted_tp = therapeuticProposalService.accepted(response.data);
            response.data.forEach(function(tp) {
                if(!tp.group_discussion) { //@TODO add negation for other fields (followup, revaluation etc...)
                    $scope.data.tp = tp;
                }
            });
        }, function(response) {
            console.log('error'); // @TODO
        });

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.createTherapeuticProposal = function(tpn) {
            if(!$scope.data.pollingComplete || $scope.data.accepted_tp) {
                console.log('error');
                return;
            }
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, priority: 0, group_discussion: true, tp_type: 'adjuvant'}, { copy: false });
        };

        // tpn: name of the $scope.data property which stores the therapeutic proposal
        $scope.editTherapeuticProposal = function(tpn) {
            dialogs.create('surgeon/templates/create_edit_therapeutic_proposal.tpl.html', 'SurgeonCreateEditTherapeuticProposalCtrl', {scope: $scope, tpn: tpn, tp_type: 'adjuvant'}, { copy: false });
        };

        $scope.freezeTpAndForwardStep = function() {
            if(!$scope.data.accepted_tp) {
                console.log('error');
            }
            else {
                therapeuticProposalService.setAccepted($scope.model.caseObj.id, $scope.data.accepted_tp.id).then(function(response) {
                    caseService.gotoStatus($scope.model.caseObj, STATUS.adjuvant_proposal_accepted).then(function(response) {
                        $window.location.reload();
                    }, function() {
                        console.log('error'); // @TODO
                    });
                }, function() {
                    console.log('error'); // @TODO
                });
            }
        };

    }

    function statusAdjuvantProposalAccepted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, STATUS) {

        $scope.forwardStatus = function() {
            var dlg = dialogs.confirm('Sicuro di voler avviare la terapia adiuvante?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.adjuvant_started).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };
    }

    /**
     * Status Adjuvant Started
     */
    function statusAdjuvantStarted($scope, $state, $window, dialogs, caseService, therapeuticProposalService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {

        $scope.data = {
            followups: null,
            FU_STATUS_DICT: FU_STATUS_DICT
        };

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.adjuvant, [FU_STATUS_DICT.to_be_accepted, FU_STATUS_DICT.accepted]).then(function(response) {
            $scope.data.followups = response.data;
        }, function() {
            console.log('error'); // @TODO
        });

        therapeuticProposalService.getAdjuvantTherapeuticProposal($scope.model.caseObj).then(function(response) {
            $scope.tp = response.data;
            console.log($scope.tp);
        }, function() {
            console.log('error'); // @TODO
        });

        $scope.acceptFU = function(followup) {
            var dlg = dialogs.confirm('Sicuro di voler accettare la data proposta per il Follow Up?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                var index = $scope.data.followups.indexOf(followup);
                followupService.accept(followup['case'], followup.id).then(function(response) {
                    $scope.data.followups[index] = response.data;
                }, function() {
                    console.log('error');
                });
            },function(btn){
                // cancel
            });
        };

        $scope.refuseFU = function(followup) {
            dialogs.create('surgeon/templates/refuse_fu.tpl.html', 'SurgeonRefuseFUCtrl', {scope: $scope, followup: followup}, { copy: false });
        };

        $scope.closeFollowUp = function(followup) {
            var dlg = dialogs.confirm('Sicuro di voler chiudere il Follow Up?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                var index = $scope.data.followups.indexOf(followup);
                followupService.close(followup['case'], followup).then(function(response) {
                    $scope.data.followups.splice(index, 1);
                }, function() {
                    console.log('error');
                });
            },function(btn){
                // cancel
            });

        };

        $scope.forwardStatusEnded = function() {
            var dlg = dialogs.confirm('Sicuro di voler chiudere la terapia?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.adjuvant_ended).then(function(response) {
                    caseService.gotoStatus($scope.model.caseObj, STATUS.ended).then(function(response) {
                        $window.location.reload();
                    }, function() { console.log('error'); });
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

    }

    function statusEnded($scope, $state, $window, dialogs, caseService, therapeuticProposalService, contactService, followupService, request, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {
        var morning_limit = [8, 13];
        var afternoon_limit = [13, 19];

        $scope.data = {
            followup: null,
            followups: [],
            FU_STATUS_DICT: FU_STATUS_DICT
        };

        contactService.get($scope.model.caseObj.surgeon_contact_obj.doctor.user.username, $scope.model.caseObj.surgeon_contact_obj.id).then(function(response) {
            $scope.surgeon_contact = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.final, [FU_STATUS_DICT.to_be_accepted, FU_STATUS_DICT.refused, FU_STATUS_DICT.accepted, FU_STATUS_DICT.finalized]).then(function(response) {
            $scope.data.followups = response.data;
            $scope.data.followups.forEach(function(fu) {
                if(fu.doctor_contact.doctor.user.id == request.user.id) {
                    $scope.data.followup = fu;
                }
            });
        }, function() {
            console.log('error'); // @TODO
        });

        /**
         * Filter calendar entries in order to make selectable only surgeon availability dates
         */
        $scope.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
            for (var i = 0, len = $dates.length; i < len; i++) {
                var date = $dates[i];
                if($view == 'day' && $scope.surgeon_contact.exceptions.indexOf(moment(date.localDateValue()).format('YYYY-MM-DD')) != -1) {
                    date.selectable = false;
                }
                else {
                    var day = moment(date.localDateValue()).format('dddd').toLowerCase();
                    if($view == 'day' && $scope.surgeon_contact[day] === 0) {
                        date.selectable = false;
                    }
                    if($view == 'hour') {
                        date.selectable = false;
                        var hour = moment(date.localDateValue()).format('H');
                        var dateobj = new Date(date.utcDateValue);
                        if( ($scope.surgeon_contact[day] == 1 || $scope.surgeon_contact[day] == 3) &&
                            (hour >= morning_limit[0] && hour <= morning_limit[1]) ) {
                            date.selectable = true;
                        }
                        if( ($scope.surgeon_contact[day] == 2 || $scope.surgeon_contact[day] == 3) &&
                            (hour >= afternoon_limit[0] && hour <= afternoon_limit[1]) ) {
                            date.selectable = true;
                        }
                    }
                    if($view == 'minute') {
                        if(/\d\d*:[^03]\d [AP]M/.test(date.display) || /\d\d*:\d[^0] [AP]M/.test(date.display)) {
                            date.selectable = false;
                        }
                    }
                }
            }
        };

        $scope.createFU = function() {
            dialogs.create('doctor/templates/create_fu.tpl.html', 'DoctorCreateEditFUCtrl', {scope: $scope, type: 'final'}, { copy: false });
        };

        $scope.closeFollowUp = function(followup) {
            var dlg = dialogs.confirm('Sicuro di voler chiudere il Follow Up?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                var index = $scope.data.followups.indexOf(followup);
                followupService.close(followup['case'], followup).then(function(response) {
                    caseService.gotoStatus($scope.model.caseObj, STATUS.final_fu_ended).then(function(response) {
                        $window.location.reload();
                    }, function() {
                        console.log('error'); // @TODO
                    });
                }, function() {
                    console.log('error');
                });
            },function(btn){
                // cancel
            });

        };

    }
    function statusFinalFUEnded($scope, $state, $window, dialogs, caseService, STATUS) {

        $scope.data = {
            forward: false
        };

        $scope.$watch('data.forward', function (value) {
            if(value) {
                caseService.gotoStatus($scope.model.caseObj, STATUS.relapse).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            }
        });

        $scope.forwardStatusClosed = function() {
            var dlg = dialogs.confirm('Sicuro di voler chiudere il caso?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.gotoStatus($scope.model.caseObj, STATUS.closed).then(function(response) {
                    $window.location.reload();
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

        $scope.openRelapse = function() {
            dialogs.create('surgeon/templates/case_detail_relapse.tpl.html', 'SurgeonCaseDetailRelapse', { scope: $scope }, { copy: false });
        };
    }

    function statusRelapse($scope, $state, $window, dialogs, caseService, STATUS) {
        caseService.getRelapse($scope.model.caseObj).then(function(response) {
            $scope.relapse = response.data;
        }, function() {
            console.log('error'); // @TODO
        });
    }

})();
