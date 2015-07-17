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
     *              Choose if it is bettere to have a template factory which depends from the case status or to create a router for each "MAIN" state
     *              which redirects to the appropriate state which depends from status and eventually the actor
     */
    function config( $stateProvider ) {
        // case list
        $stateProvider.state( 'case', {
            url: '/app/case/list/',
            parent: 'loggedIn',
            data:{
                page_title: 'Casi'
            }
        /**
         * Every actor redefines its case detail state and also all its substates
         * The case detail substates are the ones which allow o manage the case view
         * like a single app, all substates are loaded inside ui-view defined at this level
         */
        }).state( 'case.detail', {
            url: '/app/case/:caseId',
            parent: 'loggedIn',
            /**
             * every case detail status and its children have the caseObj variable resolved
             */
            resolve: {
                caseObj: ['$stateParams', 'caseService', function ($stateParams, caseService) {
                    angular._debug.log('caseService.get called from case.routes.js: case.detail resolve', 4);
                    return caseService.get($stateParams.caseId).then(function(response) { return response.data; });
                }]
            },
            data:{
                page_title: 'Caso'
            }
        });
    }
})();
