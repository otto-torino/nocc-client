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
        })
        .state( 'case.detail.patient.examination', {
            parent: 'case.detail.patient',
            url: 'patient/examination/',
            params: { activeTab: 'initial' },
            views: {
                'case-main': {
                    controller: 'PatientCaseDetailExaminationCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'patient/templates/case_detail_examination.tpl.html'
                },
                'case-nav': {
                    controller: 'PatientSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Esami clinici'/*,
                // defined in parent state
                permissions: {
                    only: ['isPatientCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.patient.doctorprofile', {
            parent: 'case.detail.patient',
            url: 'patient/doctor/:username/profile',
            views: {
                'case-main': {
                    controller: 'DoctorProfileViewCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'doctor/templates/profile_view.tpl.html'
                },
                'case-nav': {
                    controller: 'PatientSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Profilo Medico'/*,
                // defined in parent state
                permissions: {
                    only: ['isPatientCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.patient.tp', {
            parent: 'case.detail.patient',
            url: 'patient/tp/',
            views: {
                'case-main': {
                    controller: 'CaseDetailTpCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_tp.tpl.html'
                },
                'case-nav': {
                    controller: 'PatientSidebarCaseCtrl',
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
        .state( 'case.detail.patient.fu', {
            parent: 'case.detail.patient',
            url: 'patient/fu/',
            views: {
                'case-main': {
                    controller: 'PatientCaseDetailFUCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'patient/templates/case_detail_fu.tpl.html'
                },
                'case-nav': {
                    controller: 'PatientSidebarCaseCtrl',
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
        .state( 'case.detail.patient.revaluation', {
            parent: 'case.detail.patient',
            url: 'patient/revaluation/',
            views: {
                'case-main': {
                    controller: 'CaseDetailRevaluationCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_revaluation.tpl.html'
                },
                'case-nav': {
                    controller: 'PatientSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Follow Up'/*,
                // defined in parent state
                permissions: {
                    only: ['isPatientCase'],
                    redirectTo: 'home'
                }
                */
            }
        })
        .state( 'case.detail.patient.adjuvant', {
            parent: 'case.detail.patient',
            url: 'patient/adjuvant/',
            views: {
                'case-main': {
                    controller: 'CaseDetailAdjuvantCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'case/templates/case_detail_adjuvant.tpl.html'
                },
                'case-nav': {
                    controller: 'PatientSidebarCaseCtrl',
                    templateUrl: 'layout/templates/sidebar_nav.tpl.html'
                }
            },
            data:{
                page_title: 'Caso | Terapia adiuvante'/*,
                // defined in parent state
                permissions: {
                    only: ['isPatientCase'],
                    redirectTo: 'home'
                }
                */
            }
        });

    }
})();
