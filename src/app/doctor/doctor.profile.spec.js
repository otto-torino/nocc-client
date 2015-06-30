/**
 * @summary Profile Module's Tests
 */

/**
 * Login function
 */
var login = function(authenticationService, $httpBackend, scope) {

    fake_user = {
        token: 'myfaketoken',
        user: {
            id: 4,
            username: 'lorierif',
            patient: null,
            email: '',
            doctor: {
                id: 2,
                firstname: 'Fabrizio',
                lastname: 'Lorieri',
                is_oncologist: false,
                is_radiotherapist: false,
                is_surgeon: true,
                contacts: []
            }
        }
    };
    $httpBackend.when('POST', "http://localhost:8000/nocc/api/v1/auth/login/").respond(fake_user);
    authenticationService.login('lorierif', 'fabrizio');
    $httpBackend.flush();
    // $scope.auth is set by the NoccController on $stateChangeSuccess
    scope.auth = {isAuthenticated: authenticationService.isAuthenticated(), user: authenticationService.getAuthenticatedUser()};
};

describe('profile: ', function() {

    var $rootScope, $modalInstance, $state, $controller, Upload;
    var doctorService, authenticationService, hospitalService, contactService, fake_user;
    var files, dialogs, $window, $httpBackend, $q, to_edit_contact;

    beforeEach(function() {
        module('nocc');
        inject(function(_$rootScope_, _$state_, _$controller_, _Upload_, _doctorService_, _authenticationService_, _hospitalService_, _contactService_, _files_, _dialogs_, _$window_, _$httpBackend_, _$q_) {
            // remove locaStorage data from previous tests
            $rootScope = _$rootScope_;
            $modalInstance = {                    // Create a mock object using spies
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };
            $state = _$state_;
            Upload = _Upload_;
            doctorService = _doctorService_;
            contactService = _contactService_;
            hospitalService = _hospitalService_;
            authenticationService = _authenticationService_;
            files = _files_;
            $controller = _$controller_;
            $window = _$window_;
            $httpBackend = _$httpBackend_;
            $q = _$q_;
            dialogs = _dialogs_;

            var fakeModal = {
                result: {
                    then: function (confirmCallback, cancelCallback) {
                        confirmCallback('yes');
                        return this;
                    }
                },
                close: function (item) {
                    this.result.confirmCallBack(item);
                },
                dismiss: function (item) {
                    this.result.cancelCallback(item);
                }
            };
            var MokedDialogs = {
                confirm: function() { return fakeModal; }
            };
            dialogs = MokedDialogs;
        });
    });


    /**
     * Let's test access permissions
     */
    describe( 'profile permissions: ', function() {

        /**
         * An authenticated doctor can see its profile page
         */
        describe('authenticated user: ', function() {

            // authenticate
            beforeEach(function () {
                login(authenticationService, $httpBackend, {});
            });

            /**
             * Login service should set proper cookies when user successfully logs in
             */
            it( 'user can access the profile page', inject( function() {
                $state.go('profile');
                $rootScope.$digest();
                expect($state.current.name).toBe('profile');
            }));
        });

    });

    describe('main form update: ', function() {
        var scope1, scope2;
        beforeEach(function() {

            scope1 = $rootScope.$new();
            scope2 = $rootScope.$new();

            login(authenticationService, $httpBackend, scope1);

            // init user
            var fake_doctor_data = {
                id: 1,
                firstname: 'Fabrizio',
                lastname: 'Lorieri',
                is_oncologist: false,
                is_radiotherapist: false,
                is_surgeon: true,
                user: {
                    id: 1,
                    username: 'lorierif'
                }
            };
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/lorierif/").respond(fake_doctor_data);

            // update user
            var fake_put_doctor_data = {
                firstname: 'Fabrizio edited',
                lastname: 'Lorieri edited',
                is_oncologist: false,
                is_radiotherapist: false,
                is_surgeon: true
            };
            $httpBackend.when('PUT', "http://localhost:8000/nocc/api/v1/doctor/profile/lorierif/").respond(fake_put_doctor_data);

            // contacts
            var fake_get_doctor_contacts = [
                {
                    id: 1,
                    phone: '144',
                    email: 'florieri@molinette.it',
                    hospital: 2,
                    hospital_obj: {
                        id: 2,
                        name: 'Molinette'
                    }
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/?doctor=1").respond(fake_get_doctor_contacts);

            var fake_get_contact_exceptions = [
                {
                    id: 1,
                    doctor_contact: 1,
                    date: '2015-06-07'
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/exceptions/?contact=1").respond(fake_get_contact_exceptions);

        });

        it('profile fullname gets updated after saving the profile form', function() {
            var ProfileController = $controller('DoctorProfileCtrl', {
                $scope: scope1,
                $state: $state,
                authenticationService: authenticationService,
                doctorService: doctorService,
                files: files,
                dialogs: dialogs
            });
            $httpBackend.flush();

            expect(ProfileController.doctor.fullname).toBe('Fabrizio Lorieri');

            EditDoctorProfileCtrl = $controller('EditDoctorProfileCtrl', {
                $scope: scope2,
                $modalInstance: $modalInstance,
                $state: $state,
                Upload: Upload,
                doctorService: doctorService,
                authenticationService: authenticationService,
                data: ProfileController.doctor
            });
            // before saving
            expect(scope2.doctor.firstname).toBe('Fabrizio');
            scope2.save();
            $httpBackend.flush();

            // after saving
            expect(scope2.doctor.firstname).toBe('Fabrizio edited');
            expect(ProfileController.doctor.fullname).toBe('Fabrizio edited Lorieri edited');

        });

    });

    describe('adding contact: ', function() {
        var scope1, scope2;

        beforeEach(function() {

            scope1 = $rootScope.$new();
            scope2 = $rootScope.$new();

            login(authenticationService, $httpBackend, scope1);

            // init user
            var fake_doctor_data = {
                id: 1,
                firstname: 'Fabrizio',
                lastname: 'Lorieri',
                is_oncologist: false,
                is_radiotherapist: false,
                is_surgeon: true,
                user: {
                    id: 1,
                    username: 'lorierif'
                }
            };
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/lorierif/").respond(fake_doctor_data);

            // contacts
            var fake_get_doctor_contacts = [
                {
                    id: 1,
                    phone: '144',
                    email: 'florieri@molinette.it',
                    hospital: 2,
                    hospital_obj: {
                        id: 2,
                        name: 'Molinette'
                    }
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/?doctor=1").respond(fake_get_doctor_contacts);

            fake_post_contact_data = {
                id: '10',
                phone: '999',
                email: 'test@test.it',
                doctor: '2',
                hospital: '2'
            };
            $httpBackend.when('POST', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/").respond(fake_post_contact_data);

            var fake_get_contact_exceptions = [
                {
                    id: 1,
                    doctor_contact: 1,
                    date: '2015-06-07'
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/exceptions/?contact=1").respond(fake_get_contact_exceptions);

            var fake_get_hospital_data = [
                {
                    id: 1,
                    name: 'ospedale1'
                },
                {
                    id: 2,
                    name: 'ospedale2'
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/hospital/").respond(fake_get_hospital_data);

        });

        it('profile contacts get updated after adding one', function() {
            var ProfileController = $controller('DoctorProfileCtrl', {
                $scope: scope1,
                $state: $state,
                authenticationService: authenticationService,
                contactService: contactService,
                doctorService: doctorService,
                files: files,
                dialogs: dialogs
            });
            $httpBackend.flush();

            AddEditDoctorContactCtrl = $controller('AddEditDoctorContactCtrl', {
                $scope: scope2,
                $modalInstance: $modalInstance,
                $state: $state,
                Upload: Upload,
                doctorService: doctorService,
                contactService: contactService,
                hospitalService: hospitalService,
                authenticationService: authenticationService,
                data: { ctrl: ProfileController, contact: null }
            });

            expect(ProfileController.doctor.contacts.length).toBe(1);
            scope2.save();
            $httpBackend.flush();
            // after saving
            expect(ProfileController.doctor.contacts.length).toBe(2);

        });

    });

    describe('editing contact: ', function() {
        var scope1, scope2;

        beforeEach(function() {

            scope1 = $rootScope.$new();
            scope2 = $rootScope.$new();

            login(authenticationService, $httpBackend, scope1);

            // init user
            var fake_doctor_data = {
                id: 1,
                firstname: 'Fabrizio',
                lastname: 'Lorieri',
                is_oncologist: false,
                is_radiotherapist: false,
                is_surgeon: true,
                user: {
                    id: 1,
                    username: 'lorierif'
                }
            };
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/lorierif/").respond(fake_doctor_data);

            // contacts
            var fake_get_doctor_contacts = [
                {
                    id: 1,
                    phone: '144',
                    email: 'florieri@molinette.it',
                    hospital: 2,
                    hospital_obj: {
                        id: 2,
                        name: 'Molinette'
                    }
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/?doctor=1").respond(fake_get_doctor_contacts);
            var fake_get_hospital_data = [
                {
                    id: 1,
                    name: 'ospedale1'
                },
                {
                    id: 2,
                    name: 'ospedale2'
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/hospital/").respond(fake_get_hospital_data);

            fake_put_contact_data = {
                id: '2',
                phone: '999',
                email: 'test@test.it',
                doctor: '2',
                hospital: '3',
                hospital_obj: {
                    id: 3,
                    name: 'Mauriziano'
                }
            };
            $httpBackend.when('PUT', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/1/").respond(fake_put_contact_data);

            var fake_get_contact_exceptions = [
                {
                    id: 1,
                    doctor_contact: 1,
                    date: '2015-06-07'
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/exceptions/?contact=1").respond(fake_get_contact_exceptions);

        });

        it('profile editing contact, change hospital', function() {
            var ProfileController = $controller('DoctorProfileCtrl', {
                $scope: scope1,
                $state: $state,
                authenticationService: authenticationService,
                contactService: contactService,
                doctorService: doctorService,
                files: files,
                dialogs: dialogs
            });
            $httpBackend.flush();

            expect(ProfileController.doctor.contacts[0].hospital_obj.name).toBe('Molinette');

            AddEditDoctorContactCtrl = $controller('AddEditDoctorContactCtrl', {
                $scope: scope2,
                $modalInstance: $modalInstance,
                $state: $state,
                Upload: Upload,
                doctorService: doctorService,
                contactService: contactService,
                hospitalService: hospitalService,
                authenticationService: authenticationService,
                data: {
                    ctrl: ProfileController, 
                    contact:  ProfileController.doctor.contacts[0]
                }
            });

            scope2.save();
            $httpBackend.flush();
            // after saving
            expect(ProfileController.doctor.contacts[0].hospital_obj.name).toBe('Mauriziano');

        });
    });

    describe('deleting contact: ', function() {
        var scope1;

        beforeEach(function() {

            scope1 = $rootScope.$new();

            login(authenticationService, $httpBackend, scope1);

            // init user
            var fake_doctor_data = {
                id: 1,
                firstname: 'Fabrizio',
                lastname: 'Lorieri',
                is_oncologist: false,
                is_radiotherapist: false,
                is_surgeon: true,
                user: {
                    id: 1,
                    username: 'lorierif'
                }
            };
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/lorierif/").respond(fake_doctor_data);

            // contacts
            var fake_get_doctor_contacts = [
                {
                    id: 1,
                    phone: '144',
                    email: 'florieri@molinette.it',
                    hospital: 2,
                    hospital_obj: {
                        id: 2,
                        name: 'Molinette'
                    }
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/?doctor=1").respond(fake_get_doctor_contacts);

            var fake_get_contact_exceptions = [
                {
                    id: 1,
                    doctor_contact: 1,
                    date: '2015-06-07'
                }
            ];
            $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/exceptions/?contact=1").respond(fake_get_contact_exceptions);

            // delete contact
            $httpBackend.when('DELETE', "http://localhost:8000/nocc/api/v1/doctor/profile/contacts/1/").respond({});

        });

        it('profile delete contact', function() {
            var ProfileController = $controller('DoctorProfileCtrl', {
                $scope: scope1,
                $state: $state,
                authenticationService: authenticationService,
                contactService: contactService,
                doctorService: doctorService,
                files: files,
                dialogs: dialogs
            });
            $httpBackend.flush();

            expect(ProfileController.doctor.contacts.length).toBe(1);

            ProfileController.confirmAndDelete(ProfileController.doctor.contacts[0]);
            $httpBackend.flush();
            expect(ProfileController.doctor.contacts.length).toBe(0);
        });
    });


});

