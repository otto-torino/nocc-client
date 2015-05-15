/**
* @file profile.routes.js
* @namespace nocc.profile
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.profile.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider'];

    /**
     * @summary config
     * @description Defines authentication routes
     */
    function config( $stateProvider ) {
        $stateProvider.state( 'profile', {
            url: '/profile',
            views: {
                "main": {
                    controller: 'ProfileController',
                    controllerAs: 'vm',
                    templateUrl: 'profile/templates/profile.tpl.html'
                }
            },
            data:{ page_title: 'Profile' }
        });
    }
})();
