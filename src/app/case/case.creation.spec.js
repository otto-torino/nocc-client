/**
 * @summary Case creation tests
 */

/**
 * Login function
 */
var login = function(authenticationService, $httpBackend, scope) {
    console.log('MAAAAAAA');
    fake_user = {
        token: 'myfaketoken',
        user: {
            id: 4,
            username: 'lorierif',
            email: '',
            is_patient: false,
            is_doctor: true,
            is_surgeon: true
        }
    };
    $httpBackend.when('POST', "http://localhost:8000/nocc/api/v1/auth/login/").respond(fake_user);
    authenticationService.login('lorierif', 'fabrizio');
    $httpBackend.flush();
    // $scope.auth is set by the NoccController on $stateChangeSuccess
    scope.auth = {isAuthenticated: authenticationService.isAuthenticated(), user: authenticationService.getAuthenticatedUser()};
};

describe('case creation: ', function() {

    var $rootScope, $modalInstance, $state, $filter, $controller;
    var scope1, scope2, scope3;
    var doctorService, authenticationService, caseService, patientService, fake_user;
    var dialogs, $httpBackend;

    beforeEach(function() {
        module('nocc');
        inject(function(_$rootScope_, _$state_, _$filter_, _$controller_, _doctorService_, _authenticationService_, _caseService_, _patientService_, _dialogs_, _$httpBackend_) {
            // remove locaStorage data from previous tests
            $rootScope = _$rootScope_;
            scope1 = $rootScope.$new();
            scope2 = $rootScope.$new();
            scope3 = $rootScope.$new();
            $modalInstance = {                    // Create a mock object using spies
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };
            $state = _$state_;
            $filter = _$filter_;
            doctorService = _doctorService_;
            caseService = _caseService_;
            patientService = _patientService_;
            authenticationService = _authenticationService_;
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
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

        login(authenticationService, $httpBackend, {});

        fake_cases = [];
        $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/cases/?role=surgeon").respond(fake_cases);

        var fake_surgeon_data = {
            id: 2,
            firstname: 'Fabrizio',
            lastname: 'Lorieri',
            is_surgeon: true,
            is_oncologist: false,
            is_radiotherapist: false
        };
        $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctors/lorierif/").respond(fake_surgeon_data);

        var fake_contacts_data = [
            {
                id: 1,
                doctor: '2',
                hospital: '3',
                phone: '99999',
                email: 'gino@pino.it'
            }
        ];
        $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctors/lorierif/contacts/").respond(fake_contacts_data);

        var fake_get_patients_data = [
            {
                id: 1,
                firstname: 'Paziente1',
                lastname: 'Cognome1'
            }
        ];
        $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/patients/").respond(fake_get_patients_data);

        var fake_get_oncologists_data = [
            {
                id: 1,
                firstname: 'Oncologo',
                lastname: 'Cognome'
            }
        ];
        $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctors/?type=oncologist").respond(fake_get_oncologists_data);

        var fake_get_radiotherapists_data = [
            {
                id: 2,
                firstname: 'Radioterapista',
                lastname: 'Cognome'
            }
        ];
        $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctors/?type=radiotherapist").respond(fake_get_radiotherapists_data);

        var fake_get_observers_data = [
            {
                id: 3,
                firstname: 'Osservatore',
                lastname: 'Cognome'
            }
        ];
        $httpBackend.when('GET', "http://localhost:8000/nocc/api/v1/doctors/").respond(fake_get_observers_data);

        var fake_post_case_data = [
            {
                patient: 1,
                description: 'descrizione'
            }
        ];
        $httpBackend.when('POST', "http://localhost:8000/nocc/api/v1/cases/").respond(fake_post_case_data);


    });

    it('newly created surgeon case is added to the cases list', function() {

        var CaseListController = $controller('DoctorCaseListCtrl', {
            $scope: scope1,
            $state: $state,
            authenticationService: authenticationService,
            caseService: caseService,
            dialogs: dialogs,
            request: { user: authenticationService.getAuthenticatedUser() }
        });
        $httpBackend.flush();

        expect(CaseListController.surgeon_cases.length).toBe(0);

        DoctorNewCaseCtrl = $controller('DoctorNewCaseCtrl', {
            $scope: scope2,
            $state: $state,
            $filter: $filter,
            $modalInstance: $modalInstance,
            authenticationService: authenticationService,
            doctorService: doctorService,
            patientService: patientService,
            caseService: caseService,
            data: {ctrl: CaseListController}
        });
        $httpBackend.flush();

        scope2.save();
        $httpBackend.flush();
        expect(CaseListController.surgeon_cases.length).toBe(1);

    });

});

