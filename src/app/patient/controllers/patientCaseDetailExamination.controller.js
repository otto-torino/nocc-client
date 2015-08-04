/**
* @file patientCaseDetailExamination.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientCaseDetailExaminationCtrl', PatientCaseDetailExaminationCtrl);

    PatientCaseDetailExaminationCtrl.$inject = ['$scope', '$state', 'examinationService', 'dialogs', 'request', 'caseObj', 'FU_TYPE_DICT'];

    /**
     * @namespace PatientCaseDetailExaminationCtrl
     * @description Controller of the patient case detail view, examinations
     * @permissions isPatientCase
     */
    function PatientCaseDetailExaminationCtrl($scope, $state, examinationService, dialogs, request, caseObj, FU_TYPE_DICT) {

        var vm = this;
        vm.caseObj = caseObj;
        vm.examinations = [];
        vm.fu_examinations = [];
        vm.adj_examinations = [];

        vm.activeTab_initial = false;
        vm.activeTab_followup = false;
        vm.activeTab_adj = false;
        vm['activeTab_' + $state.params.activeTab] = true;

        examinationService.list(caseObj.id).then(function(response) {
            response.data.forEach(function(e) {
                if(e.follow_up) {
                    if(e.follow_up_obj.type == FU_TYPE_DICT.adjuvant) {
                        vm.adj_examinations.push(e);
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

        vm.openExaminationText = function(examination) {
            dialogs.notify('Referto', examination.text);
        };

        patientCaseDetailExaminationCtrlStatusOpen(vm, $scope, dialogs, examinationService);

    }

    /**
     * Open status
     */
    function patientCaseDetailExaminationCtrlStatusOpen(vm, $scope, dialogs, examinationService) {


    }

})();
