# Portfolio Project

[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](https://www.npmjs.com/package/bootstrap)
[![devDependency Status](https://david-dm.org/sass/node-sass/dev-status.svg?theme=shields.io)](https://david-dm.org/sass/node-sass#info=devDependencies)

This is a redesign of an existing portfolio site built in Wordpress. The redesign/refactor includes building the entire site from scratch using newer technologies and removing WordPress entirely.

Languages/Frameworks used in this project:
* Bootstrap (Sass Official v3.3.5)
* Sass (libsass)
* Jade
* Coffeescript
* JSON (for Project data)
* AngularJS v1.52

Parallax.js by http://pixelcog.github.io/parallax.js/

## Dev Setup
Development is setup and compiled using Grunt.js. It will watch for Sass, Jade, and Coffeescript file changes, compile, and autoprefix CSS. A web server is loaded using BrowserSync which will inject any new changes without a page reload.

Bootstrap (Sass) v3.3.5 comes preinstalled (only the elements in use are included in the stylesheet), as well as FontAwesome v4.5.0.

`grunt` will launch the dev/watch processes. Sourcemaps will be created and Sass output is in `compact` mode.
`grunt build` will output server-ready versions of all files. No sourcemaps will be created and Sass output is in `compressed` mode.

Requirements: (Install at global level)
* Node (>= 0.12.7)
* Grunt
* BrowserSync

Download/Fork the project, navigate to project folder in Terminal and run:
* npm install
* grunt