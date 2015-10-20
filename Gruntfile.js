'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      app: ['.'],
      css: ['<%= project.app %>/styles/']
    },
    // Server setup
    express: {
      all: {
        options: {
          bases: ['/Users/sloyless/Projects/SLD/sloyless.github.io/'],
          port: 9000,
          livereload: true,
          hostname: 'localhost'
        }
      }
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
        src: ['**/*.coffee'],
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
          src: ['**/*.jade','!**/_*.jade'],
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
      options: {
        livereload: true,
      },
      sass: {
        files: ['**/*.{scss,sass}'],
        tasks: ['newer:sass', 'cssmin','notify:sass']
      },
      coffee: {
        files: ['**/*.{coffee,litcoffee}'],
        tasks: ['newer:coffee', 'notify:coffee']
      },
      jade: {
        files: ['**/*.jade'],
        tasks: ['newer:jade', 'notify:jade']
      },
      autoprefixer:{
        files: ['<%= project.css %>/screen.css'],
        tasks: ['autoprefixer', 'cssmin']
      },
      uglify: {
        files: ['<%= project.js %>/*.js'],
        tasks:['uglify','notify:uglify']
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>/index.html'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-open');
  
  // Default task(s).
  grunt.registerTask('default', [
    'express',
    'sass',
    'coffee',
    'jade',
    'autoprefixer',
    'cssmin',
    'uglify', 
    'open',
    'watch'
  ]);

};