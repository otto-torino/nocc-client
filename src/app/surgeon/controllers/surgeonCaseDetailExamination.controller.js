/**
* @file surgeonCaseDetailExamination.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonCaseDetailExaminationCtrl', SurgeonCaseDetailExaminationCtrl);

    SurgeonCaseDetailExaminationCtrl.$inject = ['$scope', '$state', 'examinationService', 'followupService', 'dialogs', 'request', 'STATUS', 'FU_STATUS_DICT', 'FU_TYPE_DICT'];

    /**
     * @namespace SurgeonCaseDetailExaminationCtrl
     * @description Controller of the surgeon case detail view, examinations
     * @permissions isSurgeonCase
     */
    function SurgeonCaseDetailExaminationCtrl($scope, $state, examinationService, followupService, dialogs, request, STATUS, FU_STATUS_DICT, FU_TYPE_DICT) {

        var vm = this;
        vm.caseObj = $scope.model.caseObj;
        vm.can_edit_initial = false;

        vm.activeTab_initial = false;
        vm.activeTab_followup = false;
        vm.activeTab_adj = false;
        vm.activeTab_final = false;
        vm['activeTab_' + $state.params.activeTab] = true;

        vm.examinations = [];
        vm.fu_examinations = [];
        vm.adj_examinations = [];
        vm.final_examinations = [];

        examinationService.list(vm.caseObj.id).then(function(response) {
            response.data.forEach(function(e) {
                if(e.follow_up) {
                    if(e.follow_up_obj.type == FU_TYPE_DICT.adjuvant) {
                        vm.adj_examinations.push(e);
                    }
                    else if(e.follow_up_obj.type == FU_TYPE_DICT.final) {
                        vm.final_examinations.push(e);
                    }
                    else {
                        vm.fu_examinations.push(e);
                    }
                }
                else {
                    vm.examinations.push(e);
                }
            });
        }, function() {
            // @TODO
            console.log('error');
        });

        // reset actions bar
        $scope.bar.actions = [];

        vm.openExaminationText = function(examination) {
            dialogs.notify('Referto', examination.text);
        };

        if(vm.caseObj.status === STATUS.open) {
            surgeonCaseDetailExaminationCtrlActive({can_edit_initial: true}, vm, $scope, dialogs, examinationService);
        }
        else if(vm.caseObj.status === STATUS.started) {
            followupService.list(vm.caseObj.id, FU_TYPE_DICT.initial, [FU_STATUS_DICT.accepted]).then(function(response) {
                if(response.data.length) {
                    vm.followups = response.data;
                    surgeonCaseDetailExaminationCtrlActive({can_edit_followup: true}, vm, $scope, dialogs, examinationService);
                }
            });
        }
        else if(vm.caseObj.status === STATUS.adjuvant_started) {
            followupService.list(vm.caseObj.id, FU_TYPE_DICT.adjuvant, [FU_STATUS_DICT.accepted]).then(function(response) {
                if(response.data.length) {
                    vm.followups = response.data;
                    surgeonCaseDetailExaminationCtrlActive({can_edit_adjuvant: true}, vm, $scope, dialogs, examinationService);
                }
            });
        }
        else if(vm.caseObj.status === STATUS.ended) {
            followupService.list(vm.caseObj.id, FU_TYPE_DICT.final, [FU_STATUS_DICT.accepted]).then(function(response) {
                if(response.data.length) {
                    vm.followups = response.data;
                    surgeonCaseDetailExaminationCtrlActive({can_edit_final: true}, vm, $scope, dialogs, examinationService);
                }
            });
        }


    }

    /**
     * Open status
     */
    function surgeonCaseDetailExaminationCtrlActive(opts, vm, $scope, dialogs, examinationService) {

        vm.can_edit_initial = typeof opts['can_edit_initial'] === 'undefined' ? false : opts['can_edit_initial'];
        vm.can_edit_followup = typeof opts['can_edit_followup'] === 'undefined' ? false : opts['can_edit_followup'];
        vm.can_edit_adjuvant = typeof opts['can_edit_adjuvant'] === 'undefined' ? false : opts['can_edit_adjuvant'];
        vm.can_edit_final = typeof opts['can_edit_final'] === 'undefined' ? false : opts['can_edit_final'];

        vm.canEdit = function(examination) {
            if(vm.can_edit_initial && !examination.follow_up) {
                return true;
            }
            if((vm.can_edit_followup || vm.can_edit_adjuvant || vm.can_edit_final) && examination.follow_up) {
                return true;
            }

            return false;
        };

        vm.addEditExamination = function(examination, followup) {
            var exsl;
            var obj = {
                ctrl: vm,
                examination: examination
            };
            if(vm.can_edit_followup) {
                obj.exsl = 'fu_examinations';
                obj.followups = vm.followups;
            }
            else if(vm.can_edit_adjuvant) {
                obj.exsl = 'adj_examinations';
                obj.followups = vm.followups;
            }
            else if(vm.can_edit_final) {
                obj.exsl = 'final_examinations';
                obj.followups = vm.followups;
            }
            else {
                obj.exsl = 'examinations';
            }
            dialogs.create(
                'surgeon/templates/add_examination.tpl.html', 
                'SurgeonAddEditExaminationCtrl', 
                obj, 
                { copy: false }
            );
        };

        /**
         * @summary Opens a dialog displaying a confirmation message and deletes the examinaion if the user confirms
         * @param {Object} examination
         */
        vm.confirmAndDeleteExamination = function(examination) {
            var dlg = dialogs.confirm('Sicuro di voler eliminare l\'esame clinico?', '', { size: 'sm' });
            dlg.result.then(function(btn){
                examinationService.kill(vm.caseObj.id, examination.id).then(
                    function() {
                        if(vm.can_edit_followup) {
                            vm.fu_examinations.splice(vm.fu_examinations.indexOf(examination), 1);
                        }
                        else {
                            vm.examinations.splice(vm.examinations.indexOf(examination), 1);
                        }
                    },
                    function() {
                        console.log('error'); // @TODO
                    }
                );
            },function(btn){
                // cancel
            });
        };

        $scope.bar.actions = [
            {
                fa: 'plus-circle',
                exec: vm.addEditExamination
            }
        ];

    }

})();
