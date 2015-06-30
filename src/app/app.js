/**
 * @file app.js
 * @author      abidibo <abidibo@gmail.com>
 * @description This is the main app file, where the app is defined and so the global route fallback and the main app controller
 *              The main app controls the overall application behavior, while single functionalities are carried on by modules
 *              Modules are organized in directories at this fs level. Each module provides is own routes.
 */

/**
 * @summary Uses or loads a module if not yet loaded
 * @description Splitting files inside modules folder is something I like,
 *              coming from a server-side scripting background I'm used to have single file classes.
 *              So I need a way to use or load a module because I don't know the order of js file inclusion.
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
    'nocc.doctor',              // doctor module
    'nocc.hospital',            // hospital module
    'nocc.case',                // case module
    'nocc.home',                // home page module
    'pageslide-directive'       // sliding panel (notifications)
])


.config(function() {  })
.run(function() {  });
