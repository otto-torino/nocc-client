/**
* @file patient.service.js
* @namespace nocc.patient.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.patient.services', ['nocc.config', 'ngFileUpload'])
        .factory('patientService', patientService);

    patientService.$inject = ['$http', 'Upload', 'API_BASE_URL'];

    /**
    * @namespace   patientService
    * @description Provides methods to fetch and update patient data
    * @returns {Factory}
    */
    function patientService($http, Upload, API_BASE_URL) {
        /**
        * @summary Doctor Service Object
        * @description The Factory to be returned
        */
        var service = {
            list: list,
            create: create
        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves  a list of patients
        * @returns {Promise}
        * @memberOf nocc.patient.services.patientService
        */
        function list() {
            return $http.get(API_BASE_URL + '/patient/');
        }

        /**
        * @summary Creates a patient object
        * @param {Object} patient
        * @returns {Promise}
        * @memberOf nocc.patient.services.patientService
        */
        function create(patient) {
            return $http.post(API_BASE_URL + '/patient/', patient);
        }

    }
})();
