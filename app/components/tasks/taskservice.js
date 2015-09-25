'use strict';

angular.module('myApp.tasks.services', [])
    .filter('numToString', function() {
        var strings = ['one', 'two', 'three'];
        return function(num){
            var found = 'blarg';
            angular.forEach(strings, function(value, key){
                console.log('num ', num)
                console.log('key ', key)
                console.log('value ', value)
                if(parseInt(num) == key+1){
                    found = strings[key];
                }
            });
            console.log('found ', found);
            return "ui grid " + found + " column";
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