angular.module('contactController', []).directive 'contactController', ->
  return {
    restrict: 'E',
    templateUrl: '/components/contact/contact.html'
  }