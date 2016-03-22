app = angular.module 'portfolio', [
  'ngSanitize', 
  'ngAnimate',
  'ui.bootstrap', 
  'projectDescription', 
  'projectCarousel'
]

app.controller 'ProjectController', ['$http', ($http) ->
  projectData = @
  projectData.projects = []
  active = 0
  $http.get('/content/data/projects.json').success (data) ->  
    data.sort
    projectData.projects = data

  projectData._Index = 0
  projectData.isActive = (index) ->
    projectData.projects[index] is index

  projectData.showProject = (index) ->
    projectData._Index = index
    projectData.selected = projectData.projects[index]
  false
]

jQuery(document).ready ($) ->
  $('.carousel-inner').find('.item').first().addClass('active')
  
  $('#carousel-projects .item').click (e) ->
    e.preventDefault
    $(@).carousel('pause')

  $(window).scroll ->
    scroll = $(window).scrollTop()
    nav = $('#global-header')

    if scroll >= 80
      $(nav).addClass('compact')
    if scroll < 200
      nav.removeClass('compact')
    false