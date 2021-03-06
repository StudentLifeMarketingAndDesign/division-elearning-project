module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
          'bower_components/mediaelement/build/mediaelement-and-player.js',
          '../division-bar/js/division-bar.js',
          'js/*.js'
        ],
        dest: 'build/src/app.js'
      }
    },

    uglify: {
      build: {
        src: ['build/src/app.js'],
        dest: 'build/app.min.js'
      }
    },

    sass: {
      dist: { 
        files: {
          'css/app.css' : 'scss/app.scss'
        },                  // Target
        options: {              // Target options
          style: 'compressed',
          loadPath: ['bower_components/bootstrap-sass-official/assets/stylesheets/', '../division-project/scss', '../division-bar/scss']
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['js/*.js', 'js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['scss/*.scss', 'scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};