(function () {
    'use strict';

    /**
     * @summary App Configuration module
     * @description Defines global constants and variables used throughout the application by modules
     */
    angular
        .module('nocc.config', [])
        .constant('API_BASE_URL', 'http://localhost:8000/nocc/api/v1');

})();
