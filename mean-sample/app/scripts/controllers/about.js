'use strict';

/**
 * @ngdoc function
 * @name meanSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meanSampleApp
 */
angular.module('meanSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
