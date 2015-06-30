/**
* @file case.routes.js
* @namespace nocc.case.routes
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.case.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider'];

    /**
     * @summary config
     * @description Defines profile routes
     */
    function config( $stateProvider ) {
        $stateProvider.state( 'case', {
            url: '/app/case/list',
            parent: 'loggedIn',
            views: {
                "main": {
                    controllerProvider: ['NoccControllerFactory', function(NoccControllerFactory) { return NoccControllerFactory.caseList; }],
                    controllerAs: 'vm',
                    templateUrl: function() { return 'case/templates/case_list.tpl.html'; }
                },
                "sidebar": {
                    controllerProvider: ['NoccControllerFactory', function(NoccControllerFactory) { return NoccControllerFactory.sidebar; }],
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Casi',
                permissions: {
                    only: ['isAuthenticated'],
                    redirectTo: 'home'
                }
            }
        }).state( 'case.detail', {
            url: '/app/case/:caseId/status/:status',
            parent: 'loggedIn',
            views: {
                "main": {
                    controllerProvider: ['NoccControllerFactory', function(NoccControllerFactory) { return NoccControllerFactory.caseDetail; }],
                    controllerAs: 'vm',
                    templateProvider: ['NoccControllerFactory', function(NoccControllerFactory) { return NoccControllerFactory.caseDetailTemplate(); }]
                },
                "sidebar": {
                    controllerProvider: ['NoccControllerFactory', function(NoccControllerFactory) { return NoccControllerFactory.sidebar; }],
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Caso',
                permissions: {
                    only: ['isAuthenticated'],
                    redirectTo: 'home'
                }
            }
        });
    }
})();
