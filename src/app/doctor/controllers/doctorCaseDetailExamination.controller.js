/**
* @file doctorCaseDetailExamination.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorCaseDetailExaminationCtrl', DoctorCaseDetailExaminationCtrl);

    DoctorCaseDetailExaminationCtrl.$inject = ['$scope', '$state', 'examinationService', 'dialogs', 'request', 'caseObj', 'FU_TYPE_DICT'];

    /**
     * @namespace DoctorCaseDetailExaminationCtrl
     * @description Controller of the doctor case detail view, examinations
     * @permissions hasProfile
     */
    function DoctorCaseDetailExaminationCtrl($scope, $state, examinationService, dialogs, request, caseObj, FU_TYPE_DICT) {

        var vm = this;
        vm.caseObj = caseObj;
        vm.examinations = [];
        vm.fu_examinations = [];
        vm.adj_examinations = [];
        vm.final_examinations = [];

        vm.activeTab_initial = false;
        vm.activeTab_followup = false;
        vm.activeTab_adj = false;
        vm.activeTab_final = false;
        vm['activeTab_' + $state.params.activeTab] = true;

        examinationService.list(caseObj.id).then(function(response) {
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

        doctorCaseDetailExaminationCtrlStatusOpen(vm, $scope, dialogs, examinationService);

    }

    /**
     * Open status
     */
    function doctorCaseDetailExaminationCtrlStatusOpen(vm, $scope, dialogs, examinationService) {


    }

})();
