/**
 * @file therapeuticProposal.module.js
 * @summary     TherapeuticProposal Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the case module
 *
 *              The module provides:
 *              - services
 */
(function () {
    'use strict';

    angular
        .module('nocc.therapeuticProposal', [
            'nocc.therapeuticProposal.services',
            'nocc.therapeuticProposal.directives'
        ]);

})();
