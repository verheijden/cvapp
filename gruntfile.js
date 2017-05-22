module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    jshint: {
      files: ['gruntfile.js', 'app.js', 'public/content/cvtext.json', 'routes/**/*.js', 'public/js/cv_angular.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        plugins: ['transform-react-jsx'], // npm install babel-plugin-transform-react-jsx
        presets: ['es2015', 'react'] // npm install babel-preset-es2015 babel-preset-react
      },
      dist: {
        files: [{
          src: ['public/js/cv_react.js'],
          dest: 'public/js/cv_react-compiled.js'
        }]
      }
    },
    watch: {
      ecma5: {
        files: ['<%= jshint.files %>'],  // local (or imported) identifier
        tasks: ['jshint']
      },
      ecma6: {
        files: ['public/js/cv_react.js'],
        tasks: ['babel']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask("default", ["babel"]);

};
