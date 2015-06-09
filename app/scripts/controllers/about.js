'use strict';

/**
 * @ngdoc function
 * @name angularSimplySocialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSimplySocialApp
 */
angular.module('tweetersocial')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
