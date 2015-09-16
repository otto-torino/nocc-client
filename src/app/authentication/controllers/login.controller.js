/**
* @file           login.controller.js
* @version        0.1.1
* @namespace      nocc.authentication.controllers
* @author         abidibo <abidibo@gmail.com>
* @description    Controller of the login functionality
*/
(function () {
    'use strict';

    angular
        .module('nocc.authentication.controllers', ['dialogs.main'])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'authenticationService', 'dialogs'];

    /**
     * @namespace LoginController
     * @description Controller of the login view
     */
    function LoginController($state, authenticationService, dialogs) {

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
         *              If login is successfull the user is redirected to the home page,
         *              if login is not successfull an error dialog is shown in the same 
         *              login page
         * @memberOf nocc.authentication.controllers.LoginController
         * @uses nocc.authentication.services.authenticationService
         */
        function login() {
            authenticationService.login(vm.username, vm.password).then(
                function success() {
                    $state.go('home', {}, {reload: true});
                },
                function error(response) {
                    dialogs.error(
                        'Errore di autenticazione',
                        response,
                        {
                            size: 'sm'
                        }
                    );
                }
            );
        }
    }
})();
