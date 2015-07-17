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
        return {
            sidebar: function() {
                var user = authenticationService.getAuthenticatedUser();
                if(user.is_surgeon) {
                    return 'SurgeonSidebarCtrl';
                }
            },
            caseDetailTemplate: function(caseObj) {
                /**
                 * creare case.detail come status poi status1 è figlio
                 */
                var user = authenticationService.getAuthenticatedUser();
                if(user.is_surgeon && caseObj.surgeon_contact_obj.doctor.user.id === user.id) {
                    return $http.get('surgeon/templates/case_detail_status' + caseObj.status + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                }
                else if(user.is_patient && caseObj.patient_obj.user.id === user.id) {
                    return $http.get('patient/templates/case_detail_status' + caseObj.status + '.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
                }
            }
        };
    }

})();
