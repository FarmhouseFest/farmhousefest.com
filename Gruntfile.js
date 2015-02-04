module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          'css/main-2015.css': 'css/main-2015.css'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      single_file: {
        src: 'css/main-2015.css'
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['cssmin', 'autoprefixer']);
};