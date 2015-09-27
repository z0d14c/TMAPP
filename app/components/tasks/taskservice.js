'use strict';

angular.module('myApp.tasks.services', [])
    .filter('numToString', function() {
        var strings = ['one', 'two', 'three'];
        return function(num){
            var found = 'blarg';
            angular.forEach(strings, function(value, key){
                if(parseInt(num) == key+1){
                    found = strings[key];
                }
            });
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
    var idGen = function(){
        var s = "";
        var x = 10;
        while(s.length<x&&x>0){
            var v = Math.random()<0.5?32:0;
            s += String.fromCharCode(Math.round(Math.random()*((122-v)-(97-v))+(97-v)));
        }
        return s;
    }
    return {
        test:test,
        idGen: idGen
    }
}]);