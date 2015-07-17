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

    SurgeonCaseDetailExaminationCtrl.$inject = ['$scope', '$state', 'examinationService', 'dialogs', 'request', 'caseObj'];

    /**
     * @namespace SurgeonCaseDetailExaminationCtrl
     * @description Controller of the surgeon case detail view, examinations
     * @permissions hasProfile
     */
    function SurgeonCaseDetailExaminationCtrl($scope, $state, examinationService, dialogs, request, caseObj) {

        var vm = this;
        vm.caseObj = caseObj;

        examinationService.list(caseObj.id).then(function(response) {
            vm.examinations = response.data;
            console.log(vm.examinations);
        }, function() {
            // @TODO
            console.log('error');
        });

        // reset actions bar
        $scope.bar.actions = [];

        vm.openExaminationText = function(examination) {
            dialogs.notify('Referto', examination.text);
        };

        surgeonCaseDetailExaminationCtrlStatusOpen(vm, $scope, dialogs, examinationService);

    }

    /**
     * Open status
     */
    function surgeonCaseDetailExaminationCtrlStatusOpen(vm, $scope, dialogs, examinationService) {

        vm.addEditExamination = function(examination) {
            dialogs.create('surgeon/templates/add_examination.tpl.html', 'SurgeonAddEditExaminationCtrl', { ctrl: vm, examination: examination }, { copy: false });
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
                        vm.examinations.splice(vm.examinations.indexOf(examination), 1);
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
