module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'public/js/fluidvids.js',
        dest: 'public/js/build/global.min.js'
      }
    },
    cssmin: {
      build: {
          src: ['public/css/poole.css', 'public/css/syntax.css'],
          dest: 'public/css/build/global.min.css'
      }
  }
});


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('buildcss',  ['cssmin']);

};