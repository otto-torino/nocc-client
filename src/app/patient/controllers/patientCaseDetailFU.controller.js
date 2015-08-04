/**
* @file patientCaseDetailFU.controller.js
* @namespace nocc.patient.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.controllers')
        .controller('PatientCaseDetailFUCtrl', PatientCaseDetailFUCtrl);

    PatientCaseDetailFUCtrl.$inject = ['$scope', '$state', 'followupService', 'FU_STATUS_DICT', 'FU_TYPE_DICT'];

    /**
     * @namespace PatientCaseDetailFUCtrl
     * @description Controller of the case follow up view
     * @permissions isSurgeonCase, isDoctorCase, isPatientCase
     */
    function PatientCaseDetailFUCtrl($scope, $state, followupService, FU_STATUS_DICT, FU_TYPE_DICT) {

        var vm = this;

        vm.data = {
            FU_STATUS_DICT: FU_STATUS_DICT,
            initial: {
                total: 0,
                accepted: [],
                finalized: []
            },
            adjuvant: {
                total: 0,
                accepted: [],
                finalized: []
            },
            final: {
                total: 0,
                accepted: [],
                finalized: []
            }
        };

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.initial, FU_STATUS_DICT.accepted).then(function(response) {
            vm.data.initial.total += response.data.length;
            vm.data.initial.accepted = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.initial, FU_STATUS_DICT.finalized).then(function(response) {
            vm.data.initial.total += response.data.length;
            vm.data.initial.finalized = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.adjuvant, FU_STATUS_DICT.accepted).then(function(response) {
            vm.data.adjuvant.total += response.data.length;
            vm.data.adjuvant.accepted = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.adjuvant, FU_STATUS_DICT.finalized).then(function(response) {
            vm.data.adjuvant.total += response.data.length;
            vm.data.adjuvant.finalized = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.final, FU_STATUS_DICT.accepted).then(function(response) {
            vm.data.final.total += response.data.length;
            vm.data.final.accepted = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

        followupService.list($scope.model.caseObj.id, FU_TYPE_DICT.final, FU_STATUS_DICT.finalized).then(function(response) {
            vm.data.final.total += response.data.length;
            vm.data.final.finalized = response.data;
        }, function(response) {
            console.log('error'); // @TODO
        });

    }

})();
