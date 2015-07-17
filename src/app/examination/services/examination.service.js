/**
* @file examination.service.js
* @namespace nocc.examination.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.examination.services', ['nocc.config', 'ngFileUpload'])
        .factory('examinationService', examinationService);

    examinationService.$inject = ['$http', 'Upload', 'API_BASE_URL'];

    /**
    * @namespace   examinationService
    * @description Provides methods to fetch and update examinations data
    * @returns {Factory}
    */
    function examinationService($http, Upload, API_BASE_URL) {
        /**
        * @summary Doctor Service Object
        * @description The Factory to be returned
        */
        var service = {
            create: create,
            update: update,
            kill: kill,
            list: list,
            uploadAttachment: uploadAttachment
        };

        return service;

        /////////////////////

        /**
        * @summary Creates an examination object
        * @param {Number} case_id
        * @param {Object} examination
        * @returns {Promise}
        * @memberOf nocc.examination.services.examinationService
        */
        function create(case_id, examination) {
            return $http.post(API_BASE_URL + '/cases/' + case_id + '/examinations/', examination);
        }

        /**
        * @summary Updates an examination object
        * @param {Number} case_id
        * @param {Object} examination
        * @returns {Promise}
        * @memberOf nocc.examination.services.examinationService
        */
        function update(case_id, examination) {
            return $http.put(API_BASE_URL + '/cases/' + case_id + '/examinations/' + examination.id + '/', examination);
        }

        /**
        * @summary Deletes an examination object
        * @param {Number} case_id
        * @param {Number} examination_id
        * @returns {Promise}
        * @memberOf nocc.examination.services.examinationService
        */
        function kill(case_id, examination_id) {
            return $http['delete'](API_BASE_URL + '/cases/' + case_id + '/examinations/' + examination_id + '/');
        }

        /**
        * @summary Retrieves case's examination objects
        * @param {Number} case_id
        * @returns {Promise}
        * @memberOf nocc.examination.services.examinationService
        */
        function list(case_id) {
            return $http.get(API_BASE_URL + '/cases/' + case_id + '/examinations/');
        }

        /**
        * @summary Upload examination files
        * @param {Numer} case_id
        * @param {Numer} examination_id
        * @param {Object} file The file object
        * @uses ng-file-upload
        * @returns {Promise}
        * @memberOf nocc.examination.services.examinationService
        */
        function uploadAttachment(case_id, examination_id, file) {
            return Upload.upload({
                url: API_BASE_URL + '/cases/' + case_id + '/examinations/' + examination_id + '/add-attachment/',
                method: 'POST',
                file: file,
                fields: { examination: examination_id },
                fileFormDataName: 'file'
            });
        }
    }
})();
