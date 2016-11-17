module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['gruntfile.js', 'app.js', 'content/cvtext.json', 'routes/**/*.js', 'public/js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint']);

};