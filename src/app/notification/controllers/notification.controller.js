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

    NotificationCtrl.$inject = ['$scope', '$injector', 'authenticationService', 'caseService'];

    var user;
    var ASSOCIATION_STATUS_DICT;

    /**
     * Notification controller
     */
    function NotificationCtrl($scope, $injector, authenticationService, caseService) {

        var messages = [];
        user = authenticationService.getAuthenticatedUser();

        $scope.$on('update_notifications', function() {
            messages = [];
            updateNotifications(messages, $scope, $injector, authenticationService, caseService);
            $scope.messages = messages;
        });

        $scope.$on('update_messages', function() {
            $scope.layout.notifications = messages.length;
        });

        $scope.$emit('update_notifications');

        $scope.messages = messages;

    }

    function updateNotifications(messages, $scope, $injector, authenticationService, caseService) {
        var user = authenticationService.getAuthenticatedUser();
        if(user && user.is_surgeon) {
           caseService.listAsSurgeon().then(function(response) {
                var surgeon_cases = response.data;
                for (var i = 0, len = surgeon_cases.length; i < len; i++) {
                    var caseobj = surgeon_cases[i];
                    SurgeonNotifications.get($scope, $injector, caseobj, messages);
                }
                $scope.$emit('update_messages');
            });
        }
        if(user && user.is_doctor) {
           caseService.listAsDoctor().then(function(response) {
                var doctor_cases = response.data;
                for (var i = 0, len = doctor_cases.length; i < len; i++) {
                    var caseobj = doctor_cases[i];
                    DoctorNotifications.get($scope, $injector, caseobj, messages);
                }
                $scope.$emit('update_messages');
            });
        }

        $scope.$emit('update_messages');

    }

    var SurgeonNotifications = {
        get: function($scope, $injector, caseobj, messages) {
            if(typeof this['status' + caseobj.status] !== 'undefined') {
                return this['status' + caseobj.status]($scope, $injector, caseobj, messages);
            }
        },
        status1: function($scope, $injector, caseobj, messages) {
            var ASSOCIATION_STATUS = $injector.get('ASSOCIATION_STATUS');
            if(caseobj.oncologist_status === null) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'associare oncologo'
                });
            }
            else if(caseobj.oncologist_status === ASSOCIATION_STATUS.refused) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'l\'oncologo scelto ha rifiutato, associarne un altro'
                });
            }
            else if(caseobj.radiotherapist_status === ASSOCIATION_STATUS.refused) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'Il radioterapista scelto ha rifiutato, associarne un altro'
                });
            }
            if(caseobj.radiotherapist_status === null) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'associare radioterapista'
                });
            }
        },
        status2: function($scope, $injector, caseobj, messages) {
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
                if(response.data.length < 2) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'inserire le proposte terapeutiche'
                    });
                }
                else {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'sottoporre le proposte terapeutiche a votazione'
                    });
                }
                $scope.$emit('update_messages');
            });
        },
        status3: function($scope, $injector, caseobj, messages) {

            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'programmare incontro per definire proposta terapeutica'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'una proposta terapeutica è stata accettata'
                    });
                }
                $scope.$emit('update_messages');

            }, function(response) {
                console.log('error');
            });
        },
        status4: function($scope, $injector, caseobj, messages) {
            messages.push({
                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                'text': 'avviare terapia'
            });
        },
        status5: function($scope, $injector, caseobj, messages) {
            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.initial).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.to_be_accepted) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                            'text': 'valutare richiesta Follow Up'
                        });
                    }
                });
                $scope.$emit('update_messages');
            });
        },
        status7: function($scope, $injector, caseobj, messages) {
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
                if(!response.data.length) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'inserire la proposta terapeutica di rivalutazione'
                    });
                }
                $scope.$emit('update_messages');
            });
        },
        status8: function($scope, $injector, caseobj, messages) {

            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'programmare incontro per definire proposta terapeutica di rivalutazione'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'la proposta terapeutica di rivalutazione è stata accettata'
                    });
                }
                $scope.$emit('update_messages');

            }, function(response) {
                console.log('error');
            });
        },
        status9: function($scope, $injector, caseobj, messages) {
            messages.push({
                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                'text': 'avviare rivalutazione'
            });
        },
        status12: function($scope, $injector, caseobj, messages) {
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
                if(!response.data.length) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'inserire la proposta terapeutica adiuvante'
                    });
                }
                $scope.$emit('update_messages');
            });
        },
        status13: function($scope, $injector, caseobj, messages) {

            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'programmare incontro per definire proposta terapeutica di terapia adiuvante'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'la proposta terapeutica di terapia adiuvante è stata accettata'
                    });
                }
                $scope.$emit('update_messages');

            }, function(response) {
                console.log('error');
            });
        },
        status14: function($scope, $injector, caseobj, messages) {
            messages.push({
                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                'text': 'avviare terapia adiuvante'
            });
        },
        status15: function($scope, $injector, caseobj, messages) {
            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.adjuvant).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.to_be_accepted) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                            'text': 'valutare richiesta Follow Up'
                        });
                    }
                });
                $scope.$emit('update_messages');
            });
        },
        status17: function($scope, $injector, caseobj, messages) {
            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.final).then(function(response) {
                if(response.data.length) {
                    response.data.forEach(function(fu) {
                        if(fu.status !== FU_STATUS_DICT.finalized) {
                            messages.push({
                                'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                                'text': 'follow up finale'
                            });
                        }
                    });
                }
                else {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'follow up finale'
                    });
                }
                $scope.$emit('update_messages');
            });
        }

    };

    var DoctorNotifications = {
        get: function($scope, $injector, caseobj, messages) {
            if(typeof this['status' + caseobj.status] !== 'undefined') {
                return this['status' + caseobj.status]($scope, $injector, caseobj, messages);
            }
        },
        status1: function($scope, $injector, caseobj, messages) {

            var ASSOCIATION_STATUS = $injector.get('ASSOCIATION_STATUS');

            if(caseobj.oncologist_contact_obj.doctor.user.id === user.id && caseobj.oncologist_status === ASSOCIATION_STATUS.to_be_accepted) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'accettare/rifiutare associazione'
                });
            }
            if(caseobj.radiotherapist_contact_obj.doctor.user.id === user.id && caseobj.radiotherapist_status === ASSOCIATION_STATUS.to_be_accepted) {
                messages.push({
                    'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                    'text': 'accettare/rifiutare associazione'
                });
            }
        },
        status3: function($scope, $injector, caseobj, messages) {

            var authenticationService = $injector.get('authenticationService');
            var user = authenticationService.getAuthenticatedUser();
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.initial).then(function(response) {
                if(!therapeuticProposalService.pollingCompleteDoctor(response.data, user.id)) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'votare proposte terapeutiche'
                    });
                }
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'programmare incontro per definire proposta terapeutica'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'una proposta terapeutica è stata accettata'
                    });
                }
                $scope.$emit('update_messages');
            }, function(response) {
                console.log('error');
            });
        },
        status5: function($scope, $injector, caseobj, messages) {
            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.initial).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.refused && fu.doctor_contact.doctor.user.id == user.id) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                            'text': 'Follow Up rifiutato, selezionare nuova data'
                        });
                    }
                });
            });
        },
        status8: function($scope, $injector, caseobj, messages) {

            var authenticationService = $injector.get('authenticationService');
            var user = authenticationService.getAuthenticatedUser();
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.revaluation).then(function(response) {
                if(!therapeuticProposalService.pollingCompleteDoctor(response.data, user.id)) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'votare proposta terapeutica di rivalutazione'
                    });
                }
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'programmare incontro per definire proposta terapeutica di rivalutazione'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'la proposta terapeutica di rivalutazione è stata accettata'
                    });
                }
                $scope.$emit('update_messages');
            }, function(response) {
                console.log('error');
            });
        },
        status13: function($scope, $injector, caseobj, messages) {

            var authenticationService = $injector.get('authenticationService');
            var user = authenticationService.getAuthenticatedUser();
            var therapeuticProposalService = $injector.get('therapeuticProposalService');
            var THERAPEUTIC_PROPOSAL_TYPES = $injector.get('THERAPEUTIC_PROPOSAL_TYPES');
            therapeuticProposalService.list(caseobj.id, THERAPEUTIC_PROPOSAL_TYPES.adjuvant).then(function(response) {
                if(!therapeuticProposalService.pollingCompleteDoctor(response.data, user.id)) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'votare proposta terapeutica di terapia adiuvante'
                    });
                }
                var pollingComplete = therapeuticProposalService.pollingComplete(response.data);
                var acceptedTp = therapeuticProposalService.accepted(response.data);
                if(pollingComplete && !acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'programmare incontro per definire proposta terapeutica di terapia adiuvante'
                    });
                }
                else if(acceptedTp) {
                    messages.push({
                        'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                        'text': 'la proposta terapeutica di terapia adiuvante è stata accettata'
                    });
                }
                $scope.$emit('update_messages');
            }, function(response) {
                console.log('error');
            });
        },
        status15: function($scope, $injector, caseobj, messages) {
            var followupService = $injector.get('followupService');
            var FU_STATUS_DICT = $injector.get('FU_STATUS_DICT');
            var FU_TYPE_DICT = $injector.get('FU_TYPE_DICT');
            followupService.list(caseobj.id, FU_TYPE_DICT.adjuvant).then(function(response) {
                response.data.forEach(function(fu) {
                    if(fu.status === FU_STATUS_DICT.refused && fu.doctor_contact.doctor.user.id == user.id) {
                        messages.push({
                            'case': caseobj.patient_obj.lastname + ' ' + caseobj.patient_obj.firstname + ' - ' + caseobj.description,
                            'text': 'Follow Up rifiutato, selezionare nuova data'
                        });
                    }
                });
                $scope.$emit('update_messages');
            });
        }

    };

})();
