/**
* @file surgeonHome.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonHomeCtrl', SurgeonHomeCtrl);

    SurgeonHomeCtrl.$inject = ['$scope', '$state'];

    /**
     * @namespace SurgeonHomeCtrl
     * @description Controller of the surgeon's home page
     * @permissions isurgeon
     */
    function SurgeonHomeCtrl($scope, $state) {

    }

})();


