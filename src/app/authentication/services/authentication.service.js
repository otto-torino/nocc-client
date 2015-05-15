/**
* @file authentication.service.js
* @namespace nocc.authentication.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.authentication.services', ['nocc.config', 'ngCookies', 'ui.bootstrap', 'dialogs.main'])
        .config(function( dialogsProvider ) {
            dialogsProvider.useFontAwesome();
        })
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$cookies', '$http', 'dialogs', 'API_BASE_URL'];

    /**
    * @namespace   authenticationService
    * @description Provides methods to log in/out users, methods to get or set the current user
    *              and methods to check if the user is authenticated
    * @returns {Factory}
    */
    function authenticationService($cookies, $http, dialogs, API_BASE_URL) {
        /**
        * @summary Authentication Service Object
        * @description The Factory to be returned
        */
        var service = {
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            getAuthenticatedUser: getAuthenticatedUser,
            setAuthenticatedUser: setAuthenticatedUser
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
            return $http.post(API_BASE_URL + '/auth/login/', {
                username: username, password: password
            }).then(loginSuccessFn, loginErrorFn);
        }

        /**
         * @summary Login success callback
         * @param {object} response Server response, properties: config, data, status, statusText
         * @desc Set the authenticated account and redirect to index
         */
        function loginSuccessFn(response) {
            service.setAuthenticatedUser(response.data);
        }

        /**
         * @summary Login error callback
         * @param {object} response Server response, properties: config, data, status, statusText
         * @desc Shows a modal with an error message
         */
        function loginErrorFn(response) {
            dialogs.error(
                'Errore di autenticazione', 
                'L\'utente e password forniti non sono validi.',
                {
                    size: 'sm'
                }
            );
        }

        /**
         * @summary Logout
         * @description Delete the cookie where the user object is stored and logouts from server
         * @returns {Promise}
         * @memberOf nocc.authentication.services.authenticationService
         */
        function logout() {
            return $http.post(API_BASE_URL + '/auth/logout/', {}).then(logoutSuccessFn, logoutErrorFn);
        }

        /**
         * @summary Logout success callback
         * @param {object} response Server response, properties: config, data, status, statusText
         * @description Redirects to the home page
         */
        function logoutSuccessFn(response) {
            delete $cookies.authenticatedUser;
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
            return !!$cookies.authenticatedUser;
        }

        /**
         * @summary Gets the authenticated user
         * @description Return the currently authenticated user
         * @returns {object|undefined} Account if authenticated, else `undefined`
         * @memberOf nocc.authentication.services.authenticationService
         */
        function getAuthenticatedUser() {
            if (!$cookies.authenticatedUser) {
                return;
            }

            return JSON.parse($cookies.authenticatedUser);
        }

        /**
         * @summary Sets the authenticated user
         * @description Stringify the user object and store it in a cookie
         * @param {Object} user The user object to be stored
         * @returns {undefined}
         * @memberOf nocc.authentication.services.authenticationService
         */
        function setAuthenticatedUser(user) {
            $cookies.authenticatedUser = JSON.stringify(user);
        }

    }

})();
