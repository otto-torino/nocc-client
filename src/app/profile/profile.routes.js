/**
* @file profile.routes.js
* @namespace nocc.profile.routes
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.profile.routes', ['ui.router', 'nocc.doctor.controllers'])
        .config(config);

    config.$inject = ['$stateProvider'];

    /**
     * @summary config
     * @description Defines profile routes
     */
    function config( $stateProvider ) {
        $stateProvider.state( 'profile', {
            url: '/profile',
            parent: 'loggedIn',
            data: {
                permissions: {
                    only: ['isAuthenticated'],
                    redirectTo: 'home'
                }
            }
        });
    }
})();
