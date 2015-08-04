/**
* @file therapeuticProposal.service.js
* @namespace nocc.therapeuticProposal.services
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        ._useOrLoadModule('nocc.therapeuticProposal.services', ['nocc.config', 'ngFileUpload'])
        .factory('therapeuticProposalService', therapeuticProposalService);

    therapeuticProposalService.$inject = ['$http', 'Upload', 'API_BASE_URL', 'ASSOCIATION_STATUS', 'THERAPEUTIC_PROPOSAL_STATUS'];

    /**
    * @namespace   therapeuticProposalService
    * @description Provides methods to fetch and update therapeutic proposal's data
    * @returns {Factory}
    */
    function therapeuticProposalService($http, Upload, API_BASE_URL, ASSOCIATION_STATUS, THERAPEUTIC_PROPOSAL_STATUS) {
        /**
        * @summary Doctor Service Object
        * @description The Factory to be returned
        */
        var service = {
            list: list,
            create: create,
            update: update,
            createSection: createSection,
            updateSection: updateSection,
            deleteSection: deleteSection,
            getGuidelines: getGuidelines,
            addGuideline: addGuideline,
            vote: vote,
            accepted:accepted,
            pollingComplete: pollingComplete,
            pollingCompleteDoctor: pollingCompleteDoctor,
            setAccepted: setAccepted,
            getInitialTherapeuticProposal: getInitialTherapeuticProposal,
            getRevaluationTherapeuticProposal: getRevaluationTherapeuticProposal,
            getAdjuvantTherapeuticProposal: getAdjuvantTherapeuticProposal

        };

        return service;

        /////////////////////

        /**
        * @summary Retrieves case's therapeutic proposals objects
        * @param {Number} case_id
        * @param {Number} type
        * @returns {Promise}
        * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
        */
        function list(case_id, type) {
            if(typeof type !== 'undefined') {
                return $http.get(API_BASE_URL + '/cases/' + case_id + '/therapeutic-proposals/?type=' + type);
            }
            return $http.get(API_BASE_URL + '/cases/' + case_id + '/therapeutic-proposals/');
        }
        /**
         * @summary Creates a therapeutic proposal
         * @param {Number} case_id
         * @param {Object} therapeuticProposal
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function create(case_id, therapeuticProposal) {
            return $http.post(API_BASE_URL + '/cases/' + case_id +'/therapeutic-proposals/', therapeuticProposal);
        }

        /**
         * @summary Updates a therapeutic proposal
         * @param {Number} case_id
         * @param {Object} therapeuticProposal
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function update(case_id, therapeuticProposal) {
            return $http.put(API_BASE_URL + '/cases/' + case_id +'/therapeutic-proposals/' + therapeuticProposal.id + '/', therapeuticProposal);
        }

        /**
         * @summary Creates a therapeutic proposal section
         * @param {Number} case_id
         * @param {Number} therapeutic_proposal_id
         * @param {Object} therapeuticProposalSection
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function createSection(case_id, therapeutic_proposal_id, therapeuticProposalSection) {
            return $http.post(API_BASE_URL + '/cases/' + case_id +'/therapeutic-proposals/' + therapeutic_proposal_id + '/add-section/', therapeuticProposalSection);
        }

        /**
         * @summary Updates a therapeutic proposal section
         * @param {Number} case_id
         * @param {Object} therapeuticProposalSection
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function updateSection(case_id, therapeuticProposalSection) {
            return $http.put(API_BASE_URL + '/cases/' + case_id +'/therapeutic-proposals/' + therapeuticProposalSection.therapeutic_proposal + '/update-section/?section_id=' + therapeuticProposalSection.id, therapeuticProposalSection);
        }

        /**
         * @summary Deletes a therapeutic proposal section
         * @param {Number} case_id
         * @param {Object} therapeuticProposalSection
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function deleteSection(case_id, therapeuticProposalSection) {
            return $http['delete'](API_BASE_URL + '/cases/' + case_id +'/therapeutic-proposals/' + therapeuticProposalSection.therapeutic_proposal + '/delete-section/?section_id=' + therapeuticProposalSection.id);
        }

        /**
         * @summary Retrieves all guidelines
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function getGuidelines() {
            return $http.get(API_BASE_URL + '/guidelines/');
        }

        /**
         * @summary Adds a guideline
         * @param {Object} guideline
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function addGuideline(guideline) {
            return Upload.upload({
                url: API_BASE_URL + '/guidelines/',
                method: 'POST',
                file: guideline.file,
                fields: { title: guideline.title },
                fileFormDataName: 'file'
            });
        }

        /**
         * @summary Votes a therapeutic proposal
         * @param {Number} case_id
         * @param {Number} tp_id
         * @param {Boolean} v vote
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function vote(case_id, tp_id, v) {
            var obj = {
                therapeutic_proposal: tp_id,
                vote: v
            };
            return $http.post(API_BASE_URL + '/cases/' + case_id +'/therapeutic-proposals/' + tp_id + '/polling/', obj);
        }

        /**
         * @summary Sets the accepted therapeutic proposal
         * @param {Number} case_id
         * @param {Number} tp_id
         * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function setAccepted(case_id, tp_id) {
            return $http.patch(API_BASE_URL + '/cases/' + case_id +'/therapeutic-proposals/' + tp_id + '/', { status: THERAPEUTIC_PROPOSAL_STATUS.accepted });
        }

        /**
         * Retrieves the accepted therapeutic proposal if any, otherwise null
         * @param {Array} tps array of therapeutic proposal objects
         * @return {Object} therapeutic proposal object or null
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function accepted(tps) {
            if(!pollingComplete(tps)) {
                return null;
            }
            var accepted_tp = null;
            for (var i = 0, len = tps.length; i < len; i++) {
                var tp = tps[i];

                // a group discussion therapeutic proposal is always the accepted one
                if(tp.group_discussion) {
                    accepted_tp = tp;
                    break;
                }

                var tp_votes_cnt = 0;

                /* jshint loopfunc:true */
                tp.votes_obj.forEach(function(poll) {
                    if(poll.vote) {
                        tp_votes_cnt++;
                    }
                });
                if(tp_votes_cnt === 2) {
                    accepted_tp = accepted_tp === null ? tp : (accepted_tp.priority < tp.priority ? accepted_tp : tp);
                }
            }
            return accepted_tp;
        }

        /**
         * Checks that polling was completed for the given therapeutic proposals
         * @TODO check for other new fields (followup, revaluation)
         * @param {Array} tps array of therapeutic proposal objects
         * @return {Boolean}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function pollingComplete(tps) {
            var complete = 0;
            var total = tps.length;
            for (var i = 0, len = tps.length; i < len; i++) {
                var tp = tps[i];
                if(tp.group_discussion) {
                    total--;
                }
                if(!tp.group_discussion && tp.votes_obj.length == 2) {
                    complete++;
                }
            }
            return complete == total;
        }

        /**
         * Checks that polling was completed by the given user for the given therapeutic proposals
         * @param {Array} tps array of therapeutic proposal objects
         * @param {Number} user_id
         * @return {Boolean}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
         */
        function pollingCompleteDoctor(tps, user_id) {
            var complete = 0;
            var total = tps.length;
            for (var i = 0, len = tps.length; i < len; i++) {
                var tp = tps[i];
                if(tp.group_discussion) {
                    total--;
                }
                else {
                    for (var ii = 0, len2 = tp.votes_obj.length; ii < len2; ii++) {
                        var poll = tp.votes_obj[ii];
                        if(poll.doctor_contact.doctor.user.id == user_id) {
                            complete++;
                        }
                    }
                }
            }
            return complete == total;
        }

        /**
        * @summary Retrieves the accepted initial therapeutic proposal
        * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
        */
        function getInitialTherapeuticProposal(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/therapeutic-proposals/get-initial-accepted/');
        }

        /**
        * @summary Retrieves the accepted revaluation therapeutic proposal
        * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
        */
        function getRevaluationTherapeuticProposal(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/therapeutic-proposals/get-revaluation-accepted/');
        }

        /**
        * @summary Retrieves the accepted adjuvant therapeutic proposal
        * @returns {Promise}
         * @memberOf nocc.therapeuticProposal.services.therapeuticProposalService
        */
        function getAdjuvantTherapeuticProposal(caseobj) {
            return $http.get(API_BASE_URL + '/cases/' + caseobj.id +'/therapeutic-proposals/get-adjuvant-accepted/');
        }

    }
})();
