/**
* @file surgeonSidebarCase.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonSidebarCaseCtrl', SurgeonSidebarCaseCtrl);

    SurgeonSidebarCaseCtrl.$inject = ['$scope', '$state', 'caseObj', 'STATUS'];

    /**
     * @namespace SurgeonSidebarCaseCtrl
     * @description Controller which controls the sidebar case nav when inside a case
     */
    function SurgeonSidebarCaseCtrl($scope, $state, caseObj, STATUS) {

        $scope.nav = { title: 'Caso', items: [] };

        if(caseObj.status == STATUS.open) {
            $scope.nav.items.push({
                state: 'case.detail.surgeon.main',
                text: 'principale',
                fa: 'star'
            });
            $scope.nav.items.push({
                state: 'case.detail.surgeon.examination',
                text: 'esami clinici',
                fa: 'file'
            });
        }
        console.log($scope.nav);
    }

})();


