'use strict';

angular.module('myApp.tasks.task', [])
    .directive('task', function($rootScope) {
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'components/tasks/task.html',
            scope: {
                task: '='
            },
            link: function(scope, elem, attr){
                scope.show = function() {
                    var show = false;
                    if($rootScope.currentUser == 'manager'){
                        show = true;
                    } else if(scope.task.owners.indexOf($rootScope.currentUser) !== -1) {
                        show = true;
                    }
                    return show;
                }
                scope.editTask = function() {
                    $('#'+scope.task.id+'edittaskmodal').modal('show');
                }
                scope.setTask = function() {

                }
                scope.deleteTask = function()  {
                    angular.forEach(scope.$parent.taskGroup.tasks, function(value, idx){
                        if(value.id === scope.task.id){
                            scope.$parent.taskGroup.tasks.splice(idx, 1);
                        }
                    })
                }
            }
        }
    });
