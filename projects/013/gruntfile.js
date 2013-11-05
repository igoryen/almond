//grunt.js
module.exports = function (grunt) {
  grunt.initConfig({ // 10
    min: {// 20
      dist: { // 30
        src: 'calculator/add.js',// 40
        dest: 'add.min.js' // 50
      }
    }
  });
};

/*

10) the parameter of the `initConfig()` is a configuration object (A)
20) the object's property is `min` (i.e. the built-in *minification* task). Its value is also an object (AA).
30) 
40) the source file, the file I want to minify
50) the name of the ready-made file. it's location is in the root directory

*/

module.exports = function(grunt) { // 1

  // Project configuration. // 4
    grunt.initConfig({ // 6 
      pkg: grunt.file.readJSON('package.json'), // 10
        uglify: { // 20
          options: { // 26
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' //28
          }, // options
          build: { // 23
            src: 'src/<%= pkg.name %>.js',
            dest: 'build/<%= pkg.name %>.min.js'
          } //build
        } // uglify
     });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify'); // 30

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};

/*
1) the wrapper function: 1/4 components of the Gruntfile
4) 2/4 components of the Gruntfile
6) grunt.initConfig() method takes in a configuration object in which you define project and task configuration
10) Your project’s metadata is imported into the `Grunt config` from your project's `package.json` file
20) When you run Grunt from the command line it runs the `grunt-contrib-uglify` plugin's `uglify` task by default. 
    The `uglify` task is configured to do 2 things: 
23)  a single `uglify` target: minify a single source file to a single destination file.
26) to generate a banner comment dynamically using that metadata.
28) <%== %> This is how you specify configuration data like filepaths and file lists
30) Enable the plugin with the commonly used task `grunt-contrib-uglify`

*/
