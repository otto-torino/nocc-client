/**
* @file doctorCreateEditFU.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorCreateEditFUCtrl', DoctorCreateEditFUCtrl);

    DoctorCreateEditFUCtrl.$inject = ['$scope', '$state', '$modalInstance', 'authenticationService', 'contactService', 'followupService', 'data', 'FU_TYPE_DICT'];

    /**
     * @namespace DoctorCreateEditFUCtrl
     * @description Controller of the doctor's create FU view
     * @permissions isDoctorCase
     */
    function DoctorCreateEditFUCtrl($scope, $state, $modalInstance, authenticationService, contactService, followupService, data, FU_TYPE_DICT) {

        var parent_scope = data.scope;
        var type = data.type;

        /** check permission */
        (function() {
            var user = authenticationService.getAuthenticatedUser();
            if(!user || (parent_scope.model.caseObj.oncologist_contact_obj.doctor.user.id != user.id && parent_scope.model.caseObj.radiotherapist_contact_obj.doctor.user.id != user.id && parent_scope.model.caseObj.surgeon_contact_obj.doctor.user.id != user.id)) {
                $state.go('home');
            }
        })();

        $scope.fu = {};

        $scope.beforeRender = parent_scope.beforeRender;

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        $scope.save = function() {
            var obj = {
                'case': parent_scope.model.caseObj.id,
                type: FU_TYPE_DICT[type],
                text: $scope.fu.text,
                date: moment($scope.fu.date).format('YYYY-MM-DD HH:mm:ss')
            };
            followupService.create(parent_scope.model.caseObj.id, obj).then(function(response) {
                parent_scope.data.followup = response.data;
                parent_scope.data.followups.push(response.data);
                $modalInstance.dismiss();
            }, function() {
                console.log('error'); // @TODO
            });
        };

    }

})();
