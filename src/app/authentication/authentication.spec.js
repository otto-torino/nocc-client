/**
 * @summary Authentication Module's Tests
 */
describe( 'authentication login and logout: ', function() {
    var authenticationService, $httpBackend, $window, $controller, $rootScope, fake_data, scope1;

    beforeEach( module( 'nocc' ) );
    beforeEach( module( 'nocc.authentication' ) );
    beforeEach( module( 'ngCookies' ) );

    beforeEach(inject(function (_authenticationService_, _$httpBackend_, _$window_) {
        authenticationService = _authenticationService_;
        $httpBackend = _$httpBackend_;
        $window = _$window_;
        fake_data = {
            token: 'myfaketoken',
            user: {
                id: 4,
                username: 'lorierif',
                patient: null,
                email: '',
                doctor: {
                    firstname: 'Fabrizio',
                    lastname: 'Lorieri',
                    is_oncologist: false,
                    is_radiotherapist: false,
                    is_surgeon: true
                }
            }
        };
        $httpBackend.when('POST', "http://localhost:8000/nocc/api/v1/auth/login/").respond(fake_data);
        $httpBackend.when('POST', "http://localhost:8000/nocc/api/v1/auth/logout/").respond({});
    }));

    beforeEach(inject(function(_$controller_, _$state_, _$rootScope_) {
        $rootScope = _$rootScope_;
        scope1 = $rootScope.$new();
        $state = _$state_;
        $controller = _$controller_;
        spyOn($state, 'go');
    }));

    /**
     * Login service should set proper cookies when user successfully logs in
     */
    it( 'authentication data stored after login', inject( function() {
        authenticationService.login('lorierif', 'fabrizio').then(function() {
            expect($window.localStorage.token).toEqual(fake_data.token);
            expect(authenticationService.isAuthenticated()).toBeTruthy();
        });
        $httpBackend.flush();
    }));

    /**
     * Logout service should delete authentication cookie when user logs out
     */
    it( 'authentication data removed after logout', inject( function() {
        authenticationService.logout().then(function() {
            expect($window.localStorage.token).toEqual(undefined);
            expect(authenticationService.isAuthenticated()).toBeFalsy();
        });
        $httpBackend.flush();
    }));

    /**
     * Login should redirect to home page if user's authenticated
     */
    it( 'checking profile when non authenticated', function() {
        authenticationService.login('lorierif', 'fabrizio').then(function() {
            $state.go('login');
            expect($state.go).toHaveBeenCalledWith('login');
            $state.go.reset();
            $controller('LoginController', {
                authenticationService: authenticationService,
                $scope: scope1,
                $state: $state
            });
            expect($state.go).toHaveBeenCalledWith('home', {}, {reload: true});
        });
        $httpBackend.flush();
    });

});

