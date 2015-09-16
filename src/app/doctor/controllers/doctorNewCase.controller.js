/**
* @file doctorNewCase.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorNewCaseCtrl', DoctorNewCaseCtrl);

    DoctorNewCaseCtrl.$inject = ['$rootScope', '$scope', '$state', '$filter', '$modalInstance', 'authenticationService', 'patientService', 'doctorService', 'contactService', 'caseService', 'data'];

    /**
     * @namespace DoctorNewCaseCtrl
     * @description Controller of the doctor's new case view
     * @permissions isSurgeon
     */
    function DoctorNewCaseCtrl($rootScope, $scope, $state, $filter, $modalInstance, authenticationService, patientService, doctorService, contactService, caseService, data) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon) {
                $state.go('home');
            }
        })();

        $scope.errors = {};
        $scope['case'] = {
            new_patient: {}
        };

        var user = authenticationService.getAuthenticatedUser();

        /**
         * @summary Gets surgeon contacts data
         * @uses nocc.doctor.services.doctorService
         * @uses nocc.contact.services.contactService
         */
        contactService.list(user.username).then(function(response) {
            $scope.contacts = { list: response.data };
        });

        /**
         * when seleciong a generic diagnosis, specific diagnosis must be retrieved
         */
        $scope.$watch('case.generic_diagnosis', function () {
            if($scope['case'].generic_diagnosis) {
                caseService.listSpecificDiagnosis($scope['case'].generic_diagnosis).then(function(response) {
                    $scope.specific_diagnosis = { list: response.data };
                }, function() {
                    console.log('error retrieving specific diagnosis');
                });
            }
        });

        /**
         * @summary Gets generic diagnosis data
         * @uses nocc.doctor.services.caseService
         */
        caseService.listGenericDiagnosis().then(function(response) {
            $scope.generic_diagnosis = { list: response.data };
        });

        /**
         * @summary Gets patients data
         * @uses nocc.patient.services.patientService
         */
        patientService.list().then(function(response) { 
            $scope.patients = { list: response.data };
        });

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        $scope.checkNewPatientMandatoryFields = function() {
            if(!$scope['case'].new_patient.sex || 
               !$scope['case'].new_patient.cf || 
               !$scope['case'].new_patient.birth_date || 
               !$scope['case'].new_patient.birth_place || 
               !$scope['case'].new_patient.address || 
               !$scope['case'].new_patient.city || 
               !$scope['case'].new_patient.phone || 
               !$scope['case'].new_patient.email
            ) {
                return false;
            }

            return true;
        };

        // save the insertion form
        $scope.save = function() {
            // case open
            $scope['case'].status = 1; //@TODO use dict
            // create patient instance
            if($scope['case'].new_patient && $scope.checkNewPatientMandatoryFields()) {
                var patient = {
                    firstname: $scope['case'].new_patient.firstname,
                    lastname: $scope['case'].new_patient.lastname,
                    sex: $scope['case'].new_patient.sex,
                    cf: $scope['case'].new_patient.cf,
                    birth_date: $filter('date')($scope['case'].new_patient.birth_date, 'yyyy-MM-dd'),
                    birth_place: $scope['case'].new_patient.birth_place,
                    address: $scope['case'].new_patient.address,
                    city: $scope['case'].new_patient.city,
                    phone: $scope['case'].new_patient.phone,
                    email: $scope['case'].new_patient.email
                };
                patientService.create(patient).then(
                    function(response) {
                        $scope.patients.list.push(response.data);
                        $scope['case'].patient = response.data.id;
                        caseService.create($scope['case']).then(saveSuccessFn, saveErrorFn);
                    },
                    function(response) {
                        $scope.errors = response.data;
                        console.log($scope.errors);
                    }
                );
            }
            else {
                caseService.create($scope['case']).then(saveSuccessFn, saveErrorFn);
            }

            function saveSuccessFn(response) {
                var newcase = response.data;
                data.ctrl.surgeon_cases.push(newcase);
                $rootScope.$broadcast('update_notifications');
                $modalInstance.dismiss();
            }

            // update the $scope.errors object
            function saveErrorFn(response) {
                if(response.status == 400) {
                    for(var p in response.data) {
                        if(response.data.hasOwnProperty(p)) {
                            $scope.errors[p] = response.data[p];
                        }
                    }
                }
                else {
                    console.log('error'); //@TODO error message
                }
            }
        };

    }

})();
