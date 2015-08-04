/**
* @file contact.service.js
* @namespace nocc.doctor.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.doctor.services', ['nocc.config', 'ngFileUpload'])
        .factory('contactService', contactService);

    contactService.$inject = ['$http', 'API_BASE_URL'];

    /**
    * @namespace   contactService
    * @description Provides methods to fetch and update doctors contacts
    * @returns {Factory}
    */
    function contactService($http, API_BASE_URL) {
        /**
        * @summary Doctor Service Object
        * @description The Factory to be returned
        */
        var service = {
            list: list,
            get: get,
            create: create,
            update: update,
            kill : kill,
            listExceptions: listExceptions,
            createException: createException,
            killException: killException
        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves contacts list given the doctor username
        * @param {String} username
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function list(username) {
            return $http.get(API_BASE_URL + '/doctors/' + username + '/contacts/');
        }

        /**
        * @summary Retrieves a contact
        * @param {String} username
        * @param {Number} id contact id
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function get(username, id) {
            return $http.get(API_BASE_URL + '/doctors/' + username + '/contacts/' + id + '/');
        }

        /**
        * @summary Creates a doctor contact
        * @param {String} username
        * @param {Object} contact
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function create(username, contact) {
            return $http.post(API_BASE_URL + '/doctors/' + username + '/contacts/', contact);
        }

        /**
        * @summary Updates a doctor contact
        * @param {String} username
        * @param {Object} contact
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function update(username, contact) {
            return $http.put(API_BASE_URL + '/doctors/' + username + '/contacts/' + contact.id + '/', contact);
        }

        /**
        * @summary Deletes a doctor contact
        * @param {String} username
        * @param {Integer} id
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function kill(username, id) {
            return $http['delete'](API_BASE_URL + '/doctors/' + username +'/contacts/' + id + '/');
        }

        /**
        * @summary Retrieves exceptions list given the doctor contact
        * @param {String} username
        * @param {Integer} contact_id
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function listExceptions(username, contact_id) {
            return $http.get(API_BASE_URL + '/doctors/' + username + '/contacts/' + contact_id + '/exceptions/');
        }

        /**
        * @summary Creates a contact availability exception
        * @param {String} username
        * @param {Integer} contact_id
        * @param {Object} exception
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function createException(username, contact_id, exception) {
            return $http.post(API_BASE_URL + '/doctors/' + username + '/contacts/' + contact_id + '/exceptions/', exception);
        }

        /**
        * @summary Deletes a doctor contact's availability exception
        * @param {String} username
        * @param {Integer} contact_id
        * @param {Integer} id
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function killException(username, contact_id, id) {
            return $http['delete'](API_BASE_URL + '/doctors/' + username + '/contacts/' + contact_id + '/exceptions/' + id + '/');
        }

    }
})();
