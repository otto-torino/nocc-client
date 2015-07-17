/**
 * @file patient.module.js
 * @summary     Patient Module
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
        .module('nocc.patient', [
            'nocc.patient.routes',
            'nocc.patient.controllers',
            'nocc.patient.services'
        ])
        .run(function(Permission, $q, authenticationService, caseService) {
            Permission.defineRole('isPatient', function(stateParams) {
                var user = authenticationService.getAuthenticatedUser();
                return user && user.is_patient;
            });
            Permission.defineRole('isPatientCase', function(stateParams) {

                var user = authenticationService.getAuthenticatedUser();
                var deferred = $q.defer();

                angular._debug.log('caseService.get called from aaa_patient.module.js: isPatientCase', 4);
                caseService.get(stateParams.caseId).then(function(response) {
                    var caseobj = response.data;
                    if(caseobj.patient_obj.user.id === user.id) {
                        deferred.resolve();
                    }
                    else {
                        deferred.reject();
                    }

                }, function() { deferred.reject(); });

                return deferred.promise;

            });
        });

    angular
        .module('nocc.patient.controllers', []);

})();
