/**
* @file notification.controller.js
* @namespace nocc.notification.controllers
* @author    abidibo <abidibo@gmail.com>
*/
(function () {
    'use strict';

    angular
        .module('nocc.notification.controllers', ['nocc.authentication', 'nocc.case'])
        .controller('NotificationCtrl', NotificationCtrl);

    NotificationCtrl.$inject = ['$scope', '$state', '$injector', 'authenticationService', 'caseService', 'STATUS_KEY'];

    var user;
    var ASSOCIATION_STATUS_DICT;

    /**
     * Notification controller
     */
    function NotificationCtrl($scope, $state, $injector, authenticationService, caseService, STATUS_KEY) {

        var messages = [];
        user = authenticationService.getAuthenticatedUser();

        $scope.$on('update_notifications', function() {
            messages = [];
            updateNotifications(messages, $scope, $injector, authenticationService, caseService, STATUS_KEY);
            $scope.messages = messages;
        });

        $scope.$on('update_messages', function() {
            $scope.layout.notifications = messages.length;
        });

        $scope.$emit('update_notifications');

        $scope.checkGoTo = function(message) {
            if(message.state) {
                $state.go(message.state.name, message.state.params);
            }
        };

        $scope.messages = messages;

    }

    function updateNotifications(messages, $scope, $injector, authenticationService, caseService, STATUS_KEY) {
        var user = authenticationService.getAuthenticatedUser();
        if(user && user.is_surgeon) {
           caseService.listAsSurgeon().then(function(response) {
                var surgeon_cases = response.data;
                for (var i = 0, len = surgeon_cases.length; i < len; i++) {
                    var caseobj = surgeon_cases[i];
                    SurgeonNotifications.get($scope, $injector, caseobj, messages, STATUS_KEY);
                }
                $scope.$emit('update_messages');
            });
        }
        if(user && user.is_doctor) {
           caseService.listAsDoctor().then(function(response) {
                var doctor_cases = response.data;
                for (var i = 0, len = doctor_cases.length; i < len; i++) {
                    var caseobj = doctor_cases[i];
                    DoctorNotifications.get($scope, $injector, caseobj, messages, STATUS_KEY);
                }
                $scope.$emit('update_messages');
            });
        }
        if(user && user.is_patient) {
           caseService.listAsPatient().then(function(response) {
                var patient_cases = response.data;
                for (var i = 0, len = patient_cases.length; i < len; i++) {
                    var caseobj = patient_cases[i];
                    PatientNotifications.get($scope, $injector, caseobj, messages, STATUS_KEY);
                }
                $scope.$emit('update_messages');
            });
        }

        $scope.$emit('update_messages');

    }

    var SurgeonNotifications = {
        get: function($scope, $injector, caseobj, messages, STATUS_KEY) {
            if(typeof this['status_' + STATUS_KEY[caseobj.status]] !== 'undefined') {
                return this['status_' + STATUS_KEY[caseobj.status]]($scope, $injector, caseobj, messages);
            }
        },
        status_open: function($scope, $injector, caseobj, messages) {
            var ASSOCIATION_STATUS = $injector.get('ASSOCIATION_STATUS');
            if(caseobj.oncologist_status === null) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                    'text': 'associare oncologo',
                    'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                });
            }
            else if(caseobj.oncologist_status === ASSOCIATION_STATUS.refused) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                    'text': 'l\'oncologo scelto ha rifiutato, associarne un altro',
                    'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                });
            }
            else if(caseobj.radiotherapist_status === ASSOCIATION_STATUS.refused) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                    'text': 'Il radioterapista scelto ha rifiutato, associarne un altro',
                    'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                });
            }
            if(caseobj.radiotherapist_status === null) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                    'text': 'associare radioterapista',
                    'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                });
            }
        },
        status_doctor_association: function($scope, $injector, caseobj, messages) {
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
                if(response.data.length < 2) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'inserire le proposte terapeutiche',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                else {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'sottoporre le proposte terapeutiche a votazione',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });
        },
        status_proposals: function($scope, $injector, caseobj, messages) {

            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'programmare incontro per definire proposta terapeutica'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'una proposta terapeutica è stata accettata',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');

            }, function(response) {
                console.log('error');
            });
        },
        status_proposal_accepted: function($scope, $injector, caseobj, messages) {
            var therapyCardService = $injector.get('therapyCardService');
            therapyCardService.getInitial(caseobj).then(function(response) {
                var tc = response.data;
                var written = 0;
                var total = tc.sections.length;
                tc.sections.forEach(function(section) {
                    if(section.dispenser == caseobj.surgeon_contact_obj.id && caseobj.surgeon_contact_obj.doctor.user.id == user.id) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda terapeutica',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        else {
                            written++;
                        }
                    }
                    else {
                        if(section.text) {
                            written++;
                        }
                    }
                });
                if(written == total) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': tc.date ? 'pubblicare scheda terapeutica' : 'inserire data scheda terapeutica',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });
        },
        status_therapy_card: function($scope, $injector, caseobj, messages) {
            messages.push({
                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                'text': 'avviare terapia',
                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
            });
        },
        status_started: function($scope, $injector, caseobj, messages) {
            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.initial).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.to_be_accepted) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                            'text': 'valutare richiesta Follow Up',
                            'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                        });
                    }
                });
                $scope.$emit('update_messages');
            });

            var endTherapyCardService = $injector.get('endTherapyCardService');
            endTherapyCardService.getInitial(caseobj).then(function(response) {
                var etc = response.data;
                var completed = 0;
                var total = etc.sections.length;
                etc.sections.forEach(function(section) {
                    if(section.dispenser == caseobj.surgeon_contact_obj.id && caseobj.surgeon_contact_obj.doctor.user.id == user.id) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda di fine trattamento',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        if(section.text && !section.completed) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare la terapia',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        else if(section.completed) {
                            completed++;
                        }
                    }
                    else {
                        if(section.completed) {
                            completed++;
                        }
                    }
                });
                if(completed == total) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': etc.date ? 'pubblicare scheda fine trattamento' : 'inserire data scheda fine trattamento',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });

        },
        status_revaluation: function($scope, $injector, caseobj, messages) {
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
                if(!response.data.length) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'inserire la proposta terapeutica di rivalutazione',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });
        },
        status_revaluation_proposal: function($scope, $injector, caseobj, messages) {

            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'programmare incontro per definire proposta terapeutica di rivalutazione'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'la proposta terapeutica di rivalutazione è stata accettata'
                    });
                }
                $scope.$emit('update_messages');

            }, function(response) {
                console.log('error');
            });
        },
        status_revaluation_proposal_accepted: function($scope, $injector, caseobj, messages) {

            var therapyCardService = $injector.get('therapyCardService');
            therapyCardService.getRevaluation(caseobj).then(function(response) {
                var tc = response.data;
                var written = 0;
                var total = tc.sections.length;
                tc.sections.forEach(function(section) {
                    if(section.dispenser == caseobj.surgeon_contact_obj.id && caseobj.surgeon_contact_obj.doctor.user.id == user.id) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda terapeutica rivalutazione',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        else {
                            written++;
                        }
                    }
                    else {
                        if(section.text) {
                            written++;
                        }
                    }
                });
                if(written == total) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': tc.date ? 'pubblicare scheda terapeutica rivalutazione' : 'inserire data scheda terapeutica rivalutazione',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });

        },
        status_revaluation_therapy_card: function($scope, $injector, caseobj, messages) {

            messages.push({
                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                'text': 'avviare rivalutazione',
                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
            });

        },
        status_revaluation_started: function($scope, $injector, caseobj, messages) {
            var endTherapyCardService = $injector.get('endTherapyCardService');
            endTherapyCardService.getRevaluation(caseobj).then(function(response) {
                var etc = response.data;
                var completed = 0;
                var total = etc.sections.length;
                etc.sections.forEach(function(section) {
                    if(section.dispenser == caseobj.surgeon_contact_obj.id && caseobj.surgeon_contact_obj.doctor.user.id == user.id) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda di fine trattamento rivalutazione',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        if(section.text && !section.completed) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare la terapia di rivalutazione',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        else if(section.completed) {
                            completed++;
                        }
                    }
                    else {
                        if(section.completed) {
                            completed++;
                        }
                    }
                });
                if(completed == total) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': etc.date ? 'pubblicare scheda fine trattamento rivalutazione' : 'inserire data scheda fine trattamento rivalutazione',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });
        },
        status_adjuvant: function($scope, $injector, caseobj, messages) {
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
                if(!response.data.length) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'inserire la proposta terapeutica adiuvante',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });
        },
        status_adjuvant_proposal: function($scope, $injector, caseobj, messages) {

            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'programmare incontro per definire proposta terapeutica di terapia adiuvante'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'la proposta terapeutica di terapia adiuvante è stata accettata'
                    });
                }
                $scope.$emit('update_messages');

            }, function(response) {
                console.log('error');
            });
        },
        status_adjuvant_proposal_accepted: function($scope, $injector, caseobj, messages) {
            var therapyCardService = $injector.get('therapyCardService');
            therapyCardService.getAdjuvant(caseobj).then(function(response) {
                var tc = response.data;
                var written = 0;
                var total = tc.sections.length;
                tc.sections.forEach(function(section) {
                    if(section.dispenser == caseobj.surgeon_contact_obj.id && caseobj.surgeon_contact_obj.doctor.user.id == user.id) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda terapeutica terapia adiuvante',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        else {
                            written++;
                        }
                    }
                    else {
                        if(section.text) {
                            written++;
                        }
                    }
                });
                if(written == total) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': tc.date ? 'pubblicare scheda terapeutica terapia adiuvante' : 'inserire data scheda terapeutica terapia adiuvante',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });

        },
        status_adjuvant_therapy_card: function($scope, $injector, caseobj, messages) {

            messages.push({
                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                'text': 'avviare terapia adiuvante',
                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
            });

        },
        status_adjuvant_started: function($scope, $injector, caseobj, messages) {

            var endTherapyCardService = $injector.get('endTherapyCardService');
            endTherapyCardService.getAdjuvant(caseobj).then(function(response) {
                var etc = response.data;
                var completed = 0;
                var total = etc.sections.length;
                etc.sections.forEach(function(section) {
                    if(section.dispenser == caseobj.surgeon_contact_obj.id && caseobj.surgeon_contact_obj.doctor.user.id == user.id) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda di fine trattamento terapia adiuvante',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        if(section.text && !section.completed) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare la terapia adiuvante',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                        else if(section.completed) {
                            completed++;
                        }
                    }
                    else {
                        if(section.completed) {
                            completed++;
                        }
                    }
                });
                if(completed == total) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': etc.date ? 'pubblicare scheda fine trattamento terapia adiuvante' : 'inserire data scheda fine trattamento terapia adiuvante',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });


            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.adjuvant).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.to_be_accepted) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                            'text': 'valutare richiesta Follow Up',
                            'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                        });
                    }
                });
                $scope.$emit('update_messages');
            });
        },
        status_ended: function($scope, $injector, caseobj, messages) {
            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.final).then(function(response) {
                if(response.data.length) {
                    response.data.forEach(function(fu) {
                        if(fu.status !== FU_STATUS_DICT.finalized) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'visita conclusiva',
                                'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                            });
                        }
                    });
                }
                else {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'visita conclusiva',
                        'state': { name: 'case.detail.surgeon.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            });
        }

    };

    var DoctorNotifications = {
        get: function($scope, $injector, caseobj, messages, STATUS_KEY) {
            if(typeof this['status_' + STATUS_KEY[caseobj.status]] !== 'undefined') {
                return this['status_' + STATUS_KEY[caseobj.status]]($scope, $injector, caseobj, messages);
            }
        },
        status_open: function($scope, $injector, caseobj, messages) {

            var ASSOCIATION_STATUS = $injector.get('ASSOCIATION_STATUS');

            if(caseobj.oncologist_contact_obj.doctor.user.id === user.id && caseobj.oncologist_status === ASSOCIATION_STATUS.to_be_accepted) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                    'text': 'accettare/rifiutare associazione',
                    'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                });
            }
            if(caseobj.radiotherapist_contact_obj.doctor.user.id === user.id && caseobj.radiotherapist_status === ASSOCIATION_STATUS.to_be_accepted) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                    'text': 'accettare/rifiutare associazione',
                    'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                });
            }
            $scope.$emit('update_messages');
        },
        status_proposals: function($scope, $injector, caseobj, messages) {

            var authenticationService = $injector.get('authenticationService');
            var user = authenticationService.getAuthenticatedUser();
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
                if(!therapeuticProposalService.pollingCompleteDoctor(response.data, user.id)) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'votare proposte terapeutiche',
                        'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                    });
                }
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'programmare incontro per definire proposta terapeutica'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'una proposta terapeutica è stata accettata',
                        'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            }, function(response) {
                console.log('error');
            });
        },
        status_proposal_accepted: function($scope, $injector, caseobj, messages) {
            var therapyCardService = $injector.get('therapyCardService');
            therapyCardService.getInitial(caseobj).then(function(response) {
                var tc = response.data;
                tc.sections.forEach(function(section) {
                    if( (section.dispenser == caseobj.oncologist_contact_obj.id && caseobj.oncologist_contact_obj.doctor.user.id == user.id) || (section.dispenser == caseobj.radiotherapist_contact_obj.id && caseobj.radiotherapist_contact_obj.doctor.user.id == user.id)) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda terapeutica',
                                'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                            });
                        }
                    }
                    $scope.$emit('update_messages');
                });
            });
        },
        status_started: function($scope, $injector, caseobj, messages) {
            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.initial).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.refused && fu.doctor_contact.doctor.user.id == user.id) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                            'text': 'Follow Up rifiutato, selezionare nuova data',
                            'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                        });
                    }
                });
            });

            var endTherapyCardService = $injector.get('endTherapyCardService');
            endTherapyCardService.getInitial(caseobj).then(function(response) {
                var etc = response.data;
                etc.sections.forEach(function(section) {
                    if((section.dispenser == caseobj.oncologist_contact_obj.id && caseobj.oncologist_contact_obj.doctor.user.id == user.id) || (section.dispenser == caseobj.radiotherapist_contact_obj.id && caseobj.radiotherapist_contact_obj.doctor.user.id == user.id)) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda di fine trattamento',
                                'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                            });
                        }
                        if(section.text && !section.completed) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare la terapia',
                                'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                            });
                        }
                    }
                });
                $scope.$emit('update_messages');
            });

        },
        status_revaluation_proposal: function($scope, $injector, caseobj, messages) {

            var authenticationService = $injector.get('authenticationService');
            var user = authenticationService.getAuthenticatedUser();
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
                if(!therapeuticProposalService.pollingCompleteDoctor(response.data, user.id)) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'votare proposta terapeutica di rivalutazione',
                        'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                    });
                }
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'programmare incontro per definire proposta terapeutica di rivalutazione'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'la proposta terapeutica di rivalutazione è stata accettata',
                        'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            }, function(response) {
                console.log('error');
            });
        },
        status_revaluation_started: function($scope, $injector, caseobj, messages) {

            var endTherapyCardService = $injector.get('endTherapyCardService');
            endTherapyCardService.getRevaluation(caseobj).then(function(response) {
                var etc = response.data;
                etc.sections.forEach(function(section) {
                    if((section.dispenser == caseobj.oncologist_contact_obj.id && caseobj.oncologist_contact_obj.doctor.user.id == user.id) || (section.dispenser == caseobj.radiotherapist_contact_obj.id && caseobj.radiotherapist_contact_obj.doctor.user.id == user.id)) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda di fine trattamento rivalutazione',
                                'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                            });
                        }
                        if(section.text && !section.completed) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare la terapia di rivalutazione',
                                'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                            });
                        }
                    }
                });
                $scope.$emit('update_messages');
            });


        },
        status_adjuvant_proposal: function($scope, $injector, caseobj, messages) {

            var authenticationService = $injector.get('authenticationService');
            var user = authenticationService.getAuthenticatedUser();
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
                if(!therapeuticProposalService.pollingCompleteDoctor(response.data, user.id)) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'votare proposta terapeutica di terapia adiuvante',
                        'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                    });
                }
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'programmare incontro per definire proposta terapeutica di terapia adiuvante'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                        'text': 'la proposta terapeutica di terapia adiuvante è stata accettata',
                        'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                    });
                }
                $scope.$emit('update_messages');
            }, function(response) {
                console.log('error');
            });
        },
        status_adjuvant_proposal_accepted: function($scope, $injector, caseobj, messages) {
            var therapyCardService = $injector.get('therapyCardService');
            therapyCardService.getAdjuvant(caseobj).then(function(response) {
                var tc = response.data;
                tc.sections.forEach(function(section) {
                    if( (section.dispenser == caseobj.oncologist_contact_obj.id && caseobj.oncologist_contact_obj.doctor.user.id == user.id) || (section.dispenser == caseobj.radiotherapist_contact_obj.id && caseobj.radiotherapist_contact_obj.doctor.user.id == user.id)) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda terapeutica terapia adiuvante',
                                'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                            });
                        }
                    }
                    $scope.$emit('update_messages');
                });
            });
        },
        status_adjuvant_started: function($scope, $injector, caseobj, messages) {

            var endTherapyCardService = $injector.get('endTherapyCardService');
            endTherapyCardService.getAdjuvant(caseobj).then(function(response) {
                var etc = response.data;
                etc.sections.forEach(function(section) {
                    if((section.dispenser == caseobj.oncologist_contact_obj.id && caseobj.oncologist_contact_obj.doctor.user.id == user.id) || (section.dispenser == caseobj.radiotherapist_contact_obj.id && caseobj.radiotherapist_contact_obj.doctor.user.id == user.id)) {
                        if(!section.text) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare scheda di fine trattamento terapia adiuvante',
                                'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                            });
                        }
                        if(section.text && !section.completed) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                                'text': 'completare la terapia adiuvante',
                                'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                            });
                        }
                    }
                });
                $scope.$emit('update_messages');
            });

            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.adjuvant).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.refused && fu.doctor_contact.doctor.user.id == user.id) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                            'text': 'Follow Up rifiutato, selezionare nuova data',
                            'state': { name: 'case.detail.doctor.main', params: { caseId: caseobj.id } }
                        });
                    }
                });
                $scope.$emit('update_messages');
            });
        }

    };

    var PatientNotifications = {
        get: function($scope, $injector, caseobj, messages, STATUS_KEY) {
            if(typeof this['status_' + STATUS_KEY[caseobj.status]] !== 'undefined') {
                return this['status_' + STATUS_KEY[caseobj.status]]($scope, $injector, caseobj, messages);
            }
        },
        status_started: function($scope, $injector, caseobj, messages) {

            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.initial).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.accepted && ( moment(fu.date).format('X') >= moment().format('X'))) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                            'text': 'Follow Up programmato',
                            'state': { name: 'case.detail.patient.main', params: { caseId: caseobj.id } }
                        });
                    }
                });
                $scope.$emit('update_messages');
            });

        },
        status_adjuvant_started: function($scope, $injector, caseobj, messages) {

            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.adjuvant).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.accepted && ( moment(fu.date).format('X') >= moment().format('X'))) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                            'text': 'Follow Up programmato',
                            'state': { name: 'case.detail.patient.main', params: { caseId: caseobj.id } }
                        });
                    }
                });
                $scope.$emit('update_messages');
            });

        },
        status_ended: function($scope, $injector, caseobj, messages) {

            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.final).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.accepted && ( moment(fu.date).format('X') >= moment().format('X'))) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.specific_diagnosis_name,
                            'text': 'Follow Up programmato',
                            'state': { name: 'case.detail.patient.main', params: { caseId: caseobj.id } }
                        });
                    }
                });
                $scope.$emit('update_messages');
            });

        }
    };

})();
