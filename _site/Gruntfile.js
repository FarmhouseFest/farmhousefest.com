module.exports = function(grunt) {

  grunt.initConfig({

    cssmin: {
      target: {
        files: {
          '_site/css/main-2015.css': '_site/css/main-2015.css'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      single_file: {
        src: '_site/css/main-2015.css'
      }
    },

    smarttext: {
      options: {},
      files: [{
        'expand': true,
        'cwd': 'test/fixtures',
        'src': ['_site/**/*.html'],
        'dest': 'tmp'
      }],
    },

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-smarttext');

  grunt.registerTask('default', ['cssmin', 'autoprefixer']);
};