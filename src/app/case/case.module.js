/**
 * @file        case.module.js
 * @version     0.1.1
 * @summary     Case Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the case module
 *
 *              The module provides:
 *              - routes
 *              - services
 *              - controllers
 */
(function () {
    'use strict';

    angular
        .module('nocc.case', [
            'nocc.case.routes',
            'nocc.case.services',
            'nocc.case.controllers',
            'permission',
            'nocc.authentication.services'
        ])
        .run(function(Permission, authenticationService) {
            Permission.defineRole('isAuthenticated', function(stateParams) {
                return authenticationService.isAuthenticated();
            });
        });

    angular
        .module('nocc.case.controllers', []);

})();
