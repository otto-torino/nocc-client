/**
 * @file surgeon.module.js
 * @summary     Surgeon Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the surgeon module
 *
 *              The module provides:
 *              - routes
 *              - controllers
 */
(function () {
    'use strict';

    angular
        .module('nocc.surgeon', [
            'nocc.surgeon.routes',
            'nocc.surgeon.controllers',
            'permission'
        ])
        .run(function(Permission, $q, authenticationService, caseService) {
            Permission.defineRole('isSurgeon', function(stateParams) {
                var user = authenticationService.getAuthenticatedUser();
                return user && user.is_surgeon;
            });
            Permission.defineRole('isSurgeonCase', function(stateParams) {

                var user = authenticationService.getAuthenticatedUser();
                var deferred = $q.defer();

                caseService.get(stateParams.caseId).then(function(response) {
                    var caseobj = response.data;
                    if(caseobj.surgeon_contact_obj.doctor.user.id === user.id) {
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
        .module('nocc.surgeon.controllers', ['nocc.config', 'ngFileUpload', 'nocc.doctor.services', 'nocc.authentication.services', 'ui.bootstrap.datetimepicker', 'nocc.patient.services']);

})();
