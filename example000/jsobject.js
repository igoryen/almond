define(function() { // 1

  return { // 2
    getObject: function() { // 3
      var object = {
        "What is a module loader?": 
        "...?"

        , "JavaScript module loaders: necessary evil?": 
        "?"

        , "What does the fear of global state make us do?": 
        "Perhaps unnecessarily run towards AMD."

        , "Why do we need modules?": 
        "For at least 2 purposes: <br>1) When projects go large, and <br>2) to reuse work from others."

        , "Does every programming language offer a way to partition code in reusable chunks?": "Some of them, such as C and Ruby, provide explicit mechanisms for this." 
        , "Does JavaScript provide explicit mechanisms to partition code in reusable chunks?" : "No, JS leaves the modularization to the programmer."
        , "What is one way to achieve this?" :  "The Asynchronous Module Definition (AMD) API."
        , "Does AMD really offer the final solution to JavaScript modularization?": "?"
        , "Does JavaScript come with an out-of-the-box way to modularize code?": "No, except for, distributing code over different files. "
        , "What does this way look like?": "?"
        , "Do JS environments provide modular system?": "Some server-side JavaScript environments, such asNode, provide a modular system, which is often an implementation of CommonJS Modules. "
        , "What is a paradigm?": "a model or pattern for something that may be copied."
        , "What does Node's paradigm consist of?": "Two functions: <br>1) an `export()` function to define modules, <br>2) a `require()` function to load modules."

        , "Is this mechanism flexible?": "Quite, since even circular dependencies are possible. "
        , "Does it make any assumptions?": "One important assumption: that modules can be loaded synchronously."
        , "What does 'synchronously' mean?": "?"
        , "Does the assumption still hold on the client-side, in the browser?": "No."

        , "Why?": "Because every individual JavaScript file has to be fetched over the network, and this takes too much time to wait. "

        , "If we require a module, when do we want it?": "we want it immediately."
        , "What must modules be able to do?": "depend on one another."
        , "How is this done traditionally?": "By attaching modules to the root object (window)"
        , "What is this equivalent to?": "To global variables in other programming languages." 
        , "For example...": "You do these: <br>1) load the jQuery script, <br>2) load a script that depends on the window.jQuery (or $) module."
        , "When I am working on a large project with many modules, is this approach still good?": "Unfortunately, it becomes cumbersome."
        , "What is the Asynchronous Module Definition (AMD) API?": "It is a mechanism that allows client scripts to indicate their dependencies."
        , "What do I do then?" : "You can then use a module loader that asynchronously downloads the required modules in the right order and binds them together."
        , "What is the question?": "does our project need AMD?"
        , "window root object, or should we use an AMD loader?": "?"
        , "How AMD module loaders work?": "?"

        , "What is a Markdown visualizer?": "a module which depends on the jQuery and markdown modules." 
        , "So it's a module that depends on other modules?": "?"
        , "How do I create this module in AMD?": "You call the define() method with three parameters: <br>1. the identifier of the module (optional) <br>2. the dependencies of the module (optional) <br>3. the factory function that returns the module"
        , "What do you mean by 'the factory function'?": "?"
        , "what is the `define()` method?": "It is provided by the module loader,"
        , "Which module loader?": "?"

        , "How whould I define my markdownViz.js module?": "Like this:<br> define('markdownViz', ['jQuery', 'markdown'], function ($, markdown) { var markdownViz; /* add functionality to markdownViz here */ return markdownViz;}"
        , "What is 'markdownViz?'": "the identifier of the module (optional)"
        , "What is ['jQuery', 'markdown']?": "the dependencies of the module (optional)"
        , "What is function ($, markdown) { ...?": "the factory function that returns the module."
        , "Do I put this module in a separate file?": "Yes, and you name the file markdownViz.js."
        , "What do I do to now use this module in a script file main.js?":  "You use the require() method."
        , "Do you mean, I put require() in my main.js?": "? ..." 
        , "What does the require() method do?": "It takes the dependencies of the script and the script itself: <br>require(['markdownViz', 'jQuery'], function (mdViz, $) { mdViz.init($('#textinput')); }"

        , "How do I then start this main.js script?": "You use a loader such as RequireJS. < script data-main=\"scripts/main\" src=\"scripts/require.js\">< /script >"

        , "Do you mean I put this code in my .HTML file?": "...?"

        , "How do I use RequireJS?": "?"

        , "What happens next?": 
        "Then the following process happens: <br>1. When DOM is built, the RequireJS loader [indicated in your HTML file] fetches and executes main.js."

        , "Do you mean the RequireJS loader downloads main.js and executes it?": 
        "?"

        , "What's the second step?" : 
        "2. main.js / require() stores the main function and the identifiers of its dependencies."
        , "What is the main function?": "?"

        , "What's the 3rd step?": 
        "3. The RequireJS loader fetches the scripts in its dependency list: markdownViz.js and jQuery.js."

        , "What do you mean?": 
        "?"

        , "What's the 4th step?": 
        "4. The jQuery.js module has no dependencies, so the loader executes and stores it."

        , "What do you mean 'stores' it?": 
        "...?"

        , "What's the 5th step?": 
        "5. The markdownViz.js module depends on markdown, so the loader fetches it."

        , "What's the 6th step?": 
        "6. The markdown.js module has no dependencies, so the loader executes and stores it."

        , "What's the 7th step?": 
        "7. The markdownViz.js module is executed with jQuery.js and markdown.js arguments."

        , "What's the 8th step?": 
        "8. The main function is executed with markdownViz and jQuery."

        , "What happens?": 
        "The loader only executes the factory function of a module if all of its dependencies have been loaded, passing them in to the module’s factory function."

        , "How the window approach would have worked": "?"

        , "What if I had used the window approach and thus defined markdownViz as a global variable, what would it look like?": 
        "it would look like this: window.markdownViz = { /* add functionality to markdownViz here */ };"

        , "Where would the script and its dependenciesbe loaded?":  
        "in the HTML source: <br>< script src=\"scripts/jQuery.js\"></script> <br>< script src=\"scripts/markdown.js\"></script> <br>< script src=\"scripts/markdownViz.js\"></script> <br>< script src=\"scripts/main.js\"></script>"

        , "Is this how simple it is?": 
        "Wow, this is remarkably more… simple? "

        , "So the loader script itself isn’t necessary anymore?": 
        "That's right, and so the window approach only needs 4 scripts instead of 5. "

        , "So where’s the gain? Why would we want an AMD loader instead of global variables?": 
        "?"

        , "How is the impact on testability?": 
        "appears minimal"

        , "What does the AMD philosophy seems to be partly founded on?": 
        "the fear of introducing global state." 

        , "How accepted is it that global state is bad?": 
        "Everybody agrees" 

        , "Why is it bad?": 
        "It makes it difficult to test code in isolation and to reuse a module in a different context." 

        , "Why ... ?": 
        "The Law of Demeter, also known as the Principle of Least Knowledge, tells us to ask—not look—for things." 

        , "What ... ?": 
        "According to Miško Hevery, failure to comply is a top-3 testability issue—global state itself is on the 4th spot."

        , "But JavaScript is a dynamic language!": 
        "Yes and therefore, the concept of global state is different from that of statically typed languages in which its consequences are likely more severe." 

        , "w...": 
        "Interestingly, people have argued that AMD trades global variables for global identifiers." 

        , "Does that smell like global state, too?": 
        "..."

        , "w...": 
        "Let’s therefore look at AMD and global variables from a testability perspective." 

        , "Suppose I want to test markdownViz in isolation, thus stubbing or mocking jQuery and markdown.": 
        "With AMD, you test like this: <br>function testA() {   require.define('jQuery',   { /* mock jQuery   */ });   <br>require.define('markdown', { /* mock markdown */ });   <br>require(['markdownViz'], function (markdownViz) {     /* perform test A on markdownViz here */   }; }"

        , "What about with global state?": "With global state, we have to test like as follows. Here, fetch gets the source code ofmarkdownViz with XMLHttpRequest." 

        , "...": 
        "Also, note the assumption that markdownViz only alters one global variable."

        , ".....?": "function testA() { window.jQuery =   { /* mock jQuery   */ }; <br>window.markdown = { /* mock markdown */ }; <br>fetch('scripts/markdownViz.js', function (source) { eval(source); /* perform test A on markdownViz here */ delete window.markdownViz;}); }"

        , "Are there are various (maybe shorter) ways to write the above functions?": "Of course However,both situations can easily be abstracted with a generic test function: <br>test({ jQuery:   { /* mock jQuery   */ }, markdown: { /* mock markdown */ }},function (markdownViz) {/* perform test A on markdownViz here */});"

        , "..a?":
        "So, as far as testability is concerned, the difference seems minimal, and can be hidden, since we want to avoid repetition anyway."

        , "What does it all come to?": 
        "It all comes down to your build process"

        , "a?": 
        "For both approaches, we’ve not discussed the build process yet." 

        , "b?": 
        "After all, it wouldn’t be a good idea to deploy a Web application that needs to fetch 4 or 5 scripts." 

        , "What can we do in the AMD case?": 
        "we can run the optimizer, which combines the scripts in one file and minifies them." 

        , "c?": 
        "A tiny replacement loader such as almond can then be used at runtime, making the AMD footprint minimal (but not zero)." 

        , "What about in the window case?": 
        "you have to concatenate your ordered scripts,minify them, and change the 4 script tags into one that points to your final script." 
        , "d?": 
        "This script doesn’t have any overhead."

        , "e?": 
        "Both cases can easily be incorporated in your build process." 

        , "What for the AMD case?": 
        "the tool already exists." 

        , "For the window case": 
        "You’ll have to write your own"

        , "Is it hard?": 
        "it shouldn’t be too hard: just read the script tags in order and process them."

        , "So this makes me think.": "If you need a build process anyway, how about this one?"
        , "f?": "Place a scripts.json configuration file in your project." 
        , "g?": "It can either just contain an array where the script files are in the right order (manual dependency tracking) or an array with script files and their dependencies (automatic dependency tracking)."
        , "h?": "Your HTML generator calls a script generator that reads this configuration file (and works out the right order, in case of automatic dependency tracking)."
        , "i?": "In development mode, the script generator returns a series of script tags." 
        , "For deployment...": "...it returns a minified script."
        , "Is AMD necessary anymore to track dependencies here?": "No, since they are implicitly or explicitly indicated in the configuration file. It’s then up to you whether you use global variables, or wrap the whole script in one big anonymous function. The only impossibility seems circular dependencies, but they’re a bad idea anyway. With a little effort, and only minor overhead, we could even write our scripts as CommonJS Modules, achieving Node-compatible modularization."
        , "j?": "To AMD or not to AMD?"
        , "What in the end?": "both AMD and the window approach seem to introduce some form of global state." 
        , "But is this really bad?": "First of all, the dynamic nature of JavaScript allows us to test our module with an equal effort in both cases." 
        , "Secondly": "we can still comply to the Principle of Least Knowledge by using constructor arguments (if a module returns a constructor-like object): var myMdViz = new markdownViz({ markdown: { /* mock markdown */ }}); myMdViz.init($('#textinput'));"
        , "k?": "Here, module dependencies can be passed as optional arguments." 
        , "If not present?": "the constructor defaults to the global modules."
        , "That’s definitely testable, and it’s also really easy.": "So with the right build process, I don’t think your project needs AMD." 
        , "W?": "You still have to know the dependencies between modules, but they’re just specified in a different way, and your build script can easily figure that our for you."
      }; // end object
      return object;
    } // end getObject
  } // end return
}); // end define

//window.onload = func;

/*
require(['printobject'], function (printobject) { 
  var bag;
  bag = printobject(object);
  document.getElementById('a').innerHTML = bag;
*/



