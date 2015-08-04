/**
* @file files.directive.js
* @description Contains generic directives used to deal with files
* @namespace nocc.utils.directives
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.utils.directives', [])
        .directive('imgajax', imgajax)
        .directive('aajax', aajax);

    aajax.$inject = ['files'];

    /**
    * @namespace   aajax
    * @description Directive used to link external files which have to be retrieved using ajax
    *              Private media must be retrieved using ajax calls because the auth token must
    *              be included in the request header. Then the response must be used as a Blob
    *              in order to allow download or browser visualization
    * @returns {Directive}
    */
    function aajax(files) {
        return {
            restrict: 'E',
            replace: false,
            transclude: true,
            scope: {
                href: "@href"
            },
            template: '<a href ng-transclude></a>',
            link: function(scope, elem, attrs) {
                elem.bind('click', function() {
                    files.getMedia(attrs.href).then(function(response) {
                        var blob = response.data;
                        var objectUrl = URL.createObjectURL(blob);
                        window.open(objectUrl);
                    });
                });
            }
        };
    }

    /**
    * @namespace   imgajax
    * @description Directive used to show external images which have to be retrieved using ajax
    *              Private media must be retrieved using ajax calls because the auth token must
    *              be included in the request header. Then the response must be used as a Blob
    *              in order to allow download or browser visualization
    * @returns {Directive}
    */
    function imgajax(files) {
        return {
            restrict: 'E',
            replace: false,
            transclude: true,
            scope: true,
            template: '<img class="{{ class }}" ng-src="{{ data }}" />',
            link: function(scope, elem, attrs) {
                // init value
                scope.data = 'assets/img/photo_placeholder.png';
                scope.class = attrs.class;
                attrs.$observe('iaSrc', function(value) {
                    if(value !== '') {
                        files.getMedia(value).then(function(response) {
                            var blob = response.data;
                            scope.data = URL.createObjectURL(blob);
                        });
                    }
                });
            }
        };
    }

})();
