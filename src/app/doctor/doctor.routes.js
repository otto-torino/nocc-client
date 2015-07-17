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
                "content": {
                    controller: 'doctorHomeCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'doctor/templates/apphome.tpl.html'
                },
                "sidebar": {
                    controllerProvider: 'DoctorSidebarCtrl',
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
                    controllerProvider: ['NoccControllerFactory', function(NoccControllerFactory) {
                        return NoccControllerFactory.sidebar();
                    }],
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
                    controllerProvider: ['NoccControllerFactory', function(NoccControllerFactory) {
                        return NoccControllerFactory.sidebar();
                    }],
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
        } );
    }
})();
