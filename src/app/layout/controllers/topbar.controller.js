/**
* @file topbar.controller.js
* @namespace nocc.layout.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.layout.controllers', [])
        .controller('TopbarController', TopbarController);

    TopbarController.$inject = ['$scope'];

    /**
     * @namespace TopbarController
     * @description Controller of the topbar
     */
    function TopbarController($scope) {
        var vm = this;
    }
})();
