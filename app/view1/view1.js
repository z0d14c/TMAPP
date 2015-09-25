'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.tasks.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'taskService', function ($scope, taskService) {
        $scope.taskSections = [
            {
                category: 'To-do',
                taskGroups: [
                    {
                        category: 'Subcolumn Title',
                        tasks: [{title: 'task1', description: 'test task for checking functionality of prototype.'},
                            {title: 'task2', description: 'test task for checking functionality of prototype.'},
                            {title: 'task3', description: 'test task for checking functionality of prototype.'}]
                    }
                ]
            }, {
                category: 'Doing',
                taskGroups: [
                    {
                        category: 'Subcolumn Title',
                        tasks: [{title: 'task1', description: 'test task for checking functionality of prototype.'},
                            {title: 'task2', description: 'test task for checking functionality of prototype.'},
                            {title: 'task3', description: 'test task for checking functionality of prototype.'}]
                    }
                ]
            }, {
                category: 'Done',
                taskGroups: [
                    {
                        category: 'Subcolumn Title',
                        tasks: [{title: 'task1', description: 'test task for checking functionality of prototype.'},
                            {title: 'task2', description: 'test task for checking functionality of prototype.'},
                            {title: 'task3', description: 'test task for checking functionality of prototype.'}]
                    }
                ]
            }
        ]
        taskService.test();
    }])