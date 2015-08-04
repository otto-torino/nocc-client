/**
* @file doctor.routes.js
* @namespace nocc.doctor.routes
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.routes', ['ui.router'])
        .config(config);

    config.$inject = ['$stateProvider'];

    /**
     * @summary config
     * @description Defines doctor specific routes
     *              On state change the toState is checked by the main app controller to see if a specific doctor
     *              state exists.
     *              Surgeon, Oncologist, Radiotherapist and Observer are doctors. Surgeon is a more specific condition
     *              so that if surgeon specific routes exists have precedence ofer these (if the actor is a surgeon)
     */
    function config( $stateProvider ) {
        $stateProvider.state( 'apphome.doctor', {
            url: '/',
            parent: 'apphome',
            views: {
                "main@loggedIn": {
                    controller: 'doctorHomeCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'doctor/templates/apphome.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'DoctorSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'App Home',
                permissions: {
                    only: ['isDoctor'],
                    redirectTo: 'home'
                }
            }
        }).state( 'profile.doctor', {
            url: '/',
            parent: 'profile',
            views: {
                "main@loggedIn": {
                    controller: 'DoctorProfileCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'doctor/templates/profile.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'DoctorSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Profile',
                permissions: {
                    only: ['isDoctor'],
                    redirectTo: 'home'
                }
            }
        })
        /**
         * Doctors case list
         * all doctors have such list (surgeons, oncologists, radiotherapists and observers)
         * the list itself is divided into actors sublists since a doctor can be the surgeon for
         * one case and the oncologist or observer for another
         */
        .state( 'case.doctor', {
            url: '',
            parent: 'case',
            views: {
                "main@loggedIn": {
                    controller: 'DoctorCaseListCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'doctor/templates/case_list.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'DoctorSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Casi',
                permissions: {
                    only: ['isDoctor'],
                    redirectTo: 'home'
                }
            }
        } )
         /**
         * Case detail
         * main / medicalExaminations
         */
        .state('case.detail.doctor', {
            url: '/',
            parent: 'case.detail',
            views: {
                "main@loggedIn": {
                    controller: 'DoctorCaseDetailCtrl',
                    templateUrl: 'doctor/templates/case_detail.tpl.html'
                },
                "sidebar@loggedIn": {
                    controller: 'DoctorSidebarCtrl',
                    templateUrl: 'layout/templates/sidebar.tpl.html'
                }
            },
            data:{
                page_title: 'Caso',
                permissions: {
                    only: ['isDoctorCase'],
                    redirectTo: 'home'
                }
            }
        })
        .state( 'case.detail.doctor.main', {
            parent: 'case.detail.doctor',
            url: 'doctor/main/',
            views: {
                'case-main': {
                    controller: 'DoctorCaseDetailMainCtrl',
                    controllerAs: 'vm',
                    templateProvider: ['NoccControllerFactory', '$stateParams', 'caseService', function(NoccControllerFactory, $stateParams, caseService) { 
                        return caseService.get($stateParams.caseId).then(function(response) {
                            return NoccControllerFactory.caseDetailTemplate(response.data);
                        });
                    }]
                },
                'case-nav': {
                    // @TODO check if caseObj is resolved in the controller
                    controller: 'DoctorSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Principale'/*,
                // defined in parent state
                permissions: {
                    only: ['isDoctorCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.doctor.examination', {
            parent: 'case.detail.doctor',
            url: 'doctor/examination/',
            params: { activeTab: 'initial' },
            views: {
                'case-main': {
                    controller: 'DoctorCaseDetailExaminationCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'doctor/templates/case_detail_examination.tpl.html'
                },
                'case-nav': {
                    controller: 'DoctorSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Esami clinici'/*,
                // defined in parent state
                permissions: {
                    only: ['isDoctorCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.doctor.tp', {
            parent: 'case.detail.doctor',
            url: 'doctor/tp/',
            views: {
                'case-main': {
                    controller: 'CaseDetailTpCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_tp.tpl.html'
                },
                'case-nav': {
                    controller: 'DoctorSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Proposta terapeutica'/*,
                // defined in parent state
                permissions: {
                    only: ['isDoctorCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.doctor.fu', {
            parent: 'case.detail.doctor',
            url: 'doctor/fu/',
            views: {
                'case-main': {
                    controller: 'DoctorCaseDetailFUCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'doctor/templates/case_detail_fu.tpl.html'
                },
                'case-nav': {
                    controller: 'DoctorSidebarCaseCtrl',
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
        .state( 'case.detail.doctor.revaluation', {
            parent: 'case.detail.doctor',
            url: 'doctor/revaluation/',
            views: {
                'case-main': {
                    controller: 'CaseDetailRevaluationCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_revaluation.tpl.html'
                },
                'case-nav': {
                    controller: 'DoctorSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Follow Up'/*,
                // defined in parent state
                permissions: {
                    only: ['isDoctorCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.doctor.adjuvant', {
            parent: 'case.detail.doctor',
            url: 'doctor/adjuvant/',
            views: {
                'case-main': {
                    controller: 'CaseDetailAdjuvantCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_adjuvant.tpl.html'
                },
                'case-nav': {
                    controller: 'DoctorSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Terapia adiuvante'/*,
                // defined in parent state
                permissions: {
                    only: ['isDoctorCase'],
                    redirectTo: 'home'
                }
                */
            }
        });

    }
})();
