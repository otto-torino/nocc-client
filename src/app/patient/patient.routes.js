/**
* @file patient.routes.js
* @namespace nocc.patient.routes
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.patient.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider'];

    /**
     * @summary config
     * @description Defines patient specific routes
     *              On state change the toState is checked by the main app controller to see if a specific patient
     *              state exists.
     */
    function config( $stateProvider ) {
        // case list
        $stateProvider.state( 'apphome.patient', {
            url: '/',
            parent: 'apphome',
            views: {
                "main@loggedIn": {
                    controller: 'PatientHomeCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'patient/templates/apphome.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'PatientSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'App Home',
                permissions: {
                    only: ['isPatient'],
                    redirectTo: 'home'
                }
            }
        })
        /**
         * Patient case list
         */
        .state( 'case.patient', {
            url: '',
            parent: 'case',
            views: {
                "main@loggedIn": {
                    controller: 'PatientCaseListCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'patient/templates/case_list.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'PatientSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Casi',
                permissions: {
                    only: ['isPatient'],
                    redirectTo: 'home'
                }
            }
        } )
        /**
         * Case detail
         * main / medicalExaminations
         */
        .state('case.detail.patient', {
            url: '/',
            parent: 'case.detail',
            views: {
                "main@loggedIn": {
                    controller: 'PatientCaseDetailCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'patient/templates/case_detail.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'PatientSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Caso',
                permissions: {
                    only: ['isPatientCase'],
                    redirectTo: 'home'
                }
            }
        })
        .state( 'case.detail.patient.main', {
            parent: 'case.detail.patient',
            url: 'patient/main/',
            views: {
                'case-main': {
                    controller: 'PatientCaseDetailMainCtrl',
                    controllerAs: 'vm',
                    templateProvider: ['NoccControllerFactory', '$stateParams', 'caseService', function(NoccControllerFactory, $stateParams, caseService) { 
                        angular._debug.log('caseService.get called from patient.routes.js: case.detail.patient.main template provider', 4);
                        return caseService.get($stateParams.caseId).then(function(response) {
                            return NoccControllerFactory.caseDetailTemplate(response.data);
                        });
                    }]
                },
                'case-nav': {
                    controller: 'PatientSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Principale',
                permissions: {
                    only: ['isPatientCase'],
                    redirectTo: 'home'
                }
            }
        });

    }
})();
