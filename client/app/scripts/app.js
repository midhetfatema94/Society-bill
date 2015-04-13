'use strict';

/**
 * @ngdoc overview
 * @name midhetApp
 * @description
 * # midhetApp
 *
 * Main module of the application.
 */
angular
  .module('midhetApp', [
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
        templateUrl: 'views/main.html'
      })
      .when('/search', {
        templateUrl: 'views/about.html',
        controller: 'BillCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'BillCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  ;
