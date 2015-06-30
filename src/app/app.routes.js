/**
* @file app.routes.js
* @namespace nocc.routes
* @description Main app routes
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * Routes are defined in a per-module basis
     * When location doesn't match any module url then it fallbaks to /home
     * Here I define two abstract states: 
     * loggedIn, loggedOut
     * which are parent of all other states. So it is possible to resolve data that can be
     * injected inside any other controller, for example the authenticated user can now be injected 
     * inside a controller without the need to call the authenticationService every time.
     * es.
     *      angular.controller('MyController', MyController);
     *      MyController.$inject = ['request'];
     *      function MyController(request) {
     *          console.log(request.user);
     *      }
     */
    function config( $stateProvider, $urlRouterProvider ) {

        // loggedOut
        $stateProvider.state('loggedOut', {
            templateUrl: 'loggedout.tpl.html',
            abstract: true,
            onEnter: ['$rootScope', function ($rootScope) {
                $rootScope.$emit('loggedOut');
            }]
        })
        // loggedIn
        .state('loggedIn', {
            templateUrl: 'loggedin.tpl.html',
            abstract: true,
            resolve: {
                /**
                 * All loggedIn states receives a request object containing the current logged in user
                 */
                request: ['authenticationService', function (authenticationService) {
                    return {
                        user: authenticationService.getAuthenticatedUser()
                    };
                }]
            }/*,
            onEnter: ['$rootScope', 'request', function ($rootScope, request) {
                $rootScope.$emit('loggedIn', request.user);
            }]*/
        });
        // unmatched urls
        $urlRouterProvider.otherwise( '/home' );

    }
})();
