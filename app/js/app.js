'use strict';

(function() {
// Declare app level module which depends on filters, and services
var app =angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
app.controller('TabController', function(){
  this.tab=1;
  this.setTab = function(intab){
  	this.tab=intab;    
    };
  this.isSet = function(val){
   return val==this.tab; 
  };
  });
})();