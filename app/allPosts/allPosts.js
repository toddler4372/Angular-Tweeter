'use strict';

angular.module('myApp.allPosts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/allPosts', {
    templateUrl: 'allPosts/allPosts.html',
    controller: 'allPostsCtrl'
  });
}])

.controller('allPostsCtrl', [function() {

}]);