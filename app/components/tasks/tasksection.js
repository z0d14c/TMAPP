'use strict';

angular.module('myApp.tasks.tasksection', [])
    .directive('taskSection', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'components/tasks/tasksection.html',
            scope: {
                category: '=',
                taskGroups: '='
            },
            controller: function($scope){
                $scope.addSubColumn = function(){
                    $scope.taskGroups.push(angular.copy($scope.taskGroups[0]));
                }
            },
            link: function (scope, elem, attrs) {
                scope.numColumns = scope.taskGroups.length;
            }
        }
    });
