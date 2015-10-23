'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      app: ['.'],
      css: ['<%= project.app %>/styles'],
      js: ['<%= project.app %>/scripts'],
      components: ['<%= project.app %>/components']
    },
    // Sass -> CSS
    sass: {
      dist: {
        options: {
          style: 'expanded',
          compass: true
        },
        files: {
            "<%= project.css %>/screen.css": "<%= project.css %>/screen.sass"
        }
      }
    },
    // Coffeescript -> JS
    coffee: {
      compile: {
        options: {
          bare: true,
          sourceMap: true
        },
        expand: true,
        flatten: false,
        cwd: '<%= project.app %>/',
        src: ['<%= project.js %>/**/*.{coffee,litcoffee}','<%= project.components %>/**/*.{coffee,litcoffee}'],
        dest: '<%= project.app %>/',
        ext: '.js'
      }
    },
    // Jade -> HTML
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: '<%= project.app %>/',
          src: ['index.jade','<%= project.components %>/**/*.jade','!**/_*.jade'],
          dest: '<%= project.app %>/',
          ext: '.html'
        }]
      }
    },
    // Adds any relevate autoprefixers supporting IE 9 and above
    autoprefixer: {
      options: {
        browsers: ["> 1%", "ie > 8"]
      },
      target: {
        files: {
            "<%= project.css %>/screen.css": "<%= project.css %>/screen.css"
        }
      }
    },
    // Minify CSS
    cssmin: {
      target: {
        files: {
          "<%= project.css %>/screen.min.css": ['<%= project.css %>/screen.css']
        }
      }
    },
    // Minify JS
    uglify: {
      options: {
        mangle: true
      },
      target: {
        files: {
          "<%= project.app %>/scripts/portfolio.min.js":   ["<%= project.app %>/scripts/portfolio.js"]
        }
      }
    },
    notify: {
      sass:{
        options:{
          title: "Portfolio Project",
          message: "Sass Compiled Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      coffee:{
        options:{
          title: "Portfolio Project",
          message: "Coffeescript Compiled Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      jade:{
        options:{
          title: "Portfolio Project",
          message: "Jade Compiled Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      uglify:{
        options:{
          title: "Portfolio Project",
          message: "JS Minified Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      }
    },
    watch: {
      sass: {
        files: ['<%= project.css %>/**/*.{scss,sass}','<%= project.components %>/**/*.{scss,sass}'],
        tasks: ['sass','notify:sass']
      },
      coffee: {
        files: ['<%= project.js %>/**/*.{coffee,litcoffee}','<%= project.components %>/**/*.{coffee,litcoffee}'],
        tasks: ['coffee', 'notify:coffee']
      },
      jade: {
        files: ['<%= project.app %>/index.jade','views/**/*.jade','<%= project.components %>/**/*.jade'],
        tasks: ['jade', 'notify:jade']
      },
      autoprefixer:{
        files: ['<%= project.css %>/screen.css'],
        tasks: ['autoprefixer']
      },
      uglify: {
        files: ['<%= project.js %>/*.js'],
        tasks:['uglify','notify:uglify']
      }
    },
    // Server setup
    browserSync: {
      dev: {
        bsFiles: {
          src : [
              '<%= project.css %>/screen.css',
              '<%= project.js %>/**/*.js',
              '<%= project.components %>/**/*.js',
              '**/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: '<%= project.app %>'
        }
      }
    }
  });
  
  // Default task(s).
  grunt.registerTask('default', [
    'browserSync', 
    'watch'
  ]);
  grunt.registerTask('build', [
    'sass',
    'coffee',
    'jade',
    'autoprefixer',
    'cssmin',
    'uglify'
  ]);
};