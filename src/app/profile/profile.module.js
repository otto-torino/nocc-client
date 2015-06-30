/**
 * @file profile.module.js
 * @summary     Profile Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the profile module responsible for managing the user profile
 *
 *              The module provides:
 *              - routes
 */
(function () {
    'use strict';

    angular
        .module('nocc.profile', [
            'nocc.profile.routes',
            'permission',
            'nocc.authentication.services'
        ])
        .run(function(Permission, authenticationService) {
            Permission.defineRole('hasProfile', function(stateParams) {
                return authenticationService.isAuthenticated();
            });
        });

})();
