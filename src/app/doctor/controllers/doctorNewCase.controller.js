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

    DoctorNewCaseCtrl.$inject = ['$scope', '$state', '$filter', '$modalInstance', 'authenticationService', 'patientService', 'doctorService', 'caseService', 'data'];

    /**
     * @namespace DoctorSidebarCtrl
     * @description Controller of the doctor's profile view
     * @permissions hasProfile
     */
    function DoctorNewCaseCtrl($scope, $state, $filter, $modalInstance, authenticationService, patientService, doctorService, caseService, data) {

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon) {
                $state.go('home');
            }
        })();

        $scope.errors = {};
        $scope['case'] = {};

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
            $scope['case'].status = 1;
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
                    function() {
                        console.log('error'); //@TODO
                    }
                );
            }
            else {
                caseService.create($scope['case']).then(saveSuccessFn, saveErrorFn);
            }

            function saveSuccessFn(response) {
                var newcase = response.data;
                data.ctrl.surgeon_cases.push(newcase);
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
