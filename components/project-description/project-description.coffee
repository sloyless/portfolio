angular.module('projectDescription', []).directive 'projectDescription', ->
  return {
    restrict: 'E',
    templateUrl: '/components/project-description/project-description.html'
  }