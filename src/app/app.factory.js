/**
* @file           app.factory.js
* @version        0.1.1
* @namespace      nocc.factory
* @author         abidibo <abidibo@gmail.com>
* @description    Defines a factory which provides the right template to be used for the main case detail view
*                 basing upon the current actor (user) and the case status.
*/
(function () {
    'use strict';

    angular
        .module('nocc.factory', ['nocc.authentication'])
        .factory('NoccControllerFactory', NoccControllerFactory);

    NoccControllerFactory.$inject = ['$http', '$templateCache', 'authenticationService', 'STATUS_KEY'];

    /**
     * Main case detail template factory
     * @return template of the case detail main view basing upon actor and case status
     */
    function NoccControllerFactory($http, $templateCache, authenticationService, STATUS_KEY) {


        // some status look the same to the patient eyes
        var patient_status_repeat_dict = {
            'proposals': 'doctor_association',
            'therapy_card': 'proposal_accepted'
        };

        // some status look the same to the observer eyes
        var observer_status_repeat_dict = {
        };

        return {
            caseDetailTemplate: function(caseObj) {
                var user = authenticationService.getAuthenticatedUser();
                var tpl_status;
                if(user.is_surgeon && caseObj.surgeon_contact_obj.doctor.user.id === user.id) {
                    return $http.get('surgeon/templates/case_detail_status_' + STATUS_KEY[caseObj.status] + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                }
                else if(user.is_doctor && (caseObj.oncologist_contact_obj.doctor.user.id === user.id || caseObj.radiotherapist_contact_obj.doctor.user.id === user.id)) {
                    return $http.get('doctor/templates/case_detail_status_' + STATUS_KEY[caseObj.status] + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                }
                else if(user.is_patient && caseObj.patient_obj.user.id === user.id) {
                    tpl_status = typeof patient_status_repeat_dict[STATUS_KEY[caseObj.status]] === 'undefined' ? STATUS_KEY[caseObj.status] : patient_status_repeat_dict[STATUS_KEY[caseObj.status]];
                    return $http.get('patient/templates/case_detail_status_' + tpl_status + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                }
                else if(user.is_doctor) {
                    /* jshint loopfunc:true */
                    for(var i = 0, l = caseObj.observers_obj.length; i < l; i++) {
                        if(caseObj.observers_obj[i].user.id === user.id) {
                            tpl_status = typeof observer_status_repeat_dict[STATUS_KEY[caseObj.status]] === 'undefined' ? STATUS_KEY[caseObj.status] : observer_status_repeat_dict[STATUS_KEY[caseObj.status]];
                            return $http.get('observer/templates/case_detail_status_' + tpl_status + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                        }
                    }
                }
            }
        };
    }

})();
