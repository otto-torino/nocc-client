/**
* @file profile.service.js
* @namespace nocc.profile.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.profile.services', ['nocc.config'])
        .factory('profileService', profileService);

    profileService.$inject = ['$http', 'API_BASE_URL'];

    /**
    * @namespace   profileService
    * @description Provides methods to fetch and update users profile data
    * @returns {Factory}
    */
    function profileService($http, API_BASE_URL) {
        /**
        * @summary Profile Service Object
        * @description The Factory to be returned
        */
        var service = {
            get: get,
            update: update
        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves profile's data
        * @description Gets the profile for user with username `username`
        * @param {string} username The username of the user to fetch
        * @returns {Promise}
        * @memberOf nocc.profile.services.profileService
        */
        function get(username) {
            return $http.get(API_BASE_URL + '/profile/' + username + '/');
        }


        /**
        * @summary Updates user profile data
        * @param {Object} profile The profile to be updated
        * @returns {Promise}
        * @memberOf nocc.profile.services.profileService
        */
        function update(profile) {
            return $http.put(API_BASE_URL + '/profile/' + profile.username + '/', profile);
        }
    }
})();
