/**
 * @file layout.module.js
 * @summary     Layout Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the layout module responsible for controlling the rendering
 *              of common template partials
 *
 *              The module provides:
 *              - controllers
 */
(function () {
    'use strict';

    angular
        .module('nocc.layout', [
            'nocc.layout.controllers'
        ]);

})();
