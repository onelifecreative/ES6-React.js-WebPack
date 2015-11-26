module.exports = function(grunt) {

    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
        compile: ['_public/index.html']
    },

    watch: {

        jade: {
          files: ['_dev/JADE/*.jade','_dev/JADE/layout/*.jade','_dev/JADE/layout/*/*.jade'],
          tasks: "dev"
        },

        sass: {
          files: ['_dev/SASS/*.scss','_dev/SASS/base/*.scss'],
          tasks: "dev"
        },
        
        copy: {
          files: ['_dev/JAVASCRIPT/*.js'],
          tasks: "dev"
        },
    },

    copy: {
        main: {
          files: [
          {expand: true, cwd: 'path/', src: ['_dev/JAVASCRIPT/script.js'], dest: '_public/_assets/js/script.js'}
          ],
        },
    }, 

    jade: {
        compile: {
            options: {
              pretty: true,
              data: {
                debug: false
              }
            },
            files: {
              "_public/index.html": ["_dev/JADE/index.jade"]
            }
          }
    },

    sass: {
        dev: {
            options: {
                style: 'expanded'
              },
              files: {
                '_public/_assets/css/style.css': '_dev/SASS/main.scss',
              }
            }
        },
    });  

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default",['sass']);
    grunt.registerTask("dev",['clean', 'jade', 'sass', 'copy']);

};