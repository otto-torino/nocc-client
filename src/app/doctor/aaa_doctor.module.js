/**
 * @file doctor.module.js
 * @summary     Doctor Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the doctor module
 *
 *              The module provides:
 *              - controllers
 *              - services
 */
(function () {
    'use strict';

    angular
        .module('nocc.doctor', [
            'nocc.doctor.controllers',
            'nocc.doctor.services'
        ]);
    angular
        .module('nocc.doctor.controllers', ['ngFileUpload', 'nocc.doctor.services', 'nocc.authentication.services', 'ui.bootstrap.datetimepicker', 'nocc.patient.services']);


})();
