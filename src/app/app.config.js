(function () {
    'use strict';

    var statusDict = {
        open: 1
    };

    var associationDict = {
        to_be_accepted: 0,
        accepted: 1,
        refused: 2
    };

    var examinationTypeDict = [
        {id: 1, label: 'Endoscopia'},
        {id: 2, label: 'TC'},
        {id: 3, label: 'PET-TC'},
        {id: 4, label: 'esame istologico'},
        {id: 5, label: 'comorbilità'},
        {id: 6, label: 'anamnesi, note'}
    ];

    /**
     * @summary App Configuration module
     * @description Defines global constants and variables used throughout the application by modules
     */
    angular
        .module('nocc.config', [])
        .constant('API_BASE_URL', 'http://localhost:8000/nocc/api/v1')
        .constant('MEDIA_BASE_URL', 'http://localhost:8000')
        .constant('STATUS', statusDict)
        .constant('ASSOCIATION_STATUS', associationDict)
        .constant('EXAMINATION_TYPES', examinationTypeDict);



})();
