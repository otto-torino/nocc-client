/**
* @file endTherapyCard.service.js
* @namespace nocc.endTherapyCard.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.endTherapyCard.services', ['nocc.config', 'ngFileUpload'])
        .factory('endTherapyCardService', endTherapyCardService);

    endTherapyCardService.$inject = ['$http', 'Upload', 'API_BASE_URL'];

    /**
    * @namespace   endTherapyCardService
    * @description Provides methods to fetch and update therapy card's data
    * @returns {Factory}
    */
    function endTherapyCardService($http, Upload, API_BASE_URL) {
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
            killAttachment: killAttachment,
            /////// no request
            userSectionDispenser: userSectionDispenser,
            isCompleted: isCompleted

        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves case's end therapy cards objects
        * @param {Number} case_id
        * @param {Number} type
        * @returns {Promise}
        * @memberOf nocc.endTherapyCard.services.endTherapyCardService
        */
        function list(case_id, type) {
            if(typeof type !== 'undefined') {
                return $http.get(API_BASE_URL + '/cases/' + case_id + '/end-therapy-cards/?type=' + type);
            }
            return $http.get(API_BASE_URL + '/cases/' + case_id + '/end-therapy-cards/');
        }

        /**
         * @summary Updates a end therapy card
         * @param {Number} case_id
         * @param {Object} endTherapyCard
         * @returns {Promise}
         * @memberOf nocc.endTherapyCard.services.endTherapyCardService
         */
        function update(case_id, endTherapyCard) {
            return $http.put(API_BASE_URL + '/cases/' + case_id +'/end-therapy-cards/' + endTherapyCard.id + '/', endTherapyCard);
        }

        /**
         * @summary Updates a end therapy card section
         * @param {Number} case_id
         * @param {Object} endTherapyCardSection
         * @returns {Promise}
         * @memberOf nocc.endTherapyCard.services.endTherapyCardService
         */
        function updateSection(case_id, endTherapyCardSection) {
            return $http.put(API_BASE_URL + '/cases/' + case_id +'/end-therapy-cards/' + endTherapyCardSection.end_therapy_card + '/update-section/?section_id=' + endTherapyCardSection.id, endTherapyCardSection);
        }

        /**
        * @summary Retrieves the initial end therapy card
        * @returns {Promise}
         * @memberOf nocc.endTherapyCard.services.endTherapyCardService
        */
        function getInitial(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/end-therapy-cards/get-initial/');
        }

        /**
        * @summary Retrieves the revaluation end therapy card
        * @returns {Promise}
         * @memberOf nocc.endTherapyCard.services.endTherapyCardService
        */
        function getRevaluation(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/end-therapy-cards/get-revaluation/');
        }

        /**
        * @summary Retrieves the adjuvant end therapy card
        * @returns {Promise}
         * @memberOf nocc.endTherapyCard.services.endTherapyCardService
        */
        function getAdjuvant(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/end-therapy-cards/get-adjuvant/');
        }

        /**
        * @summary Upload files
        * @param {Numer} case_id
        * @param {Object} endTherapyCardSection
        * @param {Object} file The file object
        * @uses ng-file-upload
        * @returns {Promise}
         * @memberOf nocc.endTherapyCard.services.endTherapyCardService
        */
        function uploadAttachment(case_id, endTherapyCardSection, file) {
            return Upload.upload({
                url: API_BASE_URL + '/cases/' + case_id + '/end-therapy-cards/' + endTherapyCardSection.end_therapy_card + '/add-attachment/?section=' + endTherapyCardSection.id,
                method: 'POST',
                file: file,
                fields: { end_therapy_card_section: endTherapyCardSection.id },
                fileFormDataName: 'file'
            });
        }

        /**
        * @summary Delete files
        * @param {Numer} case_id
        * @param {Number} therapy_card_id
        * @param {Number} attachment_id
        * @returns {Promise}
         * @memberOf nocc.endTherapyCard.services.endTherapyCardService
        */
        function killAttachment(case_id, end_therapy_card_id, attachment_id) {
            return $http['delete'](API_BASE_URL + '/cases/' + case_id + '/end-therapy-cards/' + end_therapy_card_id + '/delete-attachment/?attachment_id=' + attachment_id);
        }

        /**
         * @summary Gets the section of the end card therapy which dispenser is the given user, null otherwise
         * @param {String} user_type (surgeon | doctor)
         * @param {Number} user_id
         * @param {Object} caseObj
         * @param {Object} etc
         * @return {Object|null}
         */
        function userSectionDispenser(user_type, user_id, caseObj, etc) {
            var res = null;
            etc.sections.forEach(function(section) {
                if(user_type == 'surgeon' && section.dispenser == caseObj.surgeon_contact_obj.id && caseObj.surgeon_contact_obj.doctor.user.id == user_id) {
                    res = section;
                }
                else if(user_type == 'doctor' && (
                     (section.dispenser == caseObj.oncologist_contact_obj.id && caseObj.oncologist_contact_obj.doctor.user.id == user_id) || 
                     (section.dispenser == caseObj.radiotherapist_contact_obj.id && caseObj.radiotherapist_contact_obj.doctor.user.id == user_id)
                )) {
                    res = section;
                }
            });

            return res;
        }

        /**
         * Checks if the end therapy card is completed
         * @param {Object} etc
         * @return {Boolean}
         */
        function isCompleted(etc) {
            if(!etc.date) {
                return false;
            }

            var res = true;
            etc.sections.forEach(function(section) {
                if(!section.completed) {
                    res = false;
                }
            });

            return res;
        }

    }
})();
