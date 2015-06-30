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
     * @TODO Create STATUS array with names
     */
    function NoccControllerFactory($http, $templateCache, authenticationService) {
        return {
            sidebar: 'DoctorSidebarCtrl',
            caseList: 'DoctorCaseListCtrl',
            caseDetail: 'DoctorCaseDetailCtrl',
            caseDetailTemplate: function() {
                return $http.get('doctor/templates/case_detail_status1.tpl.html', {cache: $templateCache }).then(function(response){return response.data;});
            }
        };
    }

})();
