/**
* @file           authentication.service.js
* @version        0.1.1
* @namespace      nocc.authentication.services
* @author         abidibo <abidibo@gmail.com>
* @description    Authentication module services
*/
(function () {
    'use strict';

    angular
        .module('nocc.authentication.services', ['nocc.config', 'ui.bootstrap', 'dialogs.main'])
        .config(function( dialogsProvider ) {
            dialogsProvider.useFontAwesome();
        })
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', '$q', '$window', 'dialogs', 'API_BASE_URL'];

    /**
    * @namespace   authenticationService
    * @description Provides methods to log in/out users, methods to get or set the current user
    *              and methods to check if the user is authenticated
    * @returns {Factory}
    */
    function authenticationService($http, $q, $window, dialogs, API_BASE_URL) {
        /**
        * @summary Authentication Service Object
        * @description The Factory to be returned
        */
        var service = {
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            getAuthenticatedUser: getAuthenticatedUser,
            getToken: getToken,
            setAuthenticatedUser: setAuthenticatedUser,
            unauthenticate: unauthenticate,
            refreshAuthenticatedUser: refreshAuthenticatedUser
        };

        return service;

        ////////////////////

        /**
         * @summary login
         * @description Try to log in with username `username` and password `password`
         * @param {string} username The username entered by the user
         * @param {string} password The password entered by the user
         * @returns {Promise}
         * @memberof nocc.authentication.services.authenticationService
         */
        function login(username, password) {
            var deferred = $q.defer();
            var url = API_BASE_URL + '/auth/login/';
            $http.post(url, {
                username: username, password: password
            }).then(
                function loginSuccessFn(response) {
                    var token = response.data.token;
                    var user = response.data.user;

                    if (token && user) {
                        service.setAuthenticatedUser(token, user);
                        deferred.resolve(true);
                    } else {
                        deferred.reject('Invalid data received from server');
                    }
                },
                function loginErrorFn(response) {
                    deferred.reject(response.data);
                }

            );
            return deferred.promise;
        }

        /**
         * @summary Logout
         * @description Deletes the authentication info stored in the localStorage
         * @returns {Promise}
         * @memberOf nocc.authentication.services.authenticationService
         */
        function logout() {
            return $http.post(API_BASE_URL + '/auth/logout/', {}).then(unauthenticate, logoutErrorFn);
        }

        /**
         * @summary Logout error callback
         * @param {object} response Server response, properties: config, data, status, statusText
         * @description Opens a dialog with an error message
         */
        function logoutErrorFn(response) {
            dialogs.error(
                'Errore',
                'Si è verificato un problema durante il logout.',
                {
                    size: 'sm'
                }
            );
        }

        /**
         * @summary Checks if user is authenticated
         * @description Check if the current user is authenticated
         * @returns {boolean} True is user is authenticated, else false.
         * @memberOf nocc.authentication.services.authenticationService
         */
        function isAuthenticated() {
            return !!($window.localStorage.token && $window.localStorage.user);
        }

        /**
         * @summary Gets the authenticated user
         * @description Return the currently authenticated user
         * @returns {object|undefined} User if authenticated, else `undefined`
         * @memberOf nocc.authentication.services.authenticationService
         */
        function getAuthenticatedUser() {
            if(!isAuthenticated()) {
                return;
            }
            return JSON.parse($window.localStorage.user);
        }

        /**
         * @summary Gets the authentication token
         * @returns {String|undefined} token if authenticated, else `undefined`
         * @memberOf nocc.authentication.services.authenticationService
         */
        function getToken() {
            if(!isAuthenticated()) {
                return;
            }
            return $window.localStorage.token;
        }

        /**
         * @summary Sets the authenticated user
         * @description Stores the token and user in the localStorage.
         *              User is stored in a stringified version since localStorage only supports
         *              key: value pairs
         * @param {String} token The authentication token
         * @param {Object} user The user object to be stored
         * @returns {undefined}
         * @memberOf nocc.authentication.services.authenticationService
         */
        function setAuthenticatedUser(token, user) {
            $window.localStorage.token = token;
            $window.localStorage.user = JSON.stringify(user);
        }

        function refreshAuthenticatedUser() {
            var user = getAuthenticatedUser();
            return $http.get(API_BASE_URL + '/auth/profile/' + user.username + '/', {}).then(
                function(response) {
                    $window.localStorage.user = JSON.stringify(response.data);
                }, function() {
                    console.log('error'); //@TODO
                });
        }

        /**
         * @summary Anauthenticates the user
         * @description removes auth data from localStorage
         * @return {undefined}
         * @memberOf nocc.authentication.services.authenticationService
         */
        function unauthenticate() {
            $window.localStorage.removeItem('token');
            $window.localStorage.removeItem('user');
        }

    }

})();
