/**
 * @file app.js
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the main app file, where the app is defined and so the global route fallback and the main app controller
 *              The main app controls the overall application behavior, while single functionalities are carried on by modules
 *              Modules are organized in directories at this fs level. Each module provides is own routes.
 */

angular._useOrLoadModule = function(module, dep) {

    try {
        return angular.module(module);
    }
    catch(err) {
        return angular.module(module, dep);
    }

};

angular.module( 'nocc', [
    'templates-app',
    'templates-common',
    'nocc.config',
    'nocc.layout',
    'nocc.authentication',
    'nocc.home',
    'ui.router'
])

/**
 * Routes are defined in a per-module basis
 * When location doesn't match any module url then it fallbaks to /home
 */
.config(function noccConfig($stateProvider, $urlRouterProvider) {
    // unmatched urls
    $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

/**
 * Main app controller
 * Uses scope instead of controller as technique in order to have fallback in other nested views
 */
.controller('AppCtrl', function AppCtrl($scope, $state, authenticationService) {
    /**
     * Actions to perform in the main controller when the state (ui-router) changes
     * - change pageTitle
     * - refresh is_authenticated and user properties
     */
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if(angular.isDefined(toState.data.page_title)) {
            $scope.page_title = toState.data.page_title + ' | NOCC' ;
            // authentication
            $scope.is_authenticated = authenticationService.isAuthenticated();
            $scope.user = authenticationService.getAuthenticatedUser();
        }
    });

    $scope.logout = logout;

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

});

