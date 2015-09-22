app = angular.module 'portfolio', ['ngSanitize']

app.controller 'ProjectController', ['$http', ($http) ->
  projectData = @
  projectData.projects = []
  $http.get('/data/projects.json').success (data) ->  
    projectData.projects = data
  false
]

app.controller 'SelectedProjectController', ->
  @tab = 1

  @isSet = (checkTab) ->
    return @tab is checkTab

  @setTab = (setTab) ->
    @tab = setTab

app.directive 'projectDescription', ->
  return {
    restrict: 'E',
    templateUrl: '/partials/project-description.html'
  }

jQuery(document).ready ($) ->
  $(window).bind "load", ->
    do $('#project-carousel').carouselize