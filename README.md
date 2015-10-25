# Portfolio Project

This is a redesign of an existing portfolio site built in Wordpress. The redesign/refactor includes building the entire site from scratch using newer technologies and removing WordPress entirely.

Languages/Frameworks used in this project:
* Compass
* Bootstrap (Sass Official v3.3.5)
* Sass
* Jade
* Coffeescript
* JSON (for Project data)
* AngularJS v1.46

Parallax.js by http://pixelcog.github.io/parallax.js/

## Dev Setup
Development is setup and compiled using Grunt.js. It will watch for Sass, Jade, and Coffeescript file changes, compile, autoprefix CSS, and minify. A web server is loaded using BrowserSync which will inject any new changes without a page reload.

Requirements: (Install at global level)
* Node (>= 0.12.7)
* Sass
* Compass
* Bootstrap for Sass (https://github.com/twbs/bootstrap-sass)
* Grunt
* BrowserSync

Download/Fork the project, navigate to project folder in Terminal and run:
* npm install
* grunt

## To-Do
* Add JSHint to Grunt task