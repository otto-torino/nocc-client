/**
* @file surgeonCreateEditEditTherapeuticProposal.controller.js
* @namespace nocc.surgeon.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.surgeon.controllers')
        .controller('SurgeonCreateEditTherapeuticProposalCtrl', SurgeonCreateEditTherapeuticProposalCtrl);

    SurgeonCreateEditTherapeuticProposalCtrl.$inject = ['$rootScope', '$scope', '$state', '$modalInstance', 'dialogs', 'authenticationService', 'therapeuticProposalService', 'data', 'THERAPEUTIC_PROPOSAL_TYPES'];

    /**
     * @namespace SurgeonCreateEditTherapeuticProposalCtrl
     * @description Controller of the view with which the surgeon creates therapeutic proposals
     * @permissions isCaseSurgeon
     */
    function SurgeonCreateEditTherapeuticProposalCtrl($rootScope, $scope, $state, $modalInstance, dialogs, authenticationService, therapeuticProposalService, data, THERAPEUTIC_PROPOSAL_TYPES) {

        var action;
        var initial_sections = { oncologist: null, radiotherapist: null, surgeon: null };
        var parent_scope = data.scope;
        var tpn = data.tpn;
        $scope.tp_type = data.tp_type;
        // adding or editing?
        if(parent_scope.data[tpn]) {
            $scope.therapeuticProposal = angular.copy(parent_scope.data[tpn]);
            $scope.sections = {};
            parent_scope.data[tpn].sections.forEach(function(section) {
                if(section.section_type == 'surgeon') {
                    $scope.sections.therapeuticProposalSurgeon = angular.copy(section);
                    $scope.surgeonSection = true;
                    initial_sections.surgeon = section;
                }
                if(section.section_type == 'oncologist') {
                    $scope.sections.therapeuticProposalOncologist = angular.copy(section);
                    $scope.oncologistSection = true;
                    initial_sections.oncologist = section;
                }
                if(section.section_type == 'radiotherapist') {
                    $scope.sections.therapeuticProposalRadiotherapist = angular.copy(section);
                    $scope.radiotherapistSection = true;
                    initial_sections.radiotherapist = section;
                }
            });
            action = 'edit';
        }
        else {
            var priority = data.priority;
            var group_discussion = typeof data.group_discussion === 'undefined' ? false : true;
            $scope.therapeuticProposal = {};
            // this object stores the sections objects because ng-if will create a new child scope, so an object is needed
            $scope.sections = {};
            action = 'insert';
        }

        /** check permission */
        (function() {
            if(!authenticationService.isAuthenticated() || !authenticationService.getAuthenticatedUser().is_surgeon || !parent_scope.isCaseSurgeon()) {
                $state.go('home');
            }
        })();

        // stores errors reurned from the API after the create request
        $scope.errors = {};
        $scope.parent_scope = parent_scope;
        $scope.data = {};

        therapeuticProposalService.getGuidelines().then(function(response) {
            $scope.data.guidelines = response.data;
        }, function() {
            console.log('error'); // @TODO
        });

        $scope.addGuideline = function() {
            dialogs.create('surgeon/templates/add_guideline.tpl.html', 'SurgeonAddGuidelineCtrl', $scope, { copy: false });
        };

        // dismiss the modal without doing anything
        $scope.cancel = function() {
            $modalInstance.dismiss('canceled');
        };

        // save
        $scope.save = function() {
            // {Object} tp therapeutic proposal
            var complete = function(tp) {
                // if this is a group discussion therapeutic proposal then its saved as the accepted one
                parent_scope.data[tpn] = tp;
                $rootScope.$broadcast('update_notifications');
                $modalInstance.dismiss('canceled');
            };

            if(action == 'insert') {
                // add case id
                $scope.therapeuticProposal['case'] = parent_scope.model.caseObj.id;
                // add type
                $scope.therapeuticProposal.type = THERAPEUTIC_PROPOSAL_TYPES[$scope.tp_type];
                // priority
                $scope.therapeuticProposal.priority = priority;
                // group discussion
                $scope.therapeuticProposal.group_discussion = group_discussion;

                therapeuticProposalService.create(parent_scope.model.caseObj.id, $scope.therapeuticProposal).then(function(response) {
                    $scope.therapeuticProposal = response.data;
                    // setup sections counter and total. When counter reaches total sections are all saved
                    $scope.sections_cnt = 0;
                    $scope.sections_tot = 0;
                    [$scope.oncologistSection, $scope.radiotherapistSection, $scope.surgeonSection].forEach(function(c) {
                        if(c) {
                            $scope.sections_tot = $scope.sections_tot + 1;
                        }
                    });
                    // create sections
                    // oncologist
                    if($scope.oncologistSection) {
                        $scope.sections.therapeuticProposalOncologist.therapeutic_proposal = $scope.therapeuticProposal.id;
                        $scope.sections.therapeuticProposalOncologist.dispenser = parent_scope.model.caseObj.oncologist_contact_obj.id;
                        therapeuticProposalService.createSection(parent_scope.model.caseObj.id, $scope.therapeuticProposal.id, $scope.sections.therapeuticProposalOncologist).then(function(response) {
                            $scope.sections_cnt++;
                            if($scope.sections_cnt === $scope.sections_tot) {
                                complete(response.data);
                            }
                        }, function(response) {
                            if(response.status == 400) {
                                for(var p in response.data) {
                                    if(response.data.hasOwnProperty(p)) {
                                        $scope.errors['therapeuticProposalOncologist__' + p] = response.data[p];
                                    }
                                }
                            }
                            else {
                                console.log('error'); //@TODO error message
                            }
                        });
                    }
                    // radiotherapist
                    if($scope.radiotherapistSection) {
                        $scope.sections.therapeuticProposalRadiotherapist.therapeutic_proposal = $scope.therapeuticProposal.id;
                        $scope.sections.therapeuticProposalRadiotherapist.dispenser = parent_scope.model.caseObj.radiotherapist_contact_obj.id;
                        therapeuticProposalService.createSection(parent_scope.model.caseObj.id, $scope.therapeuticProposal.id, $scope.sections.therapeuticProposalRadiotherapist).then(function(response) {
                            $scope.sections_cnt++;
                            if($scope.sections_cnt === $scope.sections_tot) {
                                complete(response.data);
                            }
                        }, function(response) {
                            if(response.status == 400) {
                                for(var p in response.data) {
                                    if(response.data.hasOwnProperty(p)) {
                                        $scope.errors['therapeuticProposalRadiotherapist__' + p] = response.data[p];
                                    }
                                }
                            }
                            else {
                                console.log('error'); //@TODO error message
                            }
                        });
                    }
                    // surgeon
                    if($scope.surgeonSection) {
                        $scope.sections.therapeuticProposalSurgeon.therapeutic_proposal = $scope.therapeuticProposal.id;
                        $scope.sections.therapeuticProposalSurgeon.dispenser = parent_scope.model.caseObj.surgeon_contact_obj.id;
                        therapeuticProposalService.createSection(parent_scope.model.caseObj.id, $scope.therapeuticProposal.id, $scope.sections.therapeuticProposalSurgeon).then(function(response) {
                            $scope.sections_cnt++;
                            if($scope.sections_cnt === $scope.sections_tot) {
                                complete(response.data);
                            }
                        }, function(response) {
                            if(response.status == 400) {
                                for(var p in response.data) {
                                    if(response.data.hasOwnProperty(p)) {
                                        $scope.errors['therapeuticProposalSurgeon__' + p] = response.data[p];
                                    }
                                }
                            }
                            else {
                                console.log('error'); //@TODO error message
                            }
                        });
                    }
                }, function(response) {
                    if(response.status == 400) {
                        for(var p in response.data) {
                            if(response.data.hasOwnProperty(p)) {
                                $scope.errors['therapeuticProposal__' + p] = response.data[p];
                            }
                        }
                    }
                    else {
                        console.log('error'); //@TODO error message
                    }
                });
            }
            else if(action == 'edit') {
                therapeuticProposalService.update(parent_scope.model.caseObj.id, $scope.therapeuticProposal).then(function(response) {
                    $scope.therapeuticProposal = response.data;
                    var sections_tot = 0;
                    var sections_cnt = 0;
                    ['Oncologist', 'Radiotherapist', 'Surgeon'].forEach(function(st) {
                        var stl = st.toLowerCase();
                        if($scope[stl + 'Section']) {
                            sections_tot++;
                            // update
                            if(initial_sections[stl]) {
                                therapeuticProposalService.updateSection(parent_scope.model.caseObj.id, $scope.sections['therapeuticProposal' + st]).then(function(response) {
                                    sections_cnt++;
                                    if(sections_cnt === sections_tot) {
                                        complete(response.data);
                                    }
                                }, function(response) {
                                    if(response.status == 400) {
                                        for(var p in response.data) {
                                            if(response.data.hasOwnProperty(p)) {
                                                $scope.errors['therapeuticProposal' + st + '__' + p] = response.data[p];
                                            }
                                        }
                                    }
                                    else {
                                        console.log('error'); //@TODO error message
                                    }
                                });
                            }
                            // create
                            else {
                                $scope.sections['therapeuticProposal' + st].therapeutic_proposal = $scope.therapeuticProposal.id;
                                $scope.sections['therapeuticProposal' + st].dispenser = parent_scope.model.caseObj[stl + '_contact_obj'].id;
                                therapeuticProposalService.createSection(parent_scope.model.caseObj.id, $scope.therapeuticProposal.id, $scope.sections['therapeuticProposal' + st]).then(function(response) {
                                    sections_cnt++;
                                    if(sections_cnt === sections_tot) {
                                        complete(response.data);
                                    }
                                }, function(response) {
                                    if(response.status == 400) {
                                        for(var p in response.data) {
                                            if(response.data.hasOwnProperty(p)) {
                                                $scope.errors['therapeuticProposal' + st + '__' + p] = response.data[p];
                                            }
                                        }
                                    }
                                    else {
                                        console.log('error'); //@TODO error message
                                    }
                                });
                            }
                        }
                        // delete
                        else if(initial_sections[stl]) {
                            sections_tot++;
                            therapeuticProposalService.deleteSection(parent_scope.model.caseObj.id, initial_sections[stl]).then(function(response) {
                                sections_cnt++;
                                if(sections_cnt === sections_tot) {
                                    complete(response.data);
                                }
                            }, function(response) {
                                    console.log('error'); //@TODO error message
                            });
                        }
                    });

                }, function(response) {
                    if(response.status == 400) {
                        for(var p in response.data) {
                            if(response.data.hasOwnProperty(p)) {
                                $scope.errors['therapeuticProposal__' + p] = response.data[p];
                            }
                        }
                    }
                    else {
                        console.log('error'); //@TODO error message
                    }
                });
            }
        };


    }

})();
