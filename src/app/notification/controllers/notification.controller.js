/**
* @file notification.controller.js
* @namespace nocc.notification.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.notification.controllers', ['nocc.authentication', 'nocc.case'])
        .controller('NotificationCtrl', NotificationCtrl);

    NotificationCtrl.$inject = ['$scope', 'authenticationService', 'caseService'];

    /**
     * Notification controller
     */
    function NotificationCtrl($scope, authenticationService, caseService) {
        var messages = [];
        if(authenticationService.getAuthenticatedUser().is_surgeon) {
            caseService.listAsSurgeon().then(function(response) {
                var surgeon_cases = response.data;
                for (var i = 0, len = surgeon_cases.length; i < len; i++) {
                    var caseobj = surgeon_cases[i];
                    SurgeonNotifications.get(caseobj, messages);
                }
                $scope.$emit('update_messages');
            });
        }
        $scope.$on('update_messages', function() {
            $scope.layout.notifications = messages.length;
        });

        $scope.messages = messages;

    }

    var SurgeonNotifications = {
        get: function(caseobj, messages) {
            return this['status' + caseobj.status](caseobj, messages);
        },
        status1: function(caseobj, messages) {
            if(caseobj.oncologist_status === null) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'associare oncologo'
                });
            }
            if(caseobj.radiotherapist_status === null) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'associare radioterapista'
                });
            }
        }
    };

})();
