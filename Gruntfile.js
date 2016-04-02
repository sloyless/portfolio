'use_strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      app: ['./source'],
      build: ['./build'],
      css: ['<%= project.app %>/styles'],
      js: ['<%= project.app %>/scripts'],
      components: ['<%= project.app %>/components'],
      templates: ['<%= project.app %>/views']
    },
    // Sass -> CSS
    sass: {
      dev: {
        options: {
          outputStyle: 'compact',
          outFile: '<%= project.build %>/style.css',
          sourceMap: true
        },
        files: {
            "<%= project.build %>/style.css": "<%= project.css %>/style.sass"
        }
      },
      build: {
        options: {
          outputStyle: 'compressed',
          sourceMap: 'none'
        },
        files: {
            "<%= project.build %>/style.css": "<%= project.css %>/style.sass"
        }
      }
    },
    // Coffeescript -> JS
    coffee: {
      dev: {
        options: {
          bare: true,
          sourceMap: true
        },
        expand: true,
        flatten: false,
        ext: '.js',
        files: {
          '<%= project.build %>/scripts/portfolio.js': ['<%= project.js %>/portfolio.coffee', '<%= project.components %>/**/*.coffee']
        }
      },
      build: {
        options: {
          bare: true,
          sourceMap: false
        },
        expand: true,
        flatten: false,
        ext: '.js',
        files: {
          '<%= project.build %>/scripts/portfolio.js': ['<%= project.js %>/portfolio.coffee', '<%= project.components %>/**/*.coffee']
        }
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
          dest: '<%= project.build %>/',
          ext: '.html'
        }]
      }
    },
    // Adds any relevate autoprefixers supporting IE 11 and above
    autoprefixer: {
      options: {
        browsers: ["> 1%", "ie > 10"],
        map: true
      },
      target: {
        files: {
            "<%= project.build %>/style.min.css": "<%= project.build %>/style.css"
        }
      }
    },
    // JS Error checking
    jshint: {
      files: ['Gruntfile.js', '<%= project.build %>/scripts/portfolio.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    notify: {
      sass:{
        options:{
          title: "Grunt",
          message: "Sass Compiled Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      coffee:{
        options:{
          title: "Grunt",
          message: "Coffeescript Compiled Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      jade:{
        options:{
          title: "Grunt",
          message: "Jade Compiled Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      content:{
        options:{
          title: "Grunt",
          message: "Content Updated or Copied Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      }
    },
    sync: {
      content: {
        files: [{
          cwd: '<%= project.app %>/', 
          src: ['content/**/*', 'scripts/vendor/*.js', '**/*.php'],
          dest: '<%= project.build %>/'
        }],
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      main: {
        expand: true,
        cwd: '<%= project.app %>/',
        src: ['content/**', 'scripts/vendor/*.js', '**/*.php'],
        dest: '<%= project.build %>/',
      }
    },
    // Empties folders to start fresh
    clean: {
      main: {
        files: [{
          dot: true,
          src: [
            '<%= project.build %>/{,*/}*'
          ]
        }]
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
      jshint: {
        files: ['<%= project.build %>/scripts/portfolio.js'],
        tasks: ['jshint']
      },
      jade: {
        files: ['<%= project.app %>/**/*.jade'],
        tasks: ['jade', 'notify:jade']
      },
      autoprefixer:{
        files: ['<%= project.build %>/style.css'],
        tasks: ['autoprefixer']
      },
      content: {
        files: ['<%= project.app %>/content/**/*', '<%= project.js %>/vendor/*.js', '<%= project.app %>/**/*.php'],
        tasks: ['sync:content', 'notify:content']
      }
    },
    php: {
      dist: {
        options: {
          hostname: '127.0.0.1',
          port: 9000,
          base: 'build', // Project root
          silent: true
        }
      }
    },
    // Server setup
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '<%= project.build %>/style.min.css',
            '<%= project.build %>/**/*.js',
            '<%= project.build %>/content/**/*',
            '<%= project.build %>/**/*.{html,php}'
          ]
        },
        options: {
          proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>',
          watchTask: true,
          logLevel: 'silent'
        }
      }
    }
  });
  
  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    'copy',
    'jade',
    'sass:dev',
    'autoprefixer',
    'coffee:dev',
    'jshint',
    'php',
    'browserSync',
    'watch'
  ]);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'jade',
    'sass:build',
    'autoprefixer',
    'coffee:build',
    'jshint'
  ]);
};