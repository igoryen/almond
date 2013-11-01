comments.md
===
calculator.js
 
To use this calculator:

1) Point your browser to `projects/011/index.html`

2) Open the your browser's console (Mac: Option+Shift+J) 

3) For addition, type: `calculator.add(2,5)`

4) Press `Enter`

===
1) Creating a `calculator` object. Merely an initialization of the object.

3) If the functions below are not commented out, the `calculator` object is one global variable with 2 functions inside
    instead of 2 global functions

10) the `add` property of the calculator object shall be a function!

12) the `add` function is moved from the `calculator.js` file to the `add.js` file! 
    But the `add` function still remains in the `calculator` object!

20) the `subtract` property of the `calculator` object shall be a function!

40)  make the `calculator` variable an instance of the global `calculator` object (in `calculator.js`), i.e. reassigne it to itself OR a make the `calculator` variable a new object!  
  If this reassignment is added, the order of modules to load -- listed in the `<script>` in the `index.html` -- ceases to matter. 
  AND in fact, the `calculator.js` module doesn't even have to be listed in `index.html`! 
  Even more, this `calculator.js` module does not even have to exist!

50) `square()` requires the `multiply()` function from another file. In this situation the order the modules are listed in the `index.html` file ceases to matter.  


