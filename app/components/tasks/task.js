'use strict';

angular.module('myApp.tasks.task', [])
    .directive('task', function() {
        return{
            restrict: 'E',
            replace: true,
            templateUrl: 'components/tasks/task.html'
        }
    });
