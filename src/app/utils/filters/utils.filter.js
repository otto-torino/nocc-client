/**
* @file utils.filter.js
* @description Contains generic template filters
* @namespace nocc.utils.filters
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.utils.filters', [])
        .filter('ucfirst', ucfirst)
        .filter('itweekday', itweekday);

    function ucfirst() {
        return function(input, scope) {
            if(input!=null) {
                return input.substring(0,1).toUpperCase()+input.substring(1);
            }
        };
    }

    function itweekday() {
        var weekdays_dict = {
            'monday': 'lunedì',
            'tuesday': 'martedì',
            'wednesday': 'mercoledì',
            'thursday': 'giovedì',
            'friday': 'venerdì',
            'saturday': 'sabato',
            'sunday': 'domenica'
        };
        return function(input, scope) {
            if(input!=null) {
                return weekdays_dict[input];
            }
        };
    }

})();
