app = angular.module 'portfolio', [
  'ngSanitize', 
  'ngAnimate', 
  'projectDescription', 
  'projectCarousel'
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

jQuery(document).ready ($) ->
  $(window).scroll ->
    scroll = $(window).scrollTop()
    nav = $('#global-header')

    if scroll >= 80
      $(nav).addClass('compact')
      console.log('past 120')
    if scroll < 200
      nav.removeClass('compact')
      console.log('before 120')
    false
  .bind "load", ->
    do $('#project-carousel').carouselize