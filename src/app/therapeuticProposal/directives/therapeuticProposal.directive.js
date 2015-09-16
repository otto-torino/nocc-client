/**
* @file therapeuticProposal.directive.js
* @description Contains directives used to show therapeutic proposals
* @namespace nocc.therapeuticProposal.directives
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.therapeuticProposal.directives', [])
        .directive('nocctpbox', tpbox);

    /**
    * @namespace   tpbox
    * @description Directive used to display a therapeutic proposal
    *              Since therapeutic porposals objects appear throughout the case flow (initial, revaluation, adjuvant)
    *              it is better to have an unique directive to display such object, otherwise simple label changes etc...
    *              would require a lot of work
    * @returns {Directive}
    */
    function tpbox() {
        return {
            restrict: 'E',
            replace: false,
            transclude: true,
            scope: {
                tp: "=",
                showVisible: "=showVisible"
            },
            templateUrl: 'therapeuticProposal/templates/tpbox.tpl.html',
            link: function(scope, elem, attrs) {
            }
        };
    }

})();
