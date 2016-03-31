jQuery(document).ready ($) ->
  $(window).scroll ->
    scroll = $(window).scrollTop()
    nav = $('#global-header')

    if scroll >= 80
      $(nav).addClass('compact')
    if scroll < 200
      nav.removeClass('compact')
    false

  # Smooth anchor scrolling
  $('a[href^="#"]').on 'click.smoothscroll', (e) ->
    e.preventDefault()

    target = @hash
    $target = $(target)

    $('html, body').stop().animate {
      'scrollTop': $target.offset().top-60
    }, 500, 'swing', ->
      window.location.hash = target
      false

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
  $http.get('/content/data/projects.json').success (data) ->  
    # Sorts the JSON by projectID in decending order (newest first)
    data.sort((a, b) ->
      return parseFloat(b.projectID) - parseFloat(a.projectID)
    )
    projectData.projects = data
    false

  projectData._Index = 0
  projectData.isActive = (index) ->
    projectData.projects[index] is index

  projectData.showProject = (index) ->
    projectData._Index = index
    projectData.selected = projectData.projects[index]
    false
  false
]
