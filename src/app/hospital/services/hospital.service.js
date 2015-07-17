/**
* @file hospital.service.js
* @namespace nocc.hospital.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.hospital.services', ['nocc.config'])
        .factory('hospitalService', hospitalService);

    hospitalService.$inject = ['$http', 'API_BASE_URL'];

    /**
    * @namespace   hospitalService
    * @description Provides methods to fetch and update hospitals data
    * @returns {Factory}
    */
    function hospitalService($http, API_BASE_URL) {
        /**
        * @summary Hospital Service Object
        * @description The Factory to be returned
        */
        var service = {
            list: list,
            get: get,
            create: create
        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves hospitals' list
        * @returns {Promise}
        * @memberOf nocc.hospital.services.hospitalService
        */
        function list() {
            return $http.get(API_BASE_URL + '/hospitals/');
        }

        /**
        * @summary Retrieves hospital detail
        * @returns {Promise}
        * @memberOf nocc.hospital.services.hospitalService
        */
        function get(hospital_id) {
            return $http.get(API_BASE_URL + '/hospitals/' + hospital_id + '/');
        }

        /**
        * @summary Creates an hospital
        * @param {Object} hospital
        * @returns {Promise}
        * @memberOf nocc.hospital.services.hospitalService
        */
        function create(hospital) {
            return $http.post(API_BASE_URL + '/hospitals/', hospital);
        }
    }
})();
