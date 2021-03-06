'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.tasks.services',
    'myApp.tasks.task',
    'myApp.tasks.tasksection'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]).run(["$rootScope",
    function ($rootScope) {
        $rootScope.users = ['worker1', 'worker2', 'manager']
        $rootScope.currentUser = 'manager';
    }] );
