module.exports = function (grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      dev: {
        src: ['config/**/*.js', 'app/**/*.js']
      }
    },

    less: {
      prod: {
        options: {
          yuicompress: true,
        },
        files: [{
          expand: true,
          cwd: 'app/assets/stylesheets/',
          src: '*.less',
          dest: 'public/assets/',
          ext: '.css'
        }]
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'app/assets/stylesheets/',
          src: '*.less',
          dest: 'public/assets/',
          ext: '.css'
        }]
      }
    },

    handlebars: {
      options: {
        processName: function (filename) {
          var name = filename.match(/app\/assets\/templates\/(.*?)\.hbs/);
          return name[1];
        }
      },
      all: {
        src: ['app/assets/templates/**/*.hbs'],
        dest: 'temp/templates.js'
      }
    },

    requirejs: {
      options: {
        name: 'main',
        mainConfigFile: 'config/requirejs.js',
        wrap: false
      },
      prod: {
        options: {
          out: 'temp/main.js',
        }
      },
      dev: {
        options: {
          out: 'temp/main.js',
          optimize: 'none',
          useSourceUrl: true
        }
      }
    },

    concat: {
      all: {
        src: [
          'components/almond/almond.js',
          'components/handlebars.js/dist/handlebars.runtime.js',
          'temp/templates.js',
          'temp/main.js'
        ],
        dest: 'public/assets/application.js'
      }
    },

    uglify: {
      prod: {
        src: ['public/assets/application.js'],
        dest: 'public/assets/application.js'
      }
    },

    clean: {
      temp: ['temp/'],
      assets: ['public/assets/']
    },

    watch: {
      files: ['app/assets/stylesheets/**/*.less', '<%= jshint.dev.src %>'],
      tasks: 'default'
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean:assets', 'less:dev', 'handlebars', 'requirejs:dev', 'concat', 'clean:temp']);
  grunt.registerTask('release', ['clean:assets', 'less:prod', 'handlebars', 'requirejs:prod', 'concat', 'uglify', 'clean:temp']);
  grunt.registerTask('heroku', ['release']);

};
