'use strict';

angular.module('myApp.tasks.task', [])
    .directive('task', function() {
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'components/tasks/task.html',
            scope: {
                task: '='
            },
            link: function(scope, elem, attr){

            }
        }
    });
