/**
* @file           authentication.routes.js
* @version        0.1.1
* @namespace      nocc.authentication
* @author         abidibo <abidibo@gmail.com>
* @description    Defines routes for the authentication module
*/
(function () {
    'use strict';

    angular
        .module('nocc.authentication.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider'];

    /**
     * @summary config
     * @description Defines authentication routes
     */
    function config( $stateProvider ) {
        $stateProvider.state( 'login', {
            url: '/login',
            parent: 'loggedOut',
            views: {
                "main": {
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    templateUrl: 'authentication/templates/login.tpl.html'
                }
            },
            data:{ page_title: 'Login' }
        });
    }
})();
