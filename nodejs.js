
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
    "API": "http://nodejs.org/api/all.html"
    , "Avocado": "http://localhost:8005/index.html"
    , "Beginner Book": "http://www.nodebeginner.org/"
    , "Beginner`s Tutorial": "http://project70.com/nodejs/beginners-tutorial-node-js/"
    , "Buffer": "https://github.com/coolaj86/browser-buffer"
    , "commander": "https://npmjs.org/package/commander"
    , "config": "https://npmjs.org/doc/config.html"
    , "What is it good for?": "http://readwrite.com/2011/01/25/wait-whats-nodejs-good-for-aga"
    , "EJS [puke]": "http://embeddedjs.com/"
    , "Event-driven programming": "http://code.danyork.com/2011/01/25/node-js-doctors-offices-and-fast-food-restaurants-understanding-event-driven-programming/"
    , "Everyone`s talking about it": "http://mashable.com/2011/03/10/node-js/"
    , "exports (github)": "https://github.com/vesln/exports"
    , "express (npm.js)": "https://npmjs.org/package/express"
    , "express js": "http://expressjs.com/"
    , "Express Guide": "http://expressjs.com/guide.html"
    , "express-locale": "https://npmjs.org/package/express-locale"
    , "First Look": "http://www.lynda.com/Nodejs-tutorials/Nodejs-First-Look/101554-2.html"
    , "fs": "http://nodejs.org/api/fs.html#fs_file_system"
    , "for beginners": "http://net.tutsplus.com/tutorials/javascript-ajax/node-js-for-beginners/"
    , "fs.writeFile()": "http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback"
    , "Get started": "http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js"
    , "gobbledygook": "https://npmjs.org/package/gobbledygook"
    , "habitat (library)": "https://github.com/brianloveswords/habitat"
    , "How to Node": "http://howtonode.org/streams-explained"
    , "Intro by Ryan Dahl": "http://www.youtube.com/watch?v=jo_B4LTHi3I"
    , "joyent/node": "https://github.com/joyent/node/wiki/modules"
    , "Mailing list": "https://groups.google.com/forum/?fromgroups#!forum/nodejs"
    , "Mixu`s Node book": "http://book.mixu.net/ch1.html"
    , "mkpath": "https://npmjs.org/package/mkpath"
    , "Node by Example": "http://blog.osbutler.com/categories/node-by-example/?page=3"
    , "Nodecasts": "http://nodecasts.net/"
    , "Nodecore vs Userland": "https://github.com/joyent/node/wiki/node-core-vs-userland"
    , "Nodeguide": "http://nodeguide.com/"
    , "NodeJS on Fedora": "http://fedoraproject.org/wiki/Features/NodeJS"
    , "Node Tuts": "http://nodetuts.com/"
    , "Node wiki": "https://github.com/joyent/node/wiki"
    , "npm cheatsheet": "http://blog.nodejitsu.com/npm-cheatsheet"
    , "NPMjs": "https://npmjs.org/"
    , "package.json": "https://npmjs.org/doc/json.html"
    , "nodejitsu": "http://package.json.nodejitsu.com/"
    , "path": "http://nodejs.org/docs/v0.4.9/api/path.html"
    , "path.join()": "http://nodejs.org/api/path.html#path_path_join_path1_path2"
    , "Pay attention to Node.js": "http://readwrite.com/2010/10/20/why-developers-should-pay-atte"
    , "Presented by Ryan Dahl": "http://www.infoq.com/presentations/nodejs"
    , "request 1": "https://github.com/mikeal/request"
    , "require()": "https://npmjs.org/package/require"
    , "request 2":"https://npmjs.org/package/request"
    , "Style guide": "http://nodeguide.com/style.html"
    , "20 challenges in Node.js": "http://nodejs.org/jsconf-eu-2010.pdf"
    , "typeof": "https://npmjs.org/package/typeof"
    , "understanding ~": "http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb"
  }; // end object

    //----------------------------------------------------------------------------



  
  //----------------------------------------------------------------------------
// this function helps make sort() case-insensitive

function insensitive(s1, s2) {
  var s1lower = s1.toLowerCase();
  var s2lower = s2.toLowerCase();

  return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);

}
//----------------------------------------------------------------------------





//----------------------------------------------------------------------------
// function to print out a js object

function printObj(obj){

  var keys = [];  // declare variable to put array keys in
  var currentKey,nextKey, f;
  var bag = "";
  var startingLetter = "";

  for (var k in obj){  // for every key in json object 
    if (obj.hasOwnProperty(k)){ // if key has a property 
      keys.push(k);   // put key (and its property) into the -keys- array
    }
  } // end for()

  keys.sort(insensitive); // sort the -keys- array regardless of case





  for (f = 0; f < keys.length; f++) {  // for each of the elements of the -keys- array

    //------------
    if (!keys[f - 1]) {
      bag = "<hr>" + keys[f].charAt(0).toUpperCase() + "<br>";
    }
    //----------------

    startingLetter = "";     // empty the main letter variable

    // assign the current key and the next jey
    currentKey = keys[f]; //console.log('currentKey: '+ currentKey);
    if (keys[f + 1]) {   // if nextKey exists
      nextKey = keys[f + 1]; //console.log('nextKey: ' + nextKey);
    }
    else {

      nextKey = ' ';
    }

    if( currentKey.toLowerCase().charAt(0)  != nextKey.toLowerCase().charAt(0) ){
    //console.log('in if()');
    //console.log(currentKey.charAt(0).toLowerCase() + " vs " + nextKey.charAt(0).toLowerCase());
    startingLetter += "<hr>" + nextKey.toUpperCase().charAt(0) + "<br>";
    //console.log('startingLetter: '+startingLetter);
  }



  bag += '<a href="'+ obj[currentKey] + '" target="_blank">'+ currentKey + '</a><br>';

  bag += startingLetter; // add the letter to the bag

  } // end for()
      return bag; // if you use 'document.write()' the document will have only the contents of the object on white background
}; // end printObj()

//=========================================================================================
 //window.onload = printObj(funnyObj);
 function func (){
  var element = document.getElementById('display_pane');
  element.innerHTML = printObj(object);
 }

 window.onload = func;

