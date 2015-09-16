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
                    controller: 'DoctorSidebarCtrl',
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
                    controller: 'DoctorSidebarCtrl',
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
            params: { activeTab: 'initial' },
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
        })
        .state( 'case.detail.surgeon.tp', {
            parent: 'case.detail.surgeon',
            url: 'tp/',
            views: {
                'case-main': {
                    controller: 'CaseDetailTpCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_tp.tpl.html'
                },
                'case-nav': {
                    controller: 'SurgeonSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Proposta terapeutica'/*,
                // defined in parent state
                permissions: {
                    only: ['isSurgeonCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.surgeon.tc', {
            parent: 'case.detail.surgeon',
            url: 'tc/',
            views: {
                'case-main': {
                    controller: 'CaseDetailTcCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_tc.tpl.html'
                },
                'case-nav': {
                    controller: 'SurgeonSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Scheda terapeutica'/*,
                // defined in parent state
                permissions: {
                    only: ['isSurgeonCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.surgeon.fu', {
            parent: 'case.detail.surgeon',
            url: 'fu/',
            views: {
                'case-main': {
                    controller: 'SurgeonCaseDetailFUCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'surgeon/templates/case_detail_fu.tpl.html'
                },
                'case-nav': {
                    controller: 'SurgeonSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Follow Up'/*,
                // defined in parent state
                permissions: {
                    only: ['isSurgeonCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.surgeon.etc', {
            parent: 'case.detail.surgeon',
            url: 'etc/',
            views: {
                'case-main': {
                    controller: 'CaseDetailEtcCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_etc.tpl.html'
                },
                'case-nav': {
                    controller: 'SurgeonSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Scheda fine trattamento'/*,
                // defined in parent state
                permissions: {
                    only: ['isSurgeonCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.surgeon.revaluation', {
            parent: 'case.detail.surgeon',
            url: 'revaluation/',
            views: {
                'case-main': {
                    controller: 'CaseDetailRevaluationCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_revaluation.tpl.html'
                },
                'case-nav': {
                    controller: 'SurgeonSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Rivalutazione'/*,
                // defined in parent state
                permissions: {
                    only: ['isSurgeonCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.surgeon.adjuvant', {
            parent: 'case.detail.surgeon',
            url: 'adjuvant/',
            views: {
                'case-main': {
                    controller: 'CaseDetailAdjuvantCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_adjuvant.tpl.html'
                },
                'case-nav': {
                    controller: 'SurgeonSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Terapia adiuvante'/*,
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
