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

    SurgeonCaseDetailMainCtrl.$inject = ['$scope', '$state', 'authenticationService', 'caseService', 'dialogs', 'request', 'caseObj'];

    /**
     * @namespace SurgeonCaseDetailMainCtrl
     * @description Controller of the surgeon case detail view
     * @permissions hasProfile
     */
    function SurgeonCaseDetailMainCtrl($scope, $state, authenticationService, caseService, dialogs, request, caseObj) {

        var vm = this;
        vm.caseObj = caseObj;

        // reset actions bar
        $scope.bar.actions = [];

        surgeonCaseDetailMainCtrlStatusOpen(vm, dialogs);

    }

    /**
     * Open status
     */
    function surgeonCaseDetailMainCtrlStatusOpen(vm, dialogs) {
        console.log(vm.caseObj);
        vm.associateOncologist = function() {
            dialogs.create('surgeon/templates/associate_oncologist.tpl.html', 'SurgeonAssociateOncologistCtrl', vm, { copy: false });
        };
    }

})();
