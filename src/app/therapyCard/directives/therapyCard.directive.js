/**
* @file therapyCard.directive.js
* @description Contains directives used to show therapy cards
* @namespace nocc.therapyCard.directives
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.therapyCard.directives', [])
        .directive('nocctcbox', tcbox);

    /**
    * @namespace   tcbox
    * @description Directive used to display a therapy card
    * @returns {Directive}
    */
    function tcbox() {
        return {
            restrict: 'E',
            replace: false,
            transclude: true,
            scope: {
                tc: "=",
                showVisible: "=showVisible"
            },
            templateUrl: 'therapyCard/templates/tcbox.tpl.html',
            link: function(scope, elem, attrs) {
            }
        };
    }

})();
