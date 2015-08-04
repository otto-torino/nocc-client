/**
* @file doctorCaseDetailMain.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorCaseDetailMainCtrl', DoctorCaseDetailMainCtrl);

    DoctorCaseDetailMainCtrl.$inject = ['$scope', '$rootScope', '$state', '$window', 'authenticationService', 'contactService', 'caseService', 'therapeuticProposalService', 'followupService', 'dialogs', 'request', 'STATUS', 'THERAPEUTIC_PROPOSAL_TYPES', 'FU_STATUS_DICT', 'FU_TYPE_DICT'];

    /**
     * @namespace DoctorCaseDetailMainCtrl
     * @description Controller of the doctor case detail view
     * @permissions hasProfile
     */
    function DoctorCaseDetailMainCtrl($scope, $rootScope, $state, $window, authenticationService, contactService, caseService, therapeuticProposalService, followupService, dialogs, request, STATUS, THERAPEUTIC_PROPOSAL_TYPES, FU_STATUS_DICT, FU_TYPE_DICT) {

        var vm = this;
        vm.model = $scope.$parent.model;

        if(vm.model.caseObj.oncologist_contact_obj.doctor.user.id == request.user.id) {
            vm.is_oncologist = true;
            vm.role = 'oncologist';
        }
        else if(vm.model.caseObj.radiotherapist_contact_obj.doctor.user.id == request.user.id) {
            vm.is_radiotherapist = true;
            vm.role = 'radiotherapist';
        }

        // reset actions bar
        $scope.bar.actions = [];

        if($scope.model.caseObj.status == STATUS.open) {
            statusOpen(vm, $state, $rootScope, dialogs, caseService);
        }
        else if($scope.model.caseObj.status == STATUS.proposals) {
            statusProposals(vm, $rootScope, $state, $window, dialogs, therapeuticProposalService, request, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.started) {
            statusStarted(vm, $rootScope, $state, $window, dialogs, request, contactService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT);
        }
        else if($scope.model.caseObj.status == STATUS.revaluation_proposal) {
            statusRevaluationProposal(vm, $rootScope, $state, $window, dialogs, therapeuticProposalService, request, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.adjuvant_proposal) {
            statusAdjuvantProposal(vm, $rootScope, $state, $window, dialogs, therapeuticProposalService, request, STATUS, THERAPEUTIC_PROPOSAL_TYPES);
        }
        else if($scope.model.caseObj.status == STATUS.adjuvant_started) {
            statusAdjuvantStarted(vm, $rootScope, $state, $window, dialogs, request, contactService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT);
        }
        else if($scope.model.caseObj.status == STATUS.ended) {
            statusAdjuvantnded(vm, $rootScope, $state, $window, dialogs, request, contactService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT);
        }
        else if($scope.model.caseObj.status == STATUS.relapse) {
            statusRelapse(vm, caseService);
        }

    }

    /**
     * Open status
     */
    function statusOpen(vm, $state, $rootScope, dialogs, caseService) {
        vm.refuseCase = function() {
            var dlg = dialogs.confirm('Sicuro di voler rifiutare il caso?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.refuse(vm.model.caseObj, vm.role).then(function(response) {
                    $rootScope.$broadcast('update_notifications');
                    $state.go('home', {}, { reload: true });
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };
        vm.acceptCase = function() {
            var dlg = dialogs.confirm('Sicuro di voler accettare il caso?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                caseService.accept(vm.model.caseObj, vm.role).then(function(response) {
                    vm.model.caseObj = response.data;
                    $rootScope.$broadcast('update_notifications');
                    $state.go('case.detail.doctor.main', {}, { reload: true });
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
     */
    function statusProposals(vm, $rootScope, $state, $window, dialogs, therapeuticProposalService, request, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        vm.data = {
            first_tp: null,
            second_tp: null
        };

        updateTherapeuticProposals();

        function doctorVote(tp, current_user) {
            if(!tp.votes_obj.length) {
                return null;
            }
            for (var i = 0, len = tp.votes_obj.length; i < len; i++) {
                var poll = tp.votes_obj[i];
                if(current_user && poll.doctor_contact.doctor.user.id === request.user.id) {
                    return poll.vote;
                }
                if(!current_user && poll.doctor_contact.doctor.user.id !== request.user.id) {
                    return poll.vote;
                }
            }

            return null;
        }

        function updateTherapeuticProposals() {
            therapeuticProposalService.list(vm.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
                vm.data.accepted_tp = therapeuticProposalService.accepted(response.data);
                vm.data.pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                response.data.forEach(function(tp) {
                    if(!tp.group_discussion) {
                        var vote = doctorVote(tp, true);
                        var other_vote = doctorVote(tp, false);
                        if(tp.priority == 1) {
                            vm.data.first_tp = tp;
                            vm.data.first_tp.vote = vote;
                            vm.data.first_tp.other_vote = other_vote;
                        }
                        else {
                            vm.data.second_tp = tp;
                            vm.data.second_tp.vote = vote;
                            vm.data.second_tp.other_vote = other_vote;

                        }
                    }
                });
            }, function(response) {
                console.log('error'); // @TODO
            });
        }

        /**
         * Vote
         * @param {Object} tp therapeutic proposal
         * @param {Boolean} v vote
         */
        vm.vote = function(tp, v) {
            var msg = v ? 'Sicuro di votare a favore della proposta terapeutica?' : 'Sicuro di votare contro la proposta terapeutica?';
            var dlg = dialogs.confirm(msg, '', { size: 'sm' });
            dlg.result.then(function(btn){
                therapeuticProposalService.vote(vm.model.caseObj.id, tp.id, v).then(function(response) {
                    tp.vote = response.data.vote;
                    updateTherapeuticProposals();
                    $rootScope.$broadcast('update_notifications');
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

        /**
         * Checks that current user voted the two tp
         */
        vm.currentDoctorVoted = function() {
            return vm.data.first_tp && vm.data.first_tp.vote !== null && vm.data.second_tp && vm.data.second_tp.vote !== null;
        };

    }

    /**
     * Started
     */
    function statusStarted(vm, $rootScope, $state, $window, dialogs, request, contactService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {

        var morning_limit = [8, 13];
        var afternoon_limit = [13, 19];

        vm.data = {
            followup: null,
            FU_STATUS_DICT: FU_STATUS_DICT
        };

        contactService.get(vm.model.caseObj.surgeon_contact_obj.doctor.user.username, vm.model.caseObj.surgeon_contact_obj.id).then(function(response) {
            vm.surgeon_contact = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list(vm.model.caseObj.id, FU_TYPE_DICT.initial, [FU_STATUS_DICT.to_be_accepted, FU_STATUS_DICT.refused, FU_STATUS_DICT.accepted, FU_STATUS_DICT.finalized]).then(function(response) {
            vm.data.followups = response.data;
            vm.data.followups.forEach(function(fu) {
                if(fu.doctor_contact.doctor.user.id == request.user.id) {
                    vm.data.followup = fu;
                }
            });
        }, function() {
            console.log('error'); // @TODO
        });

        /**
         * Filter calendar entries in order to make selectable only surgeon availability dates
         */
        vm.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
            for (var i = 0, len = $dates.length; i < len; i++) {
                var date = $dates[i];
                if($view == 'day' && vm.surgeon_contact.exceptions.indexOf(moment(date.localDateValue()).format('YYYY-MM-DD')) != -1) {
                    date.selectable = false;
                }
                else {
                    var day = moment(date.localDateValue()).format('dddd').toLowerCase();
                    if($view == 'day' && vm.surgeon_contact[day] === 0) {
                        date.selectable = false;
                    }
                    if($view == 'hour') {
                        date.selectable = false;
                        var hour = moment(date.localDateValue()).format('H');
                        var dateobj = new Date(date.utcDateValue);
                        if( (vm.surgeon_contact[day] == 1 || vm.surgeon_contact[day] == 3) &&
                            (hour >= morning_limit[0] && hour <= morning_limit[1]) ) {
                            date.selectable = true;
                        }
                        if( (vm.surgeon_contact[day] == 2 || vm.surgeon_contact[day] == 3) &&
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

        vm.createFU = function() {
            dialogs.create('doctor/templates/create_fu.tpl.html', 'DoctorCreateEditFUCtrl', {scope: vm, type: 'initial'}, { copy: false });
        };

        vm.update = function() {
            var obj = angular.copy(vm.data.followup);
            obj.date = moment(vm.data.followup.date).format('YYYY-MM-DD HH:mm:ss');
            var dlg = dialogs.confirm('Richiedere il Follow Up per la data ' + moment(vm.data.followup.date).format('DD/MM/YYYY HH:mm') + '?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                followupService.updateDate(vm.model.caseObj.id, obj).then(function(response) {
                    vm.data.followup = response.data;
                    $rootScope.$broadcast('update_notifications');
                }, function(respnose) {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });

        };
    }

    function statusRevaluationProposal(vm, $rootScope, $state, $window, dialogs, therapeuticProposalService, request, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        vm.data = {
            tp: null
        };

        updateTherapeuticProposals();

        function doctorVote(tp, current_user) {
            if(!tp.votes_obj.length) {
                return null;
            }
            for (var i = 0, len = tp.votes_obj.length; i < len; i++) {
                var poll = tp.votes_obj[i];
                if(current_user && poll.doctor_contact.doctor.user.id === request.user.id) {
                    return poll.vote;
                }
                if(!current_user && poll.doctor_contact.doctor.user.id !== request.user.id) {
                    return poll.vote;
                }
            }

            return null;
        }

        function updateTherapeuticProposals() {
            therapeuticProposalService.list(vm.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
                vm.data.accepted_tp = therapeuticProposalService.accepted(response.data);
                vm.data.pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                response.data.forEach(function(tp) {
                    if(!tp.group_discussion) {
                        var vote = doctorVote(tp, true);
                        var other_vote = doctorVote(tp, false);
                        vm.data.tp = tp;
                        vm.data.tp.vote = vote;
                        vm.data.tp.other_vote = other_vote;
                    }
                });
            }, function(response) {
                console.log('error'); // @TODO
            });
        }

        /**
         * Vote
         * @param {Object} tp therapeutic proposal
         * @param {Boolean} v vote
         */
        vm.vote = function(tp, v) {
            var msg = v ? 'Sicuro di votare a favore della proposta terapeutica?' : 'Sicuro di votare contro la proposta terapeutica?';
            var dlg = dialogs.confirm(msg, '', { size: 'sm' });
            dlg.result.then(function(btn){
                therapeuticProposalService.vote(vm.model.caseObj.id, tp.id, v).then(function(response) {
                    tp.vote = response.data.vote;
                    updateTherapeuticProposals();
                    $rootScope.$broadcast('update_notifications');
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

        /**
         * Checks that current user voted the two tp
         */
        vm.currentDoctorVoted = function() {
            return vm.data.tp && vm.data.tp.vote !== null;
        };

    }

    function statusAdjuvantProposal(vm, $rootScope, $state, $window, dialogs, therapeuticProposalService, request, STATUS, THERAPEUTIC_PROPOSAL_TYPES) {

        vm.data = {
            tp: null
        };

        updateTherapeuticProposals();

        function doctorVote(tp, current_user) {
            if(!tp.votes_obj.length) {
                return null;
            }
            for (var i = 0, len = tp.votes_obj.length; i < len; i++) {
                var poll = tp.votes_obj[i];
                if(current_user && poll.doctor_contact.doctor.user.id === request.user.id) {
                    return poll.vote;
                }
                if(!current_user && poll.doctor_contact.doctor.user.id !== request.user.id) {
                    return poll.vote;
                }
            }

            return null;
        }

        function updateTherapeuticProposals() {
            therapeuticProposalService.list(vm.model.caseObj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
                vm.data.accepted_tp = therapeuticProposalService.accepted(response.data);
                vm.data.pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                response.data.forEach(function(tp) {
                    if(!tp.group_discussion) {
                        var vote = doctorVote(tp, true);
                        var other_vote = doctorVote(tp, false);
                        vm.data.tp = tp;
                        vm.data.tp.vote = vote;
                        vm.data.tp.other_vote = other_vote;
                    }
                });
            }, function(response) {
                console.log('error'); // @TODO
            });
        }

        /**
         * Vote
         * @param {Object} tp therapeutic proposal
         * @param {Boolean} v vote
         */
        vm.vote = function(tp, v) {
            var msg = v ? 'Sicuro di votare a favore della proposta terapeutica?' : 'Sicuro di votare contro la proposta terapeutica?';
            var dlg = dialogs.confirm(msg, '', { size: 'sm' });
            dlg.result.then(function(btn){
                therapeuticProposalService.vote(vm.model.caseObj.id, tp.id, v).then(function(response) {
                    tp.vote = response.data.vote;
                    updateTherapeuticProposals();
                    $rootScope.$broadcast('update_notifications');
                }, function() {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });
        };

        /**
         * Checks that current user voted the two tp
         */
        vm.currentDoctorVoted = function() {
            return vm.data.tp && vm.data.tp.vote !== null;
        };

    }

    /**
     * Adjuvant Started
     */
    function statusAdjuvantStarted(vm, $rootScope, $state, $window, dialogs, request, contactService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {

        var morning_limit = [8, 13];
        var afternoon_limit = [13, 19];

        vm.data = {
            followup: null,
            FU_STATUS_DICT: FU_STATUS_DICT
        };

        contactService.get(vm.model.caseObj.surgeon_contact_obj.doctor.user.username, vm.model.caseObj.surgeon_contact_obj.id).then(function(response) {
            vm.surgeon_contact = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list(vm.model.caseObj.id, FU_TYPE_DICT.adjuvant, [FU_STATUS_DICT.to_be_accepted, FU_STATUS_DICT.refused, FU_STATUS_DICT.accepted, FU_STATUS_DICT.finalized]).then(function(response) {
            vm.data.followups = response.data;
            vm.data.followups.forEach(function(fu) {
                if(fu.doctor_contact.doctor.user.id == request.user.id) {
                    vm.data.followup = fu;
                }
            });
        }, function() {
            console.log('error'); // @TODO
        });

        /**
         * Filter calendar entries in order to make selectable only surgeon availability dates
         */
        vm.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
            for (var i = 0, len = $dates.length; i < len; i++) {
                var date = $dates[i];
                if($view == 'day' && vm.surgeon_contact.exceptions.indexOf(moment(date.localDateValue()).format('YYYY-MM-DD')) != -1) {
                    date.selectable = false;
                }
                else {
                    var day = moment(date.localDateValue()).format('dddd').toLowerCase();
                    if($view == 'day' && vm.surgeon_contact[day] === 0) {
                        date.selectable = false;
                    }
                    if($view == 'hour') {
                        date.selectable = false;
                        var hour = moment(date.localDateValue()).format('H');
                        var dateobj = new Date(date.utcDateValue);
                        if( (vm.surgeon_contact[day] == 1 || vm.surgeon_contact[day] == 3) &&
                            (hour >= morning_limit[0] && hour <= morning_limit[1]) ) {
                            date.selectable = true;
                        }
                        if( (vm.surgeon_contact[day] == 2 || vm.surgeon_contact[day] == 3) &&
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

        vm.createFU = function() {
            dialogs.create('doctor/templates/create_fu.tpl.html', 'DoctorCreateEditFUCtrl', {scope: vm, type: 'adjuvant'}, { copy: false });
        };

        vm.update = function() {
            var obj = angular.copy(vm.data.followup);
            obj.date = moment(vm.data.followup.date).format('YYYY-MM-DD HH:mm:ss');
            var dlg = dialogs.confirm('Richiedere il Follow Up per la data ' + moment(vm.data.followup.date).format('DD/MM/YYYY HH:mm') + '?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                followupService.updateDate(vm.model.caseObj.id, obj).then(function(response) {
                    vm.data.followup = response.data;
                    $rootScope.$broadcast('update_notifications');
                }, function(respnose) {
                    console.log('error'); // @TODO
                });
            },function(btn){
                // cancel
            });

        };
    }

    function statusAdjuvantnded(vm, $rootScope, $state, $window, dialogs, request, contactService, followupService, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {

        vm.data = {
            followup: null,
            FU_STATUS_DICT: FU_STATUS_DICT
        };

        followupService.list(vm.model.caseObj.id, FU_TYPE_DICT.final, [FU_STATUS_DICT.accepted, FU_STATUS_DICT.finalized]).then(function(response) {
            response.data.forEach(function(fu) {
                vm.data.followup = fu;
            });
        }, function() {
            console.log('error'); // @TODO
        });
    }

    function statusRelapse(vm, caseService) {
        vm.data = {};
        caseService.getRelapse(vm.model.caseObj).then(function(response) {
            vm.data.relapse = response.data;
        }, function() {
            console.log('error'); // @TODO
        });
    }

})();
