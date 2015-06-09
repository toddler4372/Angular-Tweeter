'use strict';

/**
 * @ngdoc function
 * @name angularSimplySocialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSimplySocialApp
 */
angular.module('tweetersocial')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
