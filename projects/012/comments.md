comments.md
===
calculator.js
 
To use this calculator:

1) Point your browser to `projects/011/index.html`

2) Open the your browser's console (Mac: Option+Shift+J) 

3) For addition, type: `calculator.add(2,5)`

4) Press `Enter`

===
10) defining the module, taking the file name as the module name.  
20) RequireJS, use this folder/file reference (i.e. namespace/modulename reference) to load the filename dependency from this array of dependencies  
30) map the reference locally (with an arbitrary name, it doesn't have to match the dependancy filename) to the function `console.log()`    

!! the dependency loading order doesn't matter as long as the order in [] is the same as in function():   
~~~  
require(['B', 'A', 'C'], function(b, a, c));
~~~  

40) Why can't I write `['multiply']`? Why do I have to write `['calculator/multiply']`? Both `square.js` and `multiply.js` are in the `calculator` folder.  




