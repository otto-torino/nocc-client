/**
* @file caseDetailAdjuvant.controller.js
* @namespace nocc.case.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.case.controllers')
        .controller('CaseDetailAdjuvantCtrl', CaseDetailAdjuvantCtrl);

    CaseDetailAdjuvantCtrl.$inject = ['$scope', '$state', 'therapeuticProposalService', 'therapyCardService', 'endTherapyCardService', 'request', 'STATUS'];

    /**
     * @namespace CaseDetailAdjuvantCtrl
     * @description Controller of the case revaluation view
     * @permissions isSurgeonCase, isDoctorCase, isPatientCase
     */
    function CaseDetailAdjuvantCtrl($scope, $state, therapeuticProposalService, therapyCardService, endTherapyCardService, request, STATUS) {

        var vm = this;

        vm.user = request.user;
        vm.tc = null;
        vm.is_visible_tc = false;
        vm.etc = null;
        vm.is_visible_etc = false;

        therapeuticProposalService.getAdjuvantTherapeuticProposal($scope.model.caseObj).then(function(response) {
            vm.tp = response.data;
            if(request.user.is_patient) {
                vm.is_visible_tp = vm.tp.visible;
            }
            else {
                vm.is_visible_tp = true;
            }
        }, function(response) {
            console.log('error'); // @TODO
        });

        if($scope.model.caseObj.status >= STATUS.revaluation_therapy_card) {
            therapyCardService.getRevaluation($scope.model.caseObj).then(function(response) {
                vm.tc = response.data;
                if(request.user.is_patient) {
                    vm.is_visible_tc = vm.tc.visible;
                }
                else {
                    vm.is_visible_tc = true;
                }
            });
        }

        if($scope.model.caseObj.status >= STATUS.adjuvant_started) {
            endTherapyCardService.getAdjuvant($scope.model.caseObj).then(function(response) {
                vm.etc = response.data;
                if(request.user.is_patient) {
                    vm.is_visible_etc = vm.etc.visible;
                }
                else {
                    vm.is_visible_etc = true;
                }
            });
        }


    }

})();
