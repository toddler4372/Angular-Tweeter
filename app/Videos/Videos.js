'use strict';

angular.module('myApp.Videos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Videos', {
    templateUrl: 'Videos/Videos.html',
    controller: 'VideosCtrl'
  });
}])

.controller('VideosCtrl', [function() {

}]);