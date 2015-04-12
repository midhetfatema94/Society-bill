'use strict';

/**
 * @ngdoc function
 * @name midhetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the midhetApp
 */
angular.module('midhetApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
