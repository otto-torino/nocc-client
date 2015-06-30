/**
 * @file case.module.js
 * @summary     Case Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the case module
 *
 *              The module provides:
 *              - routes
 *              - services
 */
(function () {
    'use strict';

    angular
        .module('nocc.case', [
            'nocc.case.routes',
            'nocc.case.services',
            'permission',
            'nocc.authentication.services'
        ])
        .run(function(Permission, authenticationService) {
            Permission.defineRole('isAuthenticated', function(stateParams) {
                return authenticationService.isAuthenticated();
            });
        });

})();
