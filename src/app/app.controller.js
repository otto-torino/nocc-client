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

    NoccController.$inject = ['$scope', '$state', 'authenticationService', 'MEDIA_BASE_URL'];

    /**
     * Main app controller
     * Uses scope instead of controller as technique in order to have fallback in other nested views
     */
    function NoccController($scope, $state, authenticationService, MEDIA_BASE_URL) {

        /**
         * Actions to perform in the main controller when the state (ui-router) changes
         * - change pageTitle
         * - refresh is_authenticated and user properties
         */
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if(angular.isDefined(toState.data.page_title)) {
                $scope.page_title = toState.data.page_title + ' | NOCC' ;
                // authentication
                $scope.auth = {
                    is_authenticated: authenticationService.isAuthenticated(),
                    user: authenticationService.getAuthenticatedUser()
                };
                console.log($scope.auth);
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
            });
        }
    }
})();
