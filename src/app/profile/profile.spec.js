/**
 * @summary Profile Module's Tests
 */
describe( 'profile permissions: ', function() {

    var authenticationService, $rootScope, $state, $httpBackend, $window;

    beforeEach(function() {
        module('nocc');
        inject(function(_$rootScope_, _$state_, _$injector_, _$window_, _authenticationService_) {
            // remove locaStorage data from previous tests
            _authenticationService_.unauthenticate();
            $rootScope = _$rootScope_;
            $state = _$state_;
            $window = _$window_;
        });
    });

    describe('unauthenticated user: ', function() {
        it('user is redirected to the home page', function() {
            $state.go('profile');
            $rootScope.$digest();
            expect($state.current.name).toBe('home');
        });
    });
});
