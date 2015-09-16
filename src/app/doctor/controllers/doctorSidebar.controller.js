/**
* @file doctorSidebar.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorSidebarCtrl', DoctorSidebarCtrl);

    DoctorSidebarCtrl.$inject = ['$scope', '$state'];

    /**
     * @namespace DoctorSidebarCtrl
     * @description Controller of the doctor's sidebar
     * @permissions hasProfile
     */
    function DoctorSidebarCtrl($scope, $state) {

        $scope.navMain = [
            {
                state: 'apphome',
                text: 'home',
                fa: 'home'
            },
            {
                state: 'profile',
                text: 'profilo',
                fa: 'user'
            },
            {
                state: 'case',
                text: 'casi clinici',
                fa: 'ambulance'
            }
        ];

    }

})();
