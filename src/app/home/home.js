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
    .state( 'apphome', {
        url: '/app',
        parent: 'loggedIn',
        views: {
            "main": {
                controller: 'AppHomeCtrl',
                templateUrl: 'home/apphome.tpl.html'
            },
            // ritorna un'istanza della classe actor adeguata all'utente loggato
            // actor = new FactoryActor();
            // current_state = myservice.getStateFromAPI();
            // Switch.execute(actor, current_state);
            "sidebar": {
                controllerProvider: ['NoccControllerFactory', function(NoccControllerFactory) { return NoccControllerFactory.sidebar; }],
                //controllerProvider: ['authenticationService', function(authenticationService) { console.log('DIO'); }],
                templateUrl: 'layout/templates/sidebar.tpl.html'
            }
        },
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
.controller( 'AppHomeCtrl', function AppHomeController( $state, authenticationService ) {
    // @todo activate function described. If user is authenticated then is redirected to app home page
})


;

