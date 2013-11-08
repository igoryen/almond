//grunt.js
module.exports = function (grunt) { // 1
  grunt.initConfig({ // 4, 6, 10
    
      pkg: grunt.file.readJSON('package.json'), // 12
    //=== task 1: jshint ============
    jshint: { 
      all: ['calculator/*.js'] 
      }, // jshint 
    //=== task 2: uglify =============
    uglify: { // 22
      options: { // 70
        banner: '/*\n<%= grunt.template.today("yyyy-mm-dd")%> <%= pkg.name %> - ' + // 60
        '<%= pkg.author%> \n*/\n\n'
      }, // options
      dist: { // 23
        src: 'calculator/<%= pkg.name %>.js', // the file to be uglified
        dest: '<%= pkg.name %>_<%= pkg.version %>.min.js' // the resultant file
      } // dist
    }// uglify
    //=========================
  }); // grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-uglify'); // 30  
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['uglify', 'jshint']); // 42

}; // module.exports

