/**
 * @file doctor.module.js
 * @summary     Doctor Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the doctor module
 *
 *              The module provides:
 *              - routes
 *              - controllers
 *              - services
 */
(function () {
    'use strict';

    angular
        .module('nocc.doctor', [
            'nocc.doctor.routes',
            'nocc.doctor.controllers',
            'nocc.doctor.services'
        ])
        .run(function(Permission, authenticationService) {
            Permission.defineRole('isDoctor', function(stateParams) {
                var user = authenticationService.getAuthenticatedUser();
                return user && user.is_doctor;
            });
        });

    angular
        .module('nocc.doctor.controllers', ['ngFileUpload', 'nocc.doctor.services', 'nocc.authentication.services', 'ui.bootstrap.datetimepicker', 'nocc.patient.services']);


})();
