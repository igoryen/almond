
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
      "A Beautiful Exchange": "https://www.youtube.com/watch?v=r-bUZj1bkoE"
    , "A Wealthy Place": "http://www.youtube.com/watch?v=2O_eF1eZk0g"
    , "Be Thou My Vision": "http://www.youtube.com/watch?v=Wk2LWZ9PHPY&NR=1&feature=fvwp"
    , "Bless the Lord": "https://www.youtube.com/watch?NR=1&v=RWJLy3-iRQo&feature=endscreen"
    , "Blessed the Lord - live": "http://www.youtube.com/watch?v=DXDGE_lRI0E"
    , "Break Every Chain": "https://www.youtube.com/watch?v=kNAV98bAqng"
    , "Breath": "http://www.youtube.com/watch?v=sBCC1kDVVWk"
    , "Christian classical music": "http://www.youtube.com/watch?v=qAJNg5iuEGU"
    , "Eighth Wonder": "http://www.youtube.com/watch?v=WUJSElja3d4"
    , "Everything`s gonna be all right in Christ": "https://www.youtube.com/watch?v=uYXyo4kCffg"
    , "God will Come": "https://www.youtube.com/watch?v=qYS4BP-l37k"
    , "He picked me up": "http://www.youtube.com/watch?v=_oitOA-boqU#t=01m10s"
    , "I'll be around": "http://www.youtube.com/watch?v=1IrH1tKyJQ0"
    , "I Surrender": "https://www.youtube.com/watch?v=HcnfT4arZtI"
    , "I will enter His Gates 1": "https://www.youtube.com/watch?v=aLcpLD5DHDU"
    , "I will enter His Gates 2": "https://www.youtube.com/watch?v=nr_YiSZ8KBc"
    , "Jesus is ALWAYS with you": "http://www.godtube.com/watch/?v=0FBFCFNU&utm_source=GodTube%20Must-See%20-%20Mobile&utm_medium=email&utm_campaign=03/02/2013"
    , "Lord`s Prayer, the (M.W.Smith)": "http://www.youtube.com/watch?v=tZFqlYLGoGY"
    , "Maranatha Double Praise 01": "https://www.youtube.com/watch?v=F3X0KhvJwsQ"
    , "Maranatha Double Praise 02": "https://www.youtube.com/watch?v=jfAbAOI-aj0"
    , "Maranatha Double Praise 03": "https://www.youtube.com/watch?v=Z_Sg93io5c4"
    , "Maranatha Double Praise 04": "https://www.youtube.com/watch?v=dd0O7GPR6QE"
    , "Maranatha Double Praise 08": "https://www.youtube.com/watch?v=Bl0R9AT0lPk"
    , "Maranatha Double Praise 11": "https://www.youtube.com/watch?NR=1&feature=endscreen&v=uyrxmG1Ctio"
    , "Maranathe Double Praise 14": "https://www.youtube.com/watch?v=Pce_M-XT8Jc"
    , "My Jesus I love Thee": "http://www.youtube.com/watch?v=EYfBZnMve_E"
    , "Never Once": "http://www.youtube.com/watch?v=n1bXG4WIesA"
    , "Open Sky - Iona": "https://www.youtube.com/watch?v=0c6g0HItFdg"
    , "Reggae Praise": "https://www.youtube.com/watch?v=v5tWLQfFhmA&list=PL99DC3501551CA6FC"
    , "Secret Ambition - M.W.Smith": "http://www.youtube.com/watch?v=2vHedm6ycsY"
    , "Something More": "https://www.youtube.com/watch?v=GrV_ZvwZRvw"
    , "Stars will grow dim 1": "http://www.youtube.com/watch?v=yeRRpr2JA60"
    , "Stars will grow dim 2":"http://www.youtube.com/watch?v=4Ip_XXAgv18"
    , "The One Who Saves": "https://www.youtube.com/watch?v=we4p6GzcWIM"
    , "This is my desire - Hillsong": "https://www.youtube.com/watch?v=-XKxqqhOgVM"
    , "To the Ends of the Earth": "https://www.youtube.com/watch?v=UvD4kYus0rM"
    , "White Heart, playlist": "https://www.youtube.com/watch?v=O7OGieXHM5g&list=AL94UKMTqg-9AYWb49qcFdqYVR-wmfaov7"
    , "You raise me up 1": "http://www.youtube.com/watch?v=7jfMoa912fY"
    , "You raise me up 2": "https://www.youtube.com/watch?v=aJxrX42WcjQ"
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

