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
            views: {
                "main": {
                    controllerProvider: function() { return 'DoctorProfileCtrl'; },
                    controllerAs: 'vm',
                    templateUrl: function() { return 'doctor/templates/profile.tpl.html'; }
                },
                "sidebar": {
                    controllerProvider: ['NoccControllerFactory', function(NoccControllerFactory) { return NoccControllerFactory.sidebar; }],
                    //controllerProvider: ['authenticationService', function(authenticationService) { console.log('DIO'); }],
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Profile',
                permissions: {
                    only: ['hasProfile'],
                    redirectTo: 'home'
                }
            }
        });
    }
})();
