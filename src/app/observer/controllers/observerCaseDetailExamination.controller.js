/**
* @file observerCaseDetailExamination.controller.js
* @namespace nocc.observer.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.observer.controllers')
        .controller('ObserverCaseDetailExaminationCtrl', ObserverCaseDetailExaminationCtrl);

    ObserverCaseDetailExaminationCtrl.$inject = ['$scope', '$state', 'examinationService', 'dialogs', 'request', 'caseObj', 'FU_TYPE_DICT'];

    /**
     * @namespace ObserverCaseDetailExaminationCtrl
     * @description Controller of the observer case detail view, examinations
     * @permissions isObserverCase
     */
    function ObserverCaseDetailExaminationCtrl($scope, $state, examinationService, dialogs, request, caseObj, FU_TYPE_DICT) {

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

        observerCaseDetailExaminationCtrlStatusOpen(vm, $scope, dialogs, examinationService);

    }

    /**
     * Open status
     */
    function observerCaseDetailExaminationCtrlStatusOpen(vm, $scope, dialogs, examinationService) {


    }

})();
