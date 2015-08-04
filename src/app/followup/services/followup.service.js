/**
* @file followup.service.js
* @namespace nocc.followup.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.followup.services', ['nocc.config'])
        .factory('followupService', followupService);

    followupService.$inject = ['$http', 'API_BASE_URL', 'FU_STATUS_DICT'];

    /**
    * @namespace   followupService
    * @description Provides methods to fetch and update followup data
    * @returns {Factory}
    */
    function followupService($http, API_BASE_URL, FU_STATUS_DICT) {
        /**
        * @summary Doctor Service Object
        * @description The Factory to be returned
        */
        var service = {
            create: create,
            list: list,
            listNotFinalized: listNotFinalized,
            accept: accept,
            refuse: refuse,
            updateDate: updateDate,
            close: close
        };

        return service;

        /////////////////////

        /**
        * @summary Creates a followup
        * @param {Number} case_id
        * @param {Object} followup
        * @returns {Promise}
        * @memberOf nocc.followup.services.followupService
        */
        function create(case_id, followup) {
            return $http.post(API_BASE_URL + '/cases/' + case_id + '/followup/', followup);
        }

        /**
        * @summary List of all case followups
        * @param {Number} case_id
        * @param {Number} type
        * @param {Number|Array} status
        * @returns {Promise}
        * @memberOf nocc.followup.services.followupService
        */
        function list(case_id, type, status) {
            if(typeof type !== 'undefined') {
                if(typeof status !== 'undefined') {
                    status = angular.isArray(status) ? status.join('-') : status;
                    return $http.get(API_BASE_URL + '/cases/' + case_id + '/followup/?type=' + type + '&status=' + status);
                }
                else {
                    return $http.get(API_BASE_URL + '/cases/' + case_id + '/followup/?type=' + type);
                }
            }
            else {
                if(typeof status !== 'undefined') {
                    status = angular.isArray(status) ? status.join('-') : status;
                    return $http.get(API_BASE_URL + '/cases/' + case_id + '/followup/status=' + status);
                }
                else {
                    return $http.get(API_BASE_URL + '/cases/' + case_id + '/followup/');
                }
            }
        }

        /**
        * @summary List of all not finalized case followups
        * @param {Number} case_id
        * @param {Number} type
        * @returns {Promise}
        * @memberOf nocc.followup.services.followupService
        */
        function listNotFinalized(case_id, type) {
            return $http.get(API_BASE_URL + '/cases/' + case_id + '/followup/?type=' + type +'&status__not=' + FU_STATUS_DICT.finalized + '-' + FU_STATUS_DICT.refused);
        }

        /**
        * @summary Sets the FU status to accepted
        * @param {Number} case_id
        * @param {Number} followup_id
        * @returns {Promise}
        * @memberOf nocc.followup.services.followupService
        */
        function accept(case_id, followup_id) {
            return $http.patch(API_BASE_URL + '/cases/' + case_id + '/followup/' + followup_id + '/', { status: FU_STATUS_DICT.accepted });
        }

        /**
        * @summary Refuses the FU
        * @param {Number} case_id
        * @param {Object} followup
        * @returns {Promise}
        * @memberOf nocc.followup.services.followupService
        */
        function refuse(case_id, followup) {
            return $http.patch(API_BASE_URL + '/cases/' + case_id + '/followup/' + followup.id + '/', { status: FU_STATUS_DICT.refused, suggestion: followup.suggestion });
        }

        /**
        * @summary Changes date and status
        * @param {Number} case_id
        * @param {Object} followup
        * @returns {Promise}
        * @memberOf nocc.followup.services.followupService
        */
        function updateDate(case_id, followup) {
            return $http.patch(API_BASE_URL + '/cases/' + case_id + '/followup/' + followup.id + '/', { status: FU_STATUS_DICT.to_be_accepted, date: followup.date});
        }

        /**
        * @summary closes the follow up (status finalized)
        * @param {Number} case_id
        * @param {Object} followup
        * @returns {Promise}
        * @memberOf nocc.followup.services.followupService
        */
        function close(case_id, followup) {
            return $http.patch(API_BASE_URL + '/cases/' + case_id + '/followup/' + followup.id + '/', { status: FU_STATUS_DICT.finalized });
        }

    }
})();
