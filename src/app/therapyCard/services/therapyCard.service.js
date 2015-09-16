/**
* @file therapyCard.service.js
* @namespace nocc.therapyCard.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.therapyCard.services', ['nocc.config', 'ngFileUpload'])
        .factory('therapyCardService', therapyCardService);

    therapyCardService.$inject = ['$http', 'Upload', 'API_BASE_URL'];

    /**
    * @namespace   therapyCardService
    * @description Provides methods to fetch and update therapy card's data
    * @returns {Factory}
    */
    function therapyCardService($http, Upload, API_BASE_URL) {
        /**
        * @summary TherapyCardService Object
        * @description The Factory to be returned
        */
        var service = {
            list: list,
            update: update,
            updateSection: updateSection,
            getInitial: getInitial,
            getRevaluation: getRevaluation,
            getAdjuvant: getAdjuvant,
            uploadAttachment: uploadAttachment,
            killAttachment: killAttachment

        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves case's therapy cards objects
        * @param {Number} case_id
        * @param {Number} type
        * @returns {Promise}
        * @memberOf nocc.therapyCard.services.therapyCardService
        */
        function list(case_id, type) {
            if(typeof type !== 'undefined') {
                return $http.get(API_BASE_URL + '/cases/' + case_id + '/therapy-cards/?type=' + type);
            }
            return $http.get(API_BASE_URL + '/cases/' + case_id + '/therapy-cards/');
        }

        /**
         * @summary Updates a therapy card
         * @param {Number} case_id
         * @param {Object} therapyCard
         * @returns {Promise}
         * @memberOf nocc.therapyCard.services.therapyCardService
         */
        function update(case_id, therapyCard) {
            return $http.put(API_BASE_URL + '/cases/' + case_id +'/therapy-cards/' + therapyCard.id + '/', therapyCard);
        }

        /**
         * @summary Updates a therapy card section
         * @param {Number} case_id
         * @param {Object} therapyCardSection
         * @returns {Promise}
         * @memberOf nocc.therapyCard.services.therapyCardService
         */
        function updateSection(case_id, therapyCardSection) {
            return $http.put(API_BASE_URL + '/cases/' + case_id +'/therapy-cards/' + therapyCardSection.therapy_card + '/update-section/?section_id=' + therapyCardSection.id, therapyCardSection);
        }

        /**
        * @summary Retrieves the initial therapy card
        * @returns {Promise}
         * @memberOf nocc.therapyCard.services.therapyCardService
        */
        function getInitial(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/therapy-cards/get-initial/');
        }

        /**
        * @summary Retrieves the revaluation therapy card
        * @returns {Promise}
         * @memberOf nocc.therapyCard.services.therapyCardService
        */
        function getRevaluation(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/therapy-cards/get-revaluation/');
        }

        /**
        * @summary Retrieves the adjuvant therapy card
        * @returns {Promise}
         * @memberOf nocc.therapyCard.services.therapyCardService
        */
        function getAdjuvant(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/therapy-cards/get-adjuvant/');
        }

        /**
        * @summary Upload files
        * @param {Numer} case_id
        * @param {Object} therapyCardSection
        * @param {Object} file The file object
        * @uses ng-file-upload
        * @returns {Promise}
         * @memberOf nocc.therapyCard.services.therapyCardService
        */
        function uploadAttachment(case_id, therapyCardSection, file) {
            return Upload.upload({
                url: API_BASE_URL + '/cases/' + case_id + '/therapy-cards/' + therapyCardSection.therapy_card + '/add-attachment/?section=' + therapyCardSection.id,
                method: 'POST',
                file: file,
                fields: { therapy_card_section: therapyCardSection.id },
                fileFormDataName: 'file'
            });
        }

        /**
        * @summary Delete files
        * @param {Numer} case_id
        * @param {Number} therapy_card_id
        * @param {Number} attachment_id
        * @returns {Promise}
         * @memberOf nocc.therapyCard.services.therapyCardService
        */
        function killAttachment(case_id, therapy_card_id, attachment_id) {
            return $http['delete'](API_BASE_URL + '/cases/' + case_id + '/therapy-cards/' + therapy_card_id + '/delete-attachment/?attachment_id=' + attachment_id);
        }

    }
})();
