angular.module('projectDescription', []).directive 'projectDescription', ->
  return {
    restrict: 'E',
    templateUrl: '/partials/project-description.html'
  }