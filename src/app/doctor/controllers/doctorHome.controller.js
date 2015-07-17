/**
* @file doctorHome.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('doctorHomeCtrl', DoctorHomeCtrl);

    DoctorHomeCtrl.$inject = ['$scope', '$state'];

    /**
     * @namespace DoctorHomeCtrl
     * @description Controller of the doctor's home page
     * @permissions isDoctor
     */
    function DoctorHomeCtrl($scope, $state) {

    }

})();
