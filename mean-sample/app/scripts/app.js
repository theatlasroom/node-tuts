'use strict';

/**
 * @ngdoc overview
 * @name meanSampleApp
 * @description
 * # meanSampleApp
 *
 * Main module of the application.
 */
angular
  .module('meanSampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'ClientCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
