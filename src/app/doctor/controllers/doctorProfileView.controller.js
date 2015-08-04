/**
* @file doctorProfileView.controller.js
* @namespace nocc.doctor.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.doctor.controllers')
        .controller('DoctorProfileViewCtrl', DoctorProfileViewCtrl);

    DoctorProfileViewCtrl.$inject = ['$scope', '$state', 'doctorService', 'contactService', 'files'];

    /**
     * @namespace DoctorProfileViewCtrl
     * @description Controller of the doctor's home page
     * @permissions isDoctor
     */
    function DoctorProfileViewCtrl($scope, $state, doctorService, contactService, files) {

        var vm = this;
        vm.doctor = { model: null, contacts: [] };

        doctorService.get($state.params.username).then(function(response) {
            vm.doctor.model = response.data;
            vm.updateExtendedProps();
            // contacts
            contactService.list(vm.doctor.model.user.username).then(function(response) {
                vm.doctor.contacts = response.data;
                vm.doctor.contacts[0].active = true;
            }, function(response) { vm.doctor.contacts = []; });
        }, function (response) {
            console.log('error'); //@TODO
        });

        /**
         * @summary Adds some shortcut properties
         * @memberOf nocc.doctor.controllers.DoctorProfileCtrl
         */
        vm.updateExtendedProps = function() {
            vm.doctor.fullname = [vm.doctor.model.firstname, vm.doctor.model.lastname].join(' ');
            vm.doctor.cv_extension = files.getExtension(vm.doctor.model.cv);
            vm.doctor.cv_filename = files.getFilename(vm.doctor.model.cv);
            vm.doctor.doctor_types = [];
            if(vm.doctor.model.is_surgeon) { vm.doctor.doctor_types.push('chirurgo'); }
            if(vm.doctor.model.is_oncologist) { vm.doctor.doctor_types.push('oncologo'); }
            if(vm.doctor.model.is_radiotherapist) { vm.doctor.doctor_types.push('radioterapista'); }
        };

    }

})();
