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
            listAsDoctor: listAsDoctor,
            listAsPatient: listAsPatient,
            create: create,
            get: get,
            associateOncologist: associateOncologist
        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves a case given the id
        * @param {Number} caseId
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function get(caseId) {
            return $http.get(API_BASE_URL + '/cases/' + caseId + '/');
        }

        /**
        * @summary Retrieves cases in which the user is the surgeon actor
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function listAsSurgeon() {
            return $http.get(API_BASE_URL + '/cases/?role=surgeon');
        }

        /**
        * @summary Retrieves cases in which the user is the oncologist or radiotherapist actor
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function listAsDoctor() {
            return $http.get(API_BASE_URL + '/cases/?role=doctor');
        }

        /**
        * @summary Retrieves cases in which the user is the patient actor
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function listAsPatient() {
            return $http.get(API_BASE_URL + '/cases/?role=patient');
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
            return $http.post(API_BASE_URL + '/cases/', caseobj);
        }

        /**
        * @summary Associates an oncologist to a case
        * @param {Object} caseobj
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function associateOncologist(caseobj, oncologist_contact_id) {
            return $http.patch(API_BASE_URL + '/cases/' + caseobj.id + '/', { oncologist_contact: oncologist_contact_id });
        }

    }
})();
