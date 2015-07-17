/**
* @file surgeonSidebar.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonSidebarCtrl', SurgeonSidebarCtrl);

    SurgeonSidebarCtrl.$inject = ['$scope', '$state'];

    /**
     * @namespace SurgeonSidebarCtrl
     * @description Controller of the surgeon's sidebar
     * @permissions hasProfile
     */
    function SurgeonSidebarCtrl($scope, $state) {

        $scope.navMain = [
            {
                state: 'case',
                text: 'casi clinici',
                fa: 'ambulance'
            }
        ];

    }

})();


