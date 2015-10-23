var app;

app = angular.module('portfolio', ['ngSanitize', 'ngAnimate', 'projectDescription', 'projectCarousel']);

app.controller('ProjectController', [
  '$http', function($http) {
    var projectData;
    projectData = this;
    projectData.projects = [];
    $http.get('/data/projects.json').success(function(data) {
      data.sort;
      return projectData.projects = data;
    });
    projectData._Index = 0;
    projectData.isActive = function(index) {
      return projectData.projects[index] === index;
    };
    projectData.showProject = function(index) {
      projectData._Index = index;
      projectData.selected = projectData.projects[index];
      return console.log(index + ' is now active');
    };
    return false;
  }
]);

jQuery(document).ready(function($) {
  return $(window).bind("load", function() {
    return $('#project-carousel').carouselize();
  });
});

//# sourceMappingURL=portfolio.js.map
