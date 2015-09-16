/**
* @file           app.spec.js
* @version        0.1.1
* @description    Main app unit tests
* @author         abidibo <abidibo@gmail.com>
*/

/**
 * Login function
 */
var login_surgeon = function(authenticationService, $httpBackend, scope, API_BASE_URL) {

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
    $httpBackend.when('POST', API_BASE_URL + "/auth/login/").respond(fake_user);
    authenticationService.login('lorierif', 'fabrizio');
    $httpBackend.flush();
    // $scope.auth is set by the NoccController on $stateChangeSuccess
    scope.auth = {isAuthenticated: authenticationService.isAuthenticated(), user: authenticationService.getAuthenticatedUser()};
};

describe( 'redirectActor: ', function() {

    var $state,
        $httpBackend,
        $rootScope,
        $controller,
        authenticationService,
        API_BASE_URL;

    beforeEach( function() {
        module('nocc');
        module('nocc.controllers');
        inject(function(_$state_, _$httpBackend_, _$rootScope_, _$controller_, _authenticationService_, _API_BASE_URL_) {
            $state = _$state_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            authenticationService = _authenticationService_;
            API_BASE_URL = _API_BASE_URL_;
        });
    } );

    /**
     * Let's test home redirection based upon actors
     */
    describe( 'home redirection: ', function() {

        /**
         * A surgeon is redirected to apphome.surgeon
         */
        describe('surgeon: ', function() {

            var scope1;

            // authenticate
            beforeEach(inject(function () {
                scope1 = $rootScope.$new();
                spyOn($state, 'go');
                login_surgeon(authenticationService, $httpBackend, {}, API_BASE_URL);
            }));

            /**
             * Login service should set proper cookies when user successfully logs in
             */
            it( 'apphome is redirected to apphome.surgeon', inject( function() {
                $state.go('apphome');
                expect($state.go).toHaveBeenCalledWith('apphome');
                $state.go.reset();

                var NoccController = $controller('NoccController', {
                    $scope: scope1,
                    $state: $state,
                    authenticationService: authenticationService,
                    MEDIA_BASE_URL: ''
                });

                // when changing state a middleware checks if an actor specific state exists
                $rootScope.$broadcast('$stateChangeSuccess', { name: 'apphome', data: {} });
                expect($state.go).toHaveBeenCalledWith('apphome.surgeon');
            }));
        });

    });

});

