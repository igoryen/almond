//message.js
//define('message'); // 1
// module 1
define(function(){ // 5
  return "Hello World, this is my 'message' module";
});
// module 2
define('module2', function(){ // 
  return "module2 text";
});


/*
1) the definition of the message.js module does not have to include the module name
    since the module name is skipped the name of this module1 will be assumed to be the file name - 'module'

5) creating an anonymous funciton 
*/