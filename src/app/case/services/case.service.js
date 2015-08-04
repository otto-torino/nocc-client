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

    caseService.$inject = ['$http', 'Upload', 'API_BASE_URL', 'ASSOCIATION_STATUS'];

    /**
    * @namespace   caseService
    * @description Provides methods to fetch and update cases data
    * @returns {Factory}
    */
    function caseService($http, Upload, API_BASE_URL, ASSOCIATION_STATUS) {
        /**
        * @summary Doctor Service Object
        * @description The Factory to be returned
        */
        var service = {
            listAsSurgeon: listAsSurgeon,
            listAsDoctor: listAsDoctor,
            listAsPatient: listAsPatient,
            create: create,
            getRelapse: getRelapse,
            get: get,
            associateOncologist: associateOncologist,
            associateRadiotherapist: associateRadiotherapist,
            associateObservers: associateObservers,
            refuse: refuse,
            accept: accept,
            gotoStatus: gotoStatus
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
        * @summary Get relapse
        * @param {Object} caseobj
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function getRelapse(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id + '/get-relapse/');
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

        /**
        * @summary Associates a radiotherapist to a case
        * @param {Object} caseobj
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function associateRadiotherapist(caseobj, radiotherapist_contact_id) {
            return $http.patch(API_BASE_URL + '/cases/' + caseobj.id + '/', { radiotherapist_contact: radiotherapist_contact_id });
        }

        /**
        * @summary Associate observers to a case
        * @param {Object} caseobj
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function associateObservers(caseobj, observers_ids) {
            if(typeof observers_ids == 'undefined') {
                observers_ids = [];
            }
            return $http.patch(API_BASE_URL + '/cases/' + caseobj.id + '/', { observers: observers_ids });
        }

        /**
        * @summary Refuses case association
        * @param {Object} caseobj
        * @param {String} role 'oncologist' || 'radiotherapist'
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function refuse(caseobj, role) {
            var obj;
            if(role === 'oncologist') {
                obj = { oncologist_status: ASSOCIATION_STATUS.refused };
            }
            if(role === 'radiotherapist') {
                obj = { radiotherapist_status: ASSOCIATION_STATUS.refused };
            }
            return $http.patch(API_BASE_URL + '/cases/' + caseobj.id + '/', obj);
        }

        /**
        * @summary Accepts case association
        * @param {Object} caseobj
        * @param {String} role 'oncologist' || 'radiotherapist'
        * @returns {Promise}
        * @memberOf nocc.case.services.caseService
        */
        function accept(caseobj, role) {
            var obj;
            if(role === 'oncologist') {
                obj = { oncologist_status: ASSOCIATION_STATUS.accepted };
            }
            if(role === 'radiotherapist') {
                obj = { radiotherapist_status: ASSOCIATION_STATUS.accepted };
            }
            return $http.patch(API_BASE_URL + '/cases/' + caseobj.id + '/', obj);
        }

        /**
         * Updates the status field of the case object
         * @param {Object} caseobj
         * @param {Number} status
         * @returns {Promise}
         * @memberOf nocc.case.services.caseService
         */
        function gotoStatus(caseobj, status) {
            return $http.patch(API_BASE_URL + '/cases/' + caseobj.id + '/', {status: status});
        }

    }
})();
