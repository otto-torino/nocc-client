/**
 * @file aaa_observer.module.js
 * @summary     Observer Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the patient module
 *
 *              The module provides:
 *              - routes
 *              - services
 */
(function () {
    'use strict';

    angular
        .module('nocc.observer', [
            'nocc.observer.routes',
            'nocc.observer.controllers'
        ])
        .run(function(Permission, $q, authenticationService, caseService) {
            Permission.defineRole('isObserverCase', function(stateParams) {

                var user = authenticationService.getAuthenticatedUser();
                var deferred = $q.defer();

                angular._debug.log('caseService.get called from aaa_observer.module.js: isObserverCase', 4);
                caseService.get(stateParams.caseId).then(function(response) {
                    var caseobj = response.data;
                    for(var i = 0, l = caseobj.observers_obj.length; i < l; i++) {
                        if(caseobj.observers_obj[i].user.id === user.id) {
                            deferred.resolve();
                        }
                    }
                    deferred.reject();

                }, function() { deferred.reject(); });

                return deferred.promise;

            });
            Permission.defineRole('isAuthenticated', function(stateParams) {
                var user = authenticationService.getAuthenticatedUser();
                return (user && user.id);
            });
        });

    angular
        .module('nocc.observer.controllers', []);

})();
