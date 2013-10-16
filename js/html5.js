
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
     "addColorStop()":"http://www.w3schools.com/tags/canvas_addcolorstop.asp"
   , "arc()":"http://www.w3schools.com/tags/canvas_arc.asp"
   , "beginPath()":"http://www.w3schools.com/tags/canvas_beginpath.asp"
   , "button CSS": "http://jsfiddle.net/terkel/ap8vT/"
   , "canvas":"http://www.w3schools.com/html/html5_canvas.asp"
   , "createLinearGradient()":"http://www.w3schools.com/tags/canvas_createlineargradient.asp"
   , "createRadialGradient()":"http://www.w3schools.com/tags/canvas_createradialgradient.asp"
   , "fillRect()":"http://www.w3schools.com/tags/canvas_fillrect.asp"
   , "fillStyle":"http://www.w3schools.com/tags/canvas_fillstyle.asp"
   , "fillText()":"http://www.w3schools.com/tags/canvas_filltext.asp"
   , "font=":"http://www.w3schools.com/tags/canvas_font.asp"
   , "getElementById()":"http://www.w3schools.com/jsref/met_doc_getelementbyid.asp"
   , "drawImage()":"http://www.w3schools.com/tags/canvas_drawimage.asp"
   , "input tag" : "http://www.w3schools.com/tags/tag_input.asp"
   , "lineTo()":"http://www.w3schools.com/tags/canvas_lineto.asp"
   , "moveTo()":"http://www.w3schools.com/tags/canvas_moveto.asp"
   , "onclick" : "http://www.w3schools.com/jsref/event_onclick.asp"
   , "stroke()":"http://www.w3schools.com/tags/canvas_stroke.asp"
   , "strokeText()":"http://www.w3schools.com/tags/canvas_stroketext.asp"
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

