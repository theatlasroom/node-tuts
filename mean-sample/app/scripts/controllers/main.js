'use strict';

/**
 * @ngdoc function
 * @name meanSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanSampleApp
 */
angular.module('meanSampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
