'use strict';

/**
 * @ngdoc directive
 * @name guitarwebApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('guitarwebApp')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
