'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:fretMove
 * @description
 * # fretMove
 */
angular.module('guitarwebApp')
  .directive('fretMove', function () {
    return {
      replace:true,
      templateUrl: 'templates/fretMove.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
    
      }
    };
  });
