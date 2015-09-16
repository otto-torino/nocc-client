/**
* @file observer.routes.js
* @namespace nocc.observer.routes
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.observer.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider'];

    /**
     * @summary config
     * @description Defines observer specific routes
     *              On state change the toState is checked by the main app controller to see if a specific patient
     *              state exists.
     */
    function config( $stateProvider ) {
        // case list
        $stateProvider.state('case.detail.observer', {
            url: '/',
            parent: 'case.detail',
            views: {
                "main@loggedIn": {
                    controller: 'ObserverCaseDetailCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'observer/templates/case_detail.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'ObserverSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Caso',
                permissions: {
                    only: ['isObserverCase'],
                    redirectTo: 'home'
                }
            }
        })
        .state( 'case.detail.observer.main', {
            parent: 'case.detail.observer',
            url: 'observer/main/',
            views: {
                'case-main': {
                    controller: 'ObserverCaseDetailMainCtrl',
                    controllerAs: 'vm',
                    templateProvider: ['NoccControllerFactory', '$stateParams', 'caseService', function(NoccControllerFactory, $stateParams, caseService) { 
                        angular._debug.log('caseService.get called from observer.routes.js: case.detail.observer.main template provider', 4);
                        return caseService.get($stateParams.caseId).then(function(response) {
                            return NoccControllerFactory.caseDetailTemplate(response.data);
                        });
                    }]
                },
                'case-nav': {
                    controller: 'ObserverSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Principale',
                permissions: {
                    only: ['isObserverCase'],
                    redirectTo: 'home'
                }
            }
        })
        .state( 'case.detail.observer.examination', {
            parent: 'case.detail.observer',
            url: 'observer/examination/',
            params: { activeTab: 'initial' },
            views: {
                'case-main': {
                    controller: 'ObserverCaseDetailExaminationCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'observer/templates/case_detail_examination.tpl.html'
                },
                'case-nav': {
                    controller: 'ObserverSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Esami clinici'/*,
                // defined in parent state
                permissions: {
                    only: ['isObserverCase'],
                    redirectTo: 'home'
                }
                */
            }
        });


    }
})();
