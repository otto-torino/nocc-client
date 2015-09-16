/**
 * @file therapyCard.module.js
 * @summary     TherapyCard Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the therapy card module
 *
 *              The module provides:
 *              - services
 *              - directives
 */
(function () {
    'use strict';

    angular
        .module('nocc.therapyCard', [
            'nocc.therapyCard.services',
            'nocc.therapyCard.directives'
        ]);

})();
