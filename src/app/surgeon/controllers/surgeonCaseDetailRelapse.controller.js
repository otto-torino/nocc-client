/**
* @file surgeonCaseDetailRelapse.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonCaseDetailRelapse', SurgeonCaseDetailRelapse);

    SurgeonCaseDetailRelapse.$inject = ['$rootScope', '$scope', '$state', '$modalInstance', 'authenticationService', 'patientService', 'doctorService', 'contactService', 'caseService', 'data'];

    /**
     * @namespace SurgeonCaseDetailRelapse
     * @description Controller of the surgeon case detail relapse view
     * @permissions isSurgeon
     */
    function SurgeonCaseDetailRelapse($rootScope, $scope, $state, $modalInstance, authenticationService, patientService, doctorService, contactService, caseService, data) {

        var parent_scope = data.scope;
        var user = authenticationService.getAuthenticatedUser();

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !user.is_surgeon || parent_scope.model.caseObj.surgeon_contact_obj.doctor.user.id != user.id) {
                $state.go('home');
            }
        })();

        $scope.errors = {};
        $scope['case'] = {
            id: null,
            description: 'Recidiva - ' + parent_scope.model.caseObj.description,
            surgeon_contact: parent_scope.model.caseObj.surgeon_contact,
            patient: parent_scope.model.caseObj.patient,
            patient_obj: parent_scope.model.caseObj.patient_obj,
            relapse: parent_scope.model.caseObj.id
        };

        /**
         * @summary Gets surgeon contacts data
         * @uses nocc.doctor.services.doctorService
         * @uses nocc.contact.services.contactService
         */
        contactService.list(user.username).then(function(response) {
            $scope.contacts = { list: response.data };
        });

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // save the insertion form
        $scope.save = function() {
            // case open
            $scope['case'].status = 1; //@TODO use dict
            // create patient instance
            caseService.create($scope['case']).then(saveSuccessFn, saveErrorFn);

            function saveSuccessFn(response) {
                var newcase = response.data;
                parent_scope.data.forward = true;
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
