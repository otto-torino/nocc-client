/**
* @file app.interceptors.js
* @namespace nocc.interceptors
* @description Main app middlewares
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.interceptors', ['ngToast'])
        .config(config);

    config.$inject = ['$httpProvider', '$provide', '$injector'];

    function config($httpProvider, $provide, $q, $injector) {
        /**
         * Custom interceptor
         * Acts as a middleware between all requests/responses
         *
         * Requests:
         * - attaches authentication info to the request headers when the user is authenticated
         *   in order to implement the TokenAuthentication with the API
         *
         * Responses:
         * - unauthenticates the user on 401 response
         * - displays error messages
         */
        $provide.factory('noccHttpInterceptor', function($q, $injector, ngToast) {
            return {
                // optional method
                'request': function(config) {
                    $injector.invoke(function(authenticationService) {
                        config.headers = config.headers || {};
                        if(authenticationService.isAuthenticated()) {
                            config.headers.Authorization = 'Token ' + authenticationService.getToken();
                        }
                    });
                    return config;
                },

                // optional method
                'requestError': function(rejection) {
                    // do something on error
                    return $q.reject(rejection);
                },

                // optional method
                'response': function(response) {
                    // do something on success
                    return response;
                },

                // optional method
                'responseError': function(rejection) {
                    if (rejection.status === 401) {
                        $injector.invoke(function(authenticationService) {
                            authenticationService.unauthenticate();
                        });
                        //ngToast.danger('Devi essere loggato per vedere questa pagina.');
                        $injector.get('$state').go('login');
                    }
                    else if (rejection.status === 403) {
                        ngToast.danger('Non sei autorizzato a vedere questa pagina.');
                        $injector.get('$state').go('home');
                    }
                    else if (rejection.status === 404) {
                        ngToast.danger('La pagina cercata non esiste.');
                    }

                    return $q.reject(rejection);
                }
            };
        });

        $httpProvider.interceptors.push('noccHttpInterceptor');
    }

})();
