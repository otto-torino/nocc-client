/**
* @file case.service.js
* @namespace nocc.case.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.case.services', ['nocc.config', 'ngFileUpload'])
        .factory('caseService', caseService);

    caseService.$inject = ['$http', 'Upload', 'API_BASE_URL'];

    /**
    * @namespace   caseService
    * @description Provides methods to fetch and update cases data
    * @returns {Factory}
    */
    function caseService($http, Upload, API_BASE_URL) {
        /**
        * @summary Doctor Service Object
        * @description The Factory to be returned
        */
        var service = {
            listAsSurgeon: listAsSurgeon,
            create: create
        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves cases in which the user is the surgeon actor
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function listAsSurgeon() {
            return $http.get(API_BASE_URL + '/case/?role=surgeon');
        }

        /**
        * @summary Creates a case object
        * @description When a case is created only the patient and description fields are provided.
        *              Oncologist and Radiotherapists are associated later on
        * @param {Object} caseobj
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function create(caseobj) {
            return $http.post(API_BASE_URL + '/case/', caseobj);
        }

    }
})();
