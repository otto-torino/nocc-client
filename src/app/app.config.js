/**
* @file           app.config.js
* @version        0.1.1
* @author         abidibo <abidibo@gmail.com>
* @description    Definition of application dictionaries and constants
*/
(function () {
    'use strict';

    /**
     * Case status dictionary
     */
    var statusDict = {
        open: 1,
        doctor_association: 2,
        proposals: 3,
        proposal_accepted: 4,
        therapy_card: 5,
        started: 6,
        completed: 7,
        revaluation: 8,
        revaluation_proposal: 9,
        revaluation_proposal_accepted: 10,
        revaluation_therapy_card: 11,
        revaluation_started: 12,
        revaluation_ended: 13,
        adjuvant: 14,
        adjuvant_proposal: 15,
        adjuvant_proposal_accepted: 16,
        adjuvant_therapy_card: 17,
        adjuvant_started: 18,
        adjuvant_ended: 19,
        ended: 20,
        final_fu_ended: 21,
        relapse: 22,
        closed: 23
    };

    /**
     * Case status key dictionary
     * I now this can be redundant considering the above dict.
     * But I need to retrieve the status name from its id and I don't
     * want to create a loop function to do this because it will be called
     * on every request
     */
    var statusKeyDict = {
        1: 'open',
        2: 'doctor_association',
        3: 'proposals',
        4: 'proposal_accepted',
        5: 'therapy_card',
        6: 'started',
        7: 'completed',
        8: 'revaluation',
        9: 'revaluation_proposal',
        10: 'revaluation_proposal_accepted',
        11: 'revaluation_therapy_card',
        12: 'revaluation_started',
        13: 'revaluation_ended',
        14: 'adjuvant',
        15: 'adjuvant_proposal',
        16: 'adjuvant_proposal_accepted',
        17: 'adjuvant_therapy_card',
        18: 'adjuvant_started',
        19: 'adjuvant_ended',
        20: 'ended',
        21: 'final_fu_ended',
        22: 'relapse',
        23: 'closed'
    };

    /**
     * Doctor case association dictionary
     */
    var associationDict = {
        to_be_accepted: 0,
        accepted: 1,
        refused: 2
    };

    /**
     * Medical examination type dictionary
     */
    var examinationTypeDict = [
        {id: 1, label: 'Endoscopia'},
        {id: 2, label: 'TC'},
        {id: 3, label: 'PET-TC'},
        {id: 4, label: 'esame istologico'},
        {id: 5, label: 'comorbilità'},
        {id: 6, label: 'anamnesi, note'}
    ];

    /**
     * Therapeutic proposal type dictionary
     */
    var therapeuticProposalTypeDict = {
        initial: 1,
        revaluation: 2,
        adjuvant: 3
    };

    /**
     * Therapeutic proposal status dictionary
     */
    var therapeuticProposalStatusDict = {
        waiting: 1,
        accepted: 2,
        refused: 3
    };

    /**
     * Therapy card type dictionary
     */
    var therapyCardTypeDict = {
        initial: 1,
        revaluation: 2,
        adjuvant: 3
    };

    /**
     * Follow Up status dictionary
     */
    var fuStatusDict = {
        to_be_accepted: 0,
        accepted: 1,
        refused: 2,
        finalized: 3
    };

    /**
     * Follow Up type dictionary
     */
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
        //.constant('API_BASE_URL', 'http://nocc.otto.to.it/nocc/api/v1')
        //.constant('MEDIA_BASE_URL', 'http://nocc.otto.to.it')
        .constant('STATUS', statusDict)
        .constant('STATUS_KEY', statusKeyDict)
        .constant('ASSOCIATION_STATUS', associationDict)
        .constant('EXAMINATION_TYPES', examinationTypeDict)
        .constant('THERAPEUTIC_PROPOSAL_TYPES', therapeuticProposalTypeDict)
        .constant('THERAPEUTIC_PROPOSAL_STATUS', therapeuticProposalStatusDict)
        .constant('THERAPY_CARD_TYPES', therapyCardTypeDict)
        .constant('FU_STATUS_DICT', fuStatusDict)
        .constant('FU_TYPE_DICT', fuTypeDict);



})();
