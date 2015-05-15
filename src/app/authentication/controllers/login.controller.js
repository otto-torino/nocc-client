/**
* @file login.controller.js
* @namespace nocc.authentication.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.authentication.controllers', [])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'authenticationService'];

    /**
     * @namespace LoginController
     * @description Controller of the login view
     */
    function LoginController($state, authenticationService) {

        var vm = this;
        vm.login = login;

        activate();

        /**
         * @summary Activates the controller
         * @description Actions to be performed when this controller is instantiated
         * @memberOf nocc.authentication.controllers.LoginController
         * @uses nocc.authentication.services.authenticationService
         */
        function activate() {
            // If the user is authenticated, he should not be here.
            if (authenticationService.isAuthenticated()) {
                $state.go('home', {}, {reload: true});
            }
        }

        /**
         * @summary Login
         * @description Log the user in
         * @memberOf nocc.authentication.controllers.LoginController
         * @uses nocc.authentication.services.authenticationService
         */
        function login() {
            // redirects to the home page after login
            authenticationService.login(vm.username, vm.password).then(function() {
                if(authenticationService.isAuthenticated()) {
                    $state.go('home', {}, {reload: true});
                }
                else {
                    $state.go('login', {}, {reload: true});
                }
            });
        }
    }
})();
