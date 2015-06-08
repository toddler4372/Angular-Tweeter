'use strict';

angular.module('myApp.Photos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Photos', {
    templateUrl: 'Photos/Photos.html',
    controller: 'PhotosCtrl'
  });
}])

.controller('PhotosCtrl', [function() {

}]);