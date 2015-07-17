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

    NotificationCtrl.$inject = ['$scope', 'authenticationService', 'caseService', 'ASSOCIATION_STATUS'];

    var user;
    var ASSOCIATION_STATUS_DICT;

    /**
     * Notification controller
     */
    function NotificationCtrl($scope, authenticationService, caseService, ASSOCIATION_STATUS) {

        var messages = [];
        user = authenticationService.getAuthenticatedUser();
        ASSOCIATION_STATUS_DICT = ASSOCIATION_STATUS;

        $scope.$on('update_notifications', function() {
            messages = [];
            updateNotifications(messages, $scope, authenticationService, caseService);
            $scope.messages = messages;
        });

        $scope.$on('update_messages', function() {
            $scope.layout.notifications = messages.length;
        });

        $scope.$emit('update_notifications');

        $scope.messages = messages;

    }

    function updateNotifications(messages, $scope, authenticationService, caseService) {
        if(user.is_surgeon) {
           caseService.listAsSurgeon().then(function(response) {
                var surgeon_cases = response.data;
                for (var i = 0, len = surgeon_cases.length; i < len; i++) {
                    var caseobj = surgeon_cases[i];
                    SurgeonNotifications.get(caseobj, messages);
                }
                $scope.$emit('update_messages');
            });
        }
        if(user.is_doctor) {
           caseService.listAsDoctor().then(function(response) {
                var doctor_cases = response.data;
                for (var i = 0, len = doctor_cases.length; i < len; i++) {
                    var caseobj = doctor_cases[i];
                    DoctorNotifications.get(caseobj, messages);
                }
                $scope.$emit('update_messages');
            });
        }

        $scope.$emit('update_messages');

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

    var DoctorNotifications = {
        get: function(caseobj, messages) {
            return this['status' + caseobj.status](caseobj, messages);
        },
        status1: function(caseobj, messages) {
            if(caseobj.oncologist_contact_obj.doctor.user.id === user.id && caseobj.oncologist_status === ASSOCIATION_STATUS_DICT.to_be_accepted) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'accettare/rifiutare associazione'
                });
            }
        }
    };

})();
