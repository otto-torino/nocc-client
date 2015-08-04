/**
* @file doctor.service.js
* @namespace nocc.doctor.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.doctor.services', ['nocc.config', 'ngFileUpload'])
        .factory('doctorService', doctorService);

    doctorService.$inject = ['$http', 'Upload', 'API_BASE_URL'];

    /**
    * @namespace   doctorService
    * @description Provides methods to fetch and update doctors data
    * @returns {Factory}
    */
    function doctorService($http, Upload, API_BASE_URL) {
        /**
        * @summary Doctor Service Object
        * @description The Factory to be returned
        */
        var service = {
            get: get,
            update: update,
            updateCV: updateCV,
            updatePhoto: updatePhoto,
            oncologists: oncologists,
            radiotherapists: radiotherapists,
            observers: observers
        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves doctor's model data
        * @description Gets the doctor profile for user with username `username`
        *              Returns a Doctor object
        * @param {string} username The username of the user to fetch
        * @returns {Promise}
        * @memberOf nocc.doctor.services.doctorService
        */
        function get(username) {
            return $http.get(API_BASE_URL + '/doctors/' + username + '/');
        }

        /**
        * @summary Retrieves oncologists
        * @returns {Promise}
        * @memberOf nocc.doctor.services.doctorService
        */
        function oncologists() {
            return $http.get(API_BASE_URL + '/doctors/?type=oncologist');
        }

        /**
        * @summary Retrieves radiotherapists
        * @returns {Promise}
        * @memberOf nocc.doctor.services.doctorService
        */
        function radiotherapists() {
            return $http.get(API_BASE_URL + '/doctors/?type=radiotherapist');
        }

        /**
        * @summary Retrieves observers
        * @params {Array} exclude id of doctors that have to be excluded from selection
        * @returns {Promise}
        * @memberOf nocc.doctor.services.doctorService
        */
        function observers(exclude) {
            if(exclude && exclude.length) {
                return $http.get(API_BASE_URL + '/doctors/?exclude=' + exclude.join('-'));
            }
            return $http.get(API_BASE_URL + '/doctors/');
        }

        /**
        * @summary Updates doctors' profile data
        * @description The profile is a Doctor model with a OneToOne relationship with User
        *              So here we're updating the Doctor model looking up for the User username field
        * @param {Object} username The doctor's username
        * @param {Object} profile The profile to be updated
        * @returns {Promise}
        * @memberOf nocc.doctor.services.doctorService
        */
        function update(username, profile) {
            return $http.put(API_BASE_URL + '/doctors/' + username + '/', profile);
        }

        /**
        * @summary Updates doctors' cv
        * @param {Object} username The doctor's username
        * @param {Object} file The file object
        * @uses ng-file-upload
        * @returns {Promise}
        * @memberOf nocc.doctor.services.doctorService
        */
        function updateCV(username, file) {
            return Upload.upload({
                url: API_BASE_URL + '/doctors/' + username + '/',
                method: 'PATCH',
                file: file,
                fileFormDataName: 'cv'
            });
        }

        /**
        * @summary Updates doctors' photo
        * @param {Object} username The doctor's username
        * @param {Object} file The file object
        * @uses ng-file-upload
        * @returns {Promise}
        * @memberOf nocc.doctor.services.doctorService
        */
        function updatePhoto(username, file) {
            return Upload.upload({
                url: API_BASE_URL + '/doctors/' + username + '/',
                method: 'PATCH',
                file: file,
                fileFormDataName: 'photo'
            });
        }

    }
})();
