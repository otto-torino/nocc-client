/**
* @file app.controller.js
* @namespace nocc.controllers
* @author    abidibo <abidibo@gmail.com>
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
        * @description Log the user out
        * @memberOf nocc.AppCtrl
        * @uses nocc.authentication.services.authenticationService
        */
        function logout() {
            authenticationService.logout().then(function() {
                $state.go('home', {}, {reload: true});
                $window.location.reload();
            });
        }
    }

    function redirectActor($state, toState, user) {

        if(typeof user == 'undefined') {
            return;
        }

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
