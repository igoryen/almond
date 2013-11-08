comments.md
===
Gruntfile.js

1) the wrapper function: 1/4 components of the Gruntfile  
4) Project configuration. 2/4 components of the Gruntfile  
6) grunt.initConfig() method takes in a configuration object in which you define project and task configuration  
10) the parameter passed to the `initConfig()` is a configuration object  
12) Import my project’s metadata into the `Grunt config` from my project's `package.json` file  
20) the object's property is `min` (i.e. the built-in *minification* task). Its value is also an object.  
22) When you run Grunt from the command line it runs the `grunt-contrib-uglify` plugin's `uglify` task by default.   
    The `uglify` task is configured to do 2 things:   
23)  a single `uglify` target: minify a single source file to a single destination file.  
    can be called `build` or `dist`  
26) to generate a banner comment dynamically using that metadata.  
28) `<%== %>` This is how you specify configuration data like filepaths and file lists  
30) Load the plugin that provides the "uglify" task. Enable the plugin with the commonly used task `grunt-contrib-uglify`  
40) the source file, the file I want to minify  
42) specify the default tasks in an array  
50) the name of the ready-made file. it's location is in the root directory  
60) pkg.name: its value is taken from package.json/name  
    pkg.template.today: its value is taken from the templating system, not from package.json  
70) The banner is a comment at the top of the js file that has useful information about the author etc.   
    Values are taken from package.json  





