'use strict';

/**
 * @ngdoc function
 * @name midhetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the midhetApp
 */
angular.module('midhetApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
