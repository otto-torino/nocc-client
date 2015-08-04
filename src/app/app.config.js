(function () {
    'use strict';

    var statusDict = {
        open: 1,
        doctor_association: 2,
        proposals: 3,
        proposal_accepted: 4,
        started: 5,
        completed: 6,
        revaluation: 7,
        revaluation_proposal: 8,
        revaluation_proposal_accepted: 9,
        revaluation_started: 10,
        revaluation_ended: 11,
        adjuvant: 12,
        adjuvant_proposal: 13,
        adjuvant_proposal_accepted: 14,
        adjuvant_started: 15,
        adjuvant_ended: 16,
        ended: 17,
        final_fu_ended: 18,
        relapse: 19,
        closed: 20
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

    var therapeuticProposalTypeDict = {
        initial: 1,
        revaluation: 2,
        adjuvant: 3
    };

    var therapeuticProposalStatusDict = {
        waiting: 1,
        accepted: 2,
        refused: 3
    };

    var fuStatusDict = {
        to_be_accepted: 0,
        accepted: 1,
        refused: 2,
        finalized: 3
    };

    var fuTypeDict = {
        initial: 1,
        adjuvant: 2,
        final: 3
    };

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
        .constant('EXAMINATION_TYPES', examinationTypeDict)
        .constant('THERAPEUTIC_PROPOSAL_TYPES', therapeuticProposalTypeDict)
        .constant('THERAPEUTIC_PROPOSAL_STATUS', therapeuticProposalStatusDict)
        .constant('FU_STATUS_DICT', fuStatusDict)
        .constant('FU_TYPE_DICT', fuTypeDict);



})();
