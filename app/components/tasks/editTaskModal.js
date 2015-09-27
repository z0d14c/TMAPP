'use strict';

angular.module('myApp.tasks.task')
    .directive('editTaskModal', ['$rootScope', function($rootScope) {
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'components/tasks/editTaskModal.html',
            scope: {
                task: '='
            },
            link: function(scope, elem, attr){
                scope.statusOptions = [
                    'To-do',
                    'Doing',
                    'Done'
                ]
                scope.setTask = function setTask(){
                    if(scope.comment){
                        scope.task.comments.push({
                            author: $rootScope.currentUser,
                            text: scope.comment
                        })
                    }
                    scope.$emit('placeTask', scope.task.id, scope.status);
                    scope.closeModals();
                }
                scope.cancel = function () {
                    scope.closeModals();
                }
                scope.closeModals = function closeModals(){
                    $('.ui.modal').modal('hide');
                }
            }
        }
    }]);
