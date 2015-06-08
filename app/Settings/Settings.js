'use strict';

angular.module('myApp.Settings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Settings', {
    templateUrl: 'Settings/Settings.html',
    controller: 'SettingsCtrl'
  });
}])

.controller('SettingsCtrl', [function() {

}]);