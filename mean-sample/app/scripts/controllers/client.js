'use strict';

/**
 * @ngdoc function
 * @name meanSampleApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the meanSampleApp
 */
angular.module('meanSampleApp')
  .controller('ClientCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
