/**
* @file files.service.js
* @description Contains generic functions used to deal with files
* @namespace nocc.utils.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.utils.services', [])
        .factory('files', files);

    files.$inject = [];

    /**
    * @namespace   files
    * @description Provides methods to deal with files
    * @returns {Factory}
    */
    function files() {
        /**
        * @summary Files Service Object
        * @description The Factory to be returned
        */
        var service= {
            getExtension: getExtension,
            getFilename: getFilename
        };

        return service;

        ////////////////////

        /**
         * Gets the file extension from path
         * @param {String} path
         * @return {String|undefined} extension if found, otherwise undefined
         */
        function getExtension(path) {
            if(path) {
                return path.split('.').pop();
            }
            return;
        }

        /**
         * Gets the file name
         * @param {String} path
         * @return {String|undefined} name, otherwise undefined
         */
        function getFilename(path) {
            if(path) {
                return decodeURIComponent(path.split('/').pop());
            }
            return;
        }
    }

})();
