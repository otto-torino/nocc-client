/**
 * @file doctor.module.js
 * @summary     Doctor Module
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the doctor module
 *
 *              The module provides:
 *              - routes
 *              - controllers
 *              - services
 */
(function () {
    'use strict';

    angular
        .module('nocc.doctor', [
            'nocc.doctor.routes',
            'nocc.doctor.controllers',
            'nocc.doctor.services'
        ])
        .run(function(Permission, $q, authenticationService, caseService) {
            Permission.defineRole('isDoctor', function(stateParams) {
                var user = authenticationService.getAuthenticatedUser();
                return user && user.is_doctor;
            });
            Permission.defineRole('isDoctorCase', function(stateParams) {

                var user = authenticationService.getAuthenticatedUser();
                var deferred = $q.defer();

                caseService.get(stateParams.caseId).then(function(response) {
                    var caseobj = response.data;
                    if(caseobj.oncologist_contact_obj.doctor.user.id === user.id || caseobj.radiotherapist_contact_obj.doctor.user.id === user.id) {
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
        .module('nocc.doctor.controllers', ['ngFileUpload', 'nocc.doctor.services', 'nocc.authentication.services', 'ui.bootstrap.datetimepicker', 'nocc.patient.services']);


})();
