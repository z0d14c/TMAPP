'use strict';

angular.module('myApp.tasks.tasksection', [])
.directive('taskSection', function() {
        console.log('is tudahiduawhui');
        return{
            restrict: 'EA',
            replace: true,
            templateUrl: 'components/tasks/tasksection.html',
            scope: {
                numColumns : '=',
                tasks: '='
            },
            link: function(scope, elem, attrs){
                console.log('is this happening');
                scope.numColumns = 'one';
            }
        }
});
