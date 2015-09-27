'use strict';

angular.module('myApp.tasks.task')
    .directive('addTaskModal', function() {
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'components/tasks/addTaskModal.html',
            scope: {
                taskGroup: '='
            },
            link: function(scope, elem, attr){
                scope.users = ['worker1', 'worker2', 'manager'];
                scope.setTask = function setTask(){
                    scope.taskGroup.tasks.push({
                        owners: [scope.owners],
                        title: scope.title,
                        description:scope.description,
                        comments: []
                    })
                    scope.closeModals();
                }
                scope.closeModals = function closeModals(){
                    $('.ui.modal').modal('hide');
                }
            }
        }
    });
