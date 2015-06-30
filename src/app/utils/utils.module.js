/**
 * @file utils.module.js
 * @summary     Utils Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is a module containing utilities used all over the application
 *
 *              The module provides:
 *              - services
 */
(function () {
    'use strict';

    angular
        .module('nocc.utils', [
            'nocc.utils.services',
            'nocc.utils.filters'
        ]);

})();
