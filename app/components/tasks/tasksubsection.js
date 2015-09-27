(function() {
    'use strict';
    angular.module('myApp.tasks.tasksection')
        .directive('taskSubsection', function () {
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: 'components/tasks/tasksubsection.html',
                scope: {
                    taskGroup: '='
                },
                link: function (scope, elem, attrs) {
                    scope.addTask = function() {
                        $('#' + scope.taskGroup.category + 'addtaskmodal').modal('show');
                    }
                }
            }
        });
})();