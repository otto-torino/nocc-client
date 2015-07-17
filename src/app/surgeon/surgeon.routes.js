/**
* @file surgeon.routes.js
* @namespace nocc.surgeon.routes
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider'];

    /**
     * @summary config
     * @description Defines surgeon specific routes
     *              On state change the toState is checked by the main app controller to see if a specific surgeon
     *              state exists.
     */
    function config( $stateProvider ) {
        // case list
        $stateProvider.state( 'apphome.surgeon', {
            url: '/',
            parent: 'apphome',
            views: {
                "main@loggedIn": {
                    controller: 'SurgeonHomeCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'surgeon/templates/apphome.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'SurgeonSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'App Home',
                permissions: {
                    only: ['isSurgeon'],
                    redirectTo: 'home'
                }
            }
        })
        /**
         * Case detail
         * main / medicalExaminations
         */
        .state('case.detail.surgeon', {
            url: '/',
            parent: 'case.detail',
            views: {
                "main@loggedIn": {
                    controller: 'SurgeonCaseDetailCtrl',
                    templateUrl: 'surgeon/templates/case_detail.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'SurgeonSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Caso',
                permissions: {
                    only: ['isSurgeonCase'],
                    redirectTo: 'home'
                }
            }
        })
        .state( 'case.detail.surgeon.main', {
            parent: 'case.detail.surgeon',
            url: 'main/',
            views: {
                'case-main': {
                    controller: 'SurgeonCaseDetailMainCtrl',
                    controllerAs: 'vm',
                    templateProvider: ['NoccControllerFactory', '$stateParams', 'caseService', function(NoccControllerFactory, $stateParams, caseService) { 
                        return caseService.get($stateParams.caseId).then(function(response) {
                            return NoccControllerFactory.caseDetailTemplate(response.data);
                        });
                    }]
                },
                'case-nav': {
                    // @TODO check if caseObj is resolved in the controller
                    controller: 'SurgeonSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Principale'/*,
                // defined in parent state
                permissions: {
                    only: ['isSurgeonCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.surgeon.examination', {
            parent: 'case.detail.surgeon',
            url: 'examination/',
            views: {
                'case-main': {
                    controller: 'SurgeonCaseDetailExaminationCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'surgeon/templates/case_detail_examination.tpl.html'
                },
                'case-nav': {
                    controller: 'SurgeonSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Esami clinici'/*,
                // defined in parent state
                permissions: {
                    only: ['isSurgeonCase'],
                    redirectTo: 'home'
                }
                */
            }
        });
    }
})();
