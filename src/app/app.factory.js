/**
* @file app.factory.js
* @namespace nocc.factory
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.factory', ['nocc.authentication'])
        .factory('NoccControllerFactory', NoccControllerFactory);

    NoccControllerFactory.$inject = ['$http', '$templateCache', 'authenticationService'];

    /**
     * Main app controller
     * Uses scope instead of controller as technique in order to have fallback in other nested views
     */
    function NoccControllerFactory($http, $templateCache, authenticationService) {


        // some status look the same to the patient eyes
        var patient_status_repeat_dict = {
            3: 2
        };

        return {
            caseDetailTemplate: function(caseObj) {
                /**
                 * creare case.detail come status poi status1 è figlio
                 */
                var user = authenticationService.getAuthenticatedUser();
                if(user.is_surgeon && caseObj.surgeon_contact_obj.doctor.user.id === user.id) {
                    return $http.get('surgeon/templates/case_detail_status' + caseObj.status + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                }
                else if(user.is_doctor && (caseObj.oncologist_contact_obj.doctor.user.id === user.id || caseObj.radiotherapist_contact_obj.doctor.user.id === user.id)) {
                    return $http.get('doctor/templates/case_detail_status' + caseObj.status + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                }
                else if(user.is_patient && caseObj.patient_obj.user.id === user.id) {
                    var tpl_status = typeof patient_status_repeat_dict[caseObj.status] === 'undefined' ? caseObj.status : patient_status_repeat_dict[caseObj.status];
                    return $http.get('patient/templates/case_detail_status' + tpl_status + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                }
            }
        };
    }

})();
