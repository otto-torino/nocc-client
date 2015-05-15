/**
 * @summary Authentication Module's Tests
 */
describe( 'authentication login and logout', function() {
    var authenticationService, httpBackend, fake_data;

    beforeEach( module( 'nocc.authentication' ) );
    beforeEach( module( 'ngCookies' ) );

    beforeEach(inject(function (_authenticationService_, $cookies, $httpBackend) {
        authenticationService = _authenticationService_;
        httpBackend = $httpBackend;
        cookies = $cookies;
        fake_data = {
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
        };
        httpBackend.when('POST', "http://localhost:8000/nocc/api/v1/auth/login/").respond(fake_data);
        httpBackend.when('POST', "http://localhost:8000/nocc/api/v1/auth/logout/").respond({});
    }));

    /**
     * Login service should set proper cookies when user successfully logs in
     */
    it( 'checking login service', inject( function() {
        authenticationService.login('lorierif', 'fabrizio').then(function() {
            expect(cookies.authenticatedUser).toEqual(JSON.stringify(fake_data));
            // isAuthenticated function of authenticationService returns true
            expect(authenticationService.isAuthenticated()).toBeTruthy();
        });
        httpBackend.flush();
    }));

    /**
     * Logout service should delete authentication cookie when user logs out
     */
    it( 'checking logout service', inject( function() {
        authenticationService.logout().then(function() {
            expect(cookies.authenticatedUser).toEqual(undefined);
        });
        httpBackend.flush();
    }));

});

