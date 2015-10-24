app = angular.module 'portfolio', [
  'ngSanitize', 
  'ngAnimate', 
  'projectDescription', 
  'projectCarousel',
  'contactController'
]

app.controller 'ProjectController', ['$http', ($http) ->
  projectData = @
  projectData.projects = []
  $http.get('/data/projects.json').success (data) ->  
    data.sort
    projectData.projects = data

  projectData._Index = 0
  projectData.isActive = (index) ->
    projectData.projects[index] is index

  projectData.showProject = (index) ->
    projectData._Index = index
    projectData.selected = projectData.projects[index]
    console.log(index + ' is now active')
  false
]

app.controller 'contactController', ['$http', ($scope, $http) ->
  $scope.formData = {}
  $scope.processForm = ->
    $http({
      method: 'POST',
      data: $scope.formData,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
  ]

jQuery(document).ready ($) ->
  $(window).bind "load", ->
    do $('#project-carousel').carouselize