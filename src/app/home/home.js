/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'nocc.home', [
    'ui.router',
    'nocc.authentication.services'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
    $stateProvider.state( 'home', {
        url: '/home',
        parent: 'loggedOut',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data:{ page_title: 'Home' }
    })
    /**
     * Every actor (surgeon, doctor, patient) has its own apphome state
     */
    .state( 'apphome', {
        url: '/app',
        parent: 'loggedIn',
        data:{ page_title: 'Home' }
    });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $state, authenticationService ) {
    // @todo activate function described. If user is authenticated then is redirected to app home page
    if(authenticationService.isAuthenticated()) {
        $state.go('apphome');
    }
})

;

