/**
* @file file.filter.js
* @description Contains file related template filters
* @namespace nocc.file.filters
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.utils.filters')
        .filter('filename', filename)
        .filter('absurl', absurl);

    absurl.$inject = ['MEDIA_BASE_URL'];

    function filename() {
        return function(input, scope) {
            if(input!=null) {
                return decodeURIComponent(input.split('/').pop());
            }
        };
    }

    function absurl(MEDIA_BASE_URL) {
        return function(input, scope) {
            if(!/http/.test(input)) {
                return MEDIA_BASE_URL + input;
            }
            return input;
        };

    }

})();
