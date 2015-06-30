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
        * @param {Integer} doctor_id
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function list(doctor_id) {
            return $http.get(API_BASE_URL + '/doctor/profile/contacts/?doctor=' + doctor_id);
        }

        /**
        * @summary Creates a doctor contact
        * @param {Object} contact
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function create(contact) {
            return $http.post(API_BASE_URL + '/doctor/profile/contacts/', contact);
        }

        /**
        * @summary Updates a doctor contact
        * @param {Object} contact
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function update(contact) {
            return $http.put(API_BASE_URL + '/doctor/profile/contacts/' + contact.id + '/', contact);
        }

        /**
        * @summary Deletes a doctor contact
        * @param {Integer} id
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function kill(id) {
            return $http['delete'](API_BASE_URL + '/doctor/profile/contacts/' + id + '/');
        }

        /**
        * @summary Retrieves exceptions list given the doctor contact
        * @param {Integer} contact_id
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function listExceptions(contact_id) {
            return $http.get(API_BASE_URL + '/doctor/profile/contacts/exceptions/?contact=' + contact_id);
        }

        /**
        * @summary Creates a contact availability exception
        * @param {Object} exception
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function createException(exception) {
            return $http.post(API_BASE_URL + '/doctor/profile/contacts/exceptions/', exception);
        }

        /**
        * @summary Deletes a doctor contact's availability exception
        * @param {Integer} id
        * @returns {Promise}
        * @memberOf nocc.doctor.services.contactService
        */
        function killException(id) {
            return $http['delete'](API_BASE_URL + '/doctor/profile/contacts/exceptions/' + id + '/');
        }

    }
})();
