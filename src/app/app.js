/**
 * @file app.js
 * @version 0.1.1
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the main app file, where the app is defined and so the global route fallback and the main app controller
 *              The main app controls the overall application behavior, while single functionalities are carried on by modules
 *              Modules are organized in directories at this fs level. Each module provides is own routes.
 */

/**
 * Shows some cnsole messages
 */
var DEBUG = true;
/**
 * Debug verbosity level
 */
var DEBUG_VERBOSITY = 5;

/**
 * @summary Uses or loads a module if not yet loaded
 * @description Splitting files inside modules folder is something I like,
 *              coming from a server-side scripting background I'm used to have single file classes.
 *              So I need a way to use or load a module because I don't know the order of js file inclusion.
 *              Instead of using this function sometimes I name the module file aaa_modulename.module.js and there
 *              I load all the module dependencies
 * @param {String} module
 * @param {Array} dep dependencies
 */
angular._useOrLoadModule = function(module, dep) {

    try {
        return angular.module(module);
    }
    catch(err) {
        return angular.module(module, dep);
    }

};

/**
 * @namespace
 * Debug object
 */
angular._debug = {
    /**
     * Logs in the console a message if the verbosity is minor than DEBUG_VERBOSITY
     * @param {String} text
     * @param {Number} verbosity
     */
    log: function(text, verbosity) {
        if(DEBUG && (typeof verbosity === 'undefined' || verbosity <= DEBUG_VERBOSITY)) {
            console.log(text);
        }
    }
};

angular.module( 'nocc', [
    'templates-app',
    'templates-common',
    'nocc.config',              // configuration module
    'nocc.routes',              // app routes
    'nocc.interceptors',        // app middlewares
    'nocc.controllers',         // app main controller
    'nocc.factory',             // factory sidebar
    'nocc.utils',               // utils module
    'nocc.layout',              // common layout module
    'nocc.authentication',      // authentication module
    'nocc.notification',        // notification module
    'nocc.profile',             // user profile module
    'nocc.surgeon',             // doctor module
    'nocc.doctor',              // doctor module
    'nocc.patient',             // patient module
    'nocc.observer',            // observer module
    'nocc.hospital',            // hospital module
    'nocc.case',                // case module
    'nocc.therapeuticProposal', // therapeutic proposal module
    'nocc.therapyCard',         // therapy card module
    'nocc.endTherapyCard',      // end therapy card module
    'nocc.examination',         // examination module
    'nocc.followup',            // followup module
    'nocc.home',                // home page module
    'pageslide-directive'       // sliding panel (notifications)
])


.config(['$compileProvider',
    function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    }]
)
.run(function() {  });
