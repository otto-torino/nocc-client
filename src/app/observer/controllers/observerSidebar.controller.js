/**
* @file observerSidebar.controller.js
* @namespace nocc.observer.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.observer.controllers')
        .controller('ObserverSidebarCtrl', ObserverSidebarCtrl);

    ObserverSidebarCtrl.$inject = ['$scope', '$state'];

    /**
     * @namespace ObserverSidebarCtrl
     * @description Controller of the observer's sidebar
     */
    function ObserverSidebarCtrl($scope, $state) {

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
