'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.allPosts',
  'myApp.Photos',
  'myApp.Videos',
  'myApp.Settings'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/allPosts'});
}]);
