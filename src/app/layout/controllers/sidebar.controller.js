/**
* @file sidebar.controller.js
* @namespace nocc.layout.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.layout.controllers', [])
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$scope'];

    /**
     * @namespace SidebarController
     * @description Controller of the sidebar
     */
    function SidebarController($scope) {
        var vm = this;
    }
})();
