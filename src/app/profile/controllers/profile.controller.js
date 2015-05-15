/**
* @file profile.controller.js
* @namespace nocc.profile.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.profile.controllers', [])
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$state', 'authenticationService'];

    /**
     * @namespace ProfileController
     * @description Controller of the profile view
     */
    function ProfileController($state, authenticationService) {

        var vm = this;

     }
})();
