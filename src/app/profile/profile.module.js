/**
 * @file profile.module.js
 * @summary     Profile Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the profile module responsible for managing the user profile
 *
 *              The module provides:
 *              - controllers
 *              - routes
 */
(function () {
    'use strict';

    angular
        .module('nocc.profile', [
            'nocc.profile.controllers',
            'nocc.profile.routes',
            'nocc.profile.services'
        ]);

})();
