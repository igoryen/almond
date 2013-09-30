
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
      "870429 - locales": "https://bugzilla.mozilla.org/show_bug.cgi?id=870429"
    , "869643 - MONGO": "https://bugzilla.mozilla.org/show_bug.cgi?id=869643"
    , "873064 - prune": "https://bugzilla.mozilla.org/show_bug.cgi?id=873064"
    , "873098 - old code": "https://bugzilla.mozilla.org/show_bug.cgi?id=873098"
    , "877269 - MakeAPI unit tests": "https://bugzilla.mozilla.org/show_bug.cgi?id=877269"
    , "877269 - github" : "https://github.com/humphd/MakeAPI/tree/bug877269"
    , "877305 - comma": "https://bugzilla.mozilla.org/show_bug.cgi?id=877305"
    , "881734 - audit": "https://bugzilla.mozilla.org/show_bug.cgi?id=881734"
    , "870995 - Make! - '!'": "https://bugzilla.mozilla.org/show_bug.cgi?id=870995"
    , "883426 - update module": "https://bugzilla.mozilla.org/show_bug.cgi?id=883426"
    , "885193 - search field": "https://bugzilla.mozilla.org/show_bug.cgi?id=885193"
    , "888565 - login.webm... l10n": "https://bugzilla.mozilla.org/show_bug.cgi?id=888565"
    , "889322 - wm.org 4 html files (ref)": "https://bugzilla.mozilla.org/show_bug.cgi?id=889322"
    , "891491 - i18n-abide on wm.org (ref)": "https://bugzilla.mozilla.org/show_bug.cgi?id=891491"
    , "891914 - Localize wm.org/event-guides": "https://bugzilla.mozilla.org/show_bug.cgi?id=891914"
    , "892631 - Localize privacy and /terms": "https://bugzilla.mozilla.org/show_bug.cgi?id=892631"
    , "896623 - take string off the static" : "https://bugzilla.mozilla.org/show_bug.cgi?id=896623"
    , "899703 - Duplicate paragraph": "https://bugzilla.mozilla.org/show_bug.cgi?id=899703"
    , "900668 - Reorder cond. checks": "https://bugzilla.mozilla.org/show_bug.cgi?id=900668"
    , "901975 - created event confirm": "https://bugzilla.mozilla.org/show_bug.cgi?id=901975"
    , "902115 - Remove 'Layer #'": "https://bugzilla.mozilla.org/show_bug.cgi?id=902115"
    , "902458 - localize wm-events": "https://bugzilla.mozilla.org/show_bug.cgi?id=902458"
    , "908331 - guides -> event-guides": "https://bugzilla.mozilla.org/show_bug.cgi?id=908331"
    , "918052 - missing gettext()": "https://bugzilla.mozilla.org/show_bug.cgi?id=918052"
    , "918424 - a string unlocalized": "https://bugzilla.mozilla.org/show_bug.cgi?id=918424"
    , "920162 - localized but": "https://bugzilla.mozilla.org/show_bug.cgi?id=920162"
    , "921059 - l10n of Text/Popup plugin": "https://bugzilla.mozilla.org/show_bug.cgi?id=921059"
    , "921505 - Make not localized": "https://bugzilla.mozilla.org/show_bug.cgi?id=921505"
    , "922130 - Add Events back to Eng": "https://bugzilla.mozilla.org/show_bug.cgi?id=922130"
    , "Bugzilla": "https://bugzilla.mozilla.org/"
    , "Bugzilla: work with bugs": "http://sedgestuff.wordpress.com/2013/05/09/howto-working-with-open-bugs-on-bugzilla/"
    , "Dashboard - Bugzilla": "https://bugzilla.mozilla.org/page.cgi?id=mydashboard.html"
    , "Scrumbu.gs" : "http://scrumbu.gs/"
    , "Scrumbu.gs Webmaker" : "http://scrumbu.gs/t/webmaker/"
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

