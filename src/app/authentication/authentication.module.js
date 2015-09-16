/**
 * @file        authentication.module.js
 * @version     0.1.1
 * @summary     Authentication Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the authentication module responsible for logging users in and out.
 *              Not all server-side users can login from here. This module provides authentication
 *              only for users which actually have to use the frontend application.
 *              So only doctors and patients can login to the application.
 *              Admin users perform actions directly in the admin area of the server-side application
 *
 *              The module provides:
 *              - routes
 *              - controllers
 *              - services
 */
(function () {
    'use strict';

    angular
        .module('nocc.authentication', [
            'nocc.authentication.routes',
            'nocc.authentication.controllers',
            'nocc.authentication.services'
        ]);

})();
