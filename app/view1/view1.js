'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.tasks.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$rootScope', 'taskService', function ($scope, $rootScope, taskService) {
        $scope.taskSections = [
            {
                category: 'To-do',
                taskGroups: [
                    {
                        category: 'Group1',
                        //owners: ['manager'],
                        tasks: [{
                            id: taskService.idGen(),
                            owners: ['manager'],
                            title: 'task1',
                            description: 'test task for checking functionality of prototype.',
                            comments: []
                        },
                            {
                                id: taskService.idGen(),
                                owners: ['manager'],
                                title: 'task2',
                                description: 'test task for checking functionality of prototype.',
                                comments: []
                            },
                            {
                                id: taskService.idGen(),
                                owners: ['manager'],
                                title: 'task3',
                                description: 'test task for checking functionality of prototype.',
                                comments: []
                            }]
                    }
                ]
            }, {
                category: 'Doing',
                taskGroups: [
                    {
                        //owners: ['manager'],
                        category: 'Group2',
                        tasks: [{
                            id: taskService.idGen(),
                            owners: ['manager'],
                            title: 'task1',
                            description: 'test task for checking functionality of prototype.',
                            comments: []
                        },
                            {
                                id: taskService.idGen(),
                                owners: ['manager'],
                                title: 'task2',
                                description: 'test task for checking functionality of prototype.',
                                comments: []
                            },
                            {
                                id: taskService.idGen(),
                                owners: ['manager'],
                                title: 'task3',
                                description: 'test task for checking functionality of prototype.',
                                comments: []
                            }]
                    }
                ]
            }, {
                category: 'Done',
                taskGroups: [
                    {
                        //owners: ['manager'],
                        category: 'Group3',
                        tasks: [{
                            id: taskService.idGen(),
                            owners: ['manager'],
                            title: 'task1',
                            description: 'test task for checking functionality of prototype.',
                            comments: []
                        },
                            {
                                id: taskService.idGen(),
                                owners: ['manager'],
                                title: 'task2',
                                description: 'test task for checking functionality of prototype.',
                                comments: []
                            },
                            {
                                id: taskService.idGen(),
                                owners: ['manager'],
                                title: 'task3',
                                description: 'test task for checking functionality of prototype.',
                                comments: []
                            }]
                    }
                ]
            }
        ]
        //i know this is terrible code, forgive me Angular gods
        //remove old task and copy into new location
        $scope.$on('placeTask', function (event, id, dest) {
            console.log('id ', id)
            console.log('dest ', dest);
            if (dest) {
                var copiedTask;
                angular.forEach($scope.taskSections, function (section, index) {
                    angular.forEach(section.taskGroups, function (group, index) {
                        angular.forEach(group.tasks, function (task, index) {
                            if (task.id === id) {
                                copiedTask = angular.copy(task);
                                group.tasks.splice(index, 1);
                            }
                        })
                    })
                })
                angular.forEach($scope.taskSections, function (section, index) {
                    if (section.category === dest) {
                        console.log('pushing copied task');
                        section.taskGroups[0].tasks.push(copiedTask);
                    }
                });
            }
        })

        $scope.worker = function worker() {
            $rootScope.currentUser = 'worker1';
        }
        $scope.worker2 = function worker2() {
            $rootScope.currentUser = 'worker2';
        }
        $scope.manager = function manager() {
            $rootScope.currentUser = 'manager';
        }
    }])