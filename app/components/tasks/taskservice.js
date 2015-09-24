'use strict';

angular.module('myApp.tasks.services', [])
    .filter('numToString', function() {
        var strings = ['one', 'two', 'three'];
        return function(txt){

        }
    })
    //.service('taskService', function(){
    //    var test = function(){console.log('banana')};
    //    return {
    //        test:test
    //    }
    //});
.service('taskService', [function() {
    var test = function(){console.log('banana')};
    return {
        test:test
    }
}]);