/**
 * @file           app.controller.js
 * @version        0.1.1
 * @namespace      nocc.controllers
 * @author         abidibo <abidibo@gmail.com>
 * @description    Main controller
 */
(function () {
    'use strict';

    angular
        .module('nocc.controllers', ['ui.router', 'nocc.authentication', 'nocc.config'])
        .controller('NoccController', NoccController);

    NoccController.$inject = ['$scope', '$state', '$http', '$window', 'authenticationService', 'MEDIA_BASE_URL'];

    /**
     * Main app controller
     * Uses scope instead of controller as technique in order to have fallback in other nested views
     */
    function NoccController($scope, $state, $http, $window, authenticationService, MEDIA_BASE_URL) {

        /**
         * Actions to perform in the main controller when the state (ui-router) changes
         * - redirect if user has its own state (the same state can have different instancies for each actor: patient, doctor, surgeon)
         * - change pageTitle
         * - refresh is_authenticated and user properties
         */
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

            var user = authenticationService.getAuthenticatedUser();
            // authentication
            $scope.auth = {
                is_authenticated: authenticationService.isAuthenticated(),
                user: user
            };

            redirectActor($state, toState, user);

            if(angular.isDefined(toState.data) && angular.isDefined(toState.data.page_title)) {
                $scope.page_title = toState.data.page_title + ' | NOCC' ;
            }

        });

        $scope.MEDIA_BASE_URL = MEDIA_BASE_URL;
        $scope.logout = logout;

        $scope.layout = {
            openNotificationPanel: false,
            notifications: 0
        };

        /**
        * @summary logout
        * @description Logs the user out
        * @memberOf nocc.AppCtrl
        * @uses nocc.authentication.services.authenticationService
        */
        function logout() {
            authenticationService.logout().then(function() {
                $window.location.href = $window.location.origin + $window.location.pathname;
            });
        }
    }

    /**
     * Redirects the user to its own state if it exists
     *
     * In some points of the application the templates are the same for every actor. In such case a link to a different 
     * state points to a general state which indeed may have different substates for different actors. 
     * A substate is called with the state name plus a dot and the actor name, ie:
     * apphome -> apphome.surgeon | apphome.patient | apphome.doctor
     * This function assures that the user is redirected to its own substate when it exists.
     *
     * @param {Object} $state
     * @param {Object} toState next state
     * @param {Object} user
     */
    function redirectActor($state, toState, user) {

        if(typeof user == 'undefined') {
            return;
        }

        // states which have actor substates
        var actor_states = {
            patient: ['apphome', 'case'],
            surgeon: ['apphome'],
            doctor: ['apphome', 'profile', 'case']
        };
        ['patient', 'surgeon', 'doctor'].every(function(actor) {
            if(user['is_' + actor] && actor_states[actor].indexOf(toState.name) !== -1) {
                $state.go(toState.name + '.' + actor);
                return false;
            }
            return true;
        });

    }

})();
