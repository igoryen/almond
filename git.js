
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
    "Abiu":"https://github.com/igoryen/abiu"
    , "Acerola":"https://github.com/igoryen/acerola"
    , "Ackee":"https://github.com/igoryen/ackee"
    , "Ali Al Dallal" : "https://github.com/alicoding"
    , "Almond": "https://github.com/igoryen/almond"
    , "Ambarella":"https://github.com/igoryen/ambarella"
    , "Amore":"https://github.com/humphd/amore.webmaker.org"
    , "Apple":"https://github.com/igoryen/apple"
    , "Apricot":"https://github.com/igoryen/apricot"
    , "Araza":"https://github.com/igoryen/araza"
    , "Atemoya":"https://github.com/igoryen/atemoya"
    , "Avocado":"https://github.com/igoryen/avocado"
    , "Banana":"https://github.com/igoryen/banana"
    , "Create a repo":"https://help.github.com/articles/create-a-repo"
    , "Culinary fruit, list":"http://en.wikipedia.org/wiki/List_of_culinary_fruits"
    , "David Humphrey" : "https://github.com/humphd/"
    , "EJS":"https://github.com/visionmedia/ejs"
    , "foreman" : "https://github.com/ddollar/foreman"
    , "Friendlycode":"https://github.com/mozilla/friendlycode"
    , "Transifex":"https://www.transifex.com/projects/p/friendlycode/"
    , "Friendlycode, trivial embedding":"http://localhost:8005/examples/bare.html"
    , "Friendlycode, alternate publishing":"http://localhost:8005/examples/alternate-publisher.html"
    , "Transifex":"http://localhost:8005/examples/transifex.html"
    , "Friendly code, l10ns":"http://localhost:8005/examples/transifex.html?local=1"
    , "git blame":"http://jeanbahnik.com/2012/05/using-git-blame/"
    , "git Book":"http://git-scm.com/book"
    , "git: install":"https://help.github.com/articles/set-up-git"
    , "git reference":"http://gitref.org/basic/"
    , "Gobbledygook":"https://github.com/lloyd/gobbledygook"
    , "Hello World!":"https://github.com/alicoding/Hello-World/"
    , "Interactive Rebase":"https://help.github.com/articles/interactive-rebase"
    , "Igoryen":"https://github.com/igoryen"
    , "localhost:3000":"http://localhost:3000"
    , "localhost:7777":"http://localhost:7777"   
    , "Mango":"https://github.com/igoryen/mango"
    , "Markdown Syntax":"https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md"
    , "My links": "https://github.com/igoryen/mylinks"
    , "NVM": "https://github.com/creationix/nvm"
    , "nodemon" : "https://github.com/remy/nodemon"
    , "Pay attention to Node.js":"http://readwrite.com/2010/10/20/why-developers-should-pay-atte"
    , "Power your workflow":"https://www.youtube.com/watch?v=GYnOwPl8yCE"
    , "Spectrum (Ali)" : "https://github.com/alicoding/spectrum"
    , "SSH keys: generating":"https://help.github.com/articles/generating-ssh-keys"
    , "SIL2013":"https://github.com/storytellinginnovationlab2013"
    , "10 things I hate about git":"http://steveko.wordpress.com/2012/02/24/10-things-i-hate-about-git/"
    , "Test":"https://github.com/igoryen/Test"
    , "Toolness":"https://github.com/toolness"
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

