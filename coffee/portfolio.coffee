jQuery(document).ready ($) ->
  projects = []

  $.getJSON '/data/projects.json', (data) ->
    $.each(data.projects, (i, f) ->
      project = '<div class="slide" data-project-id="' + f.projectID + '"><img src="' + f.thumb + '" alt="' + f.title + '" /><span>' + f.title + '</span></div>'
      $(project).appendTo("#project-carousel .strip"))

  $(window).bind "load", ->
    do $('#project-carousel').carouselize