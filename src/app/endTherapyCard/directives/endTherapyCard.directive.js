/**
* @file endTherapyCard.directive.js
* @description Contains directives used to show therapy cards
* @namespace nocc.endTherapyCard.directives
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.endTherapyCard.directives', [])
        .directive('noccetcbox', etcbox);

    /**
    * @namespace   etcbox
    * @description Directive used to display a end therapy card
    * @returns {Directive}
    */
    function etcbox() {
        return {
            restrict: 'E',
            replace: false,
            transclude: true,
            scope: {
                etc: "=",
                showVisible: "=showVisible"
            },
            templateUrl: 'endTherapyCard/templates/etcbox.tpl.html',
            link: function(scope, elem, attrs) {
            }
        };
    }

})();
