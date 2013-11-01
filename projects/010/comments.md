comments.md
===
main.js

4) To use RequireJS and jQuery, you should either use the combined RequireJS/jQuery file, available at: `http://requirejs.org/docs/jquery.html` 
    Or use a `path` `(http://requirejs.org/docs/api.html#config-paths)`

9) jquery is an array of modules that are to be loaded and provided as inputs to the anonymous function

10) message is a module that this `main.js` depends on

13) module 2 - the name of module 2 in the `message.js` file

14) $ is the alias of the module in the jquery array. It is passed to the anonymous function

15) The anonymous function ialso takes in a 'message' file with some strings in it

16) The anonymous function ialso takes in 'module2' defined in the message.js file

30) jQuery, search index.html for the element having the id='output1' and fill it with the text in html()!

40) jQuery, search index.html for the element having the id='output2' and fill it with the text 
    from the 'message' file passed into the anonymous function (#12)! 
    ===

    message.js

1) the definition of the message.js module does not have to include the module name
    since the module name is skipped the name of this module1 will be assumed to be the file name - 'module'

5) creating an anonymous funciton 