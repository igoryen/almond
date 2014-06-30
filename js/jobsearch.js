
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
      "8 things you do wrong on linkedin" : "http://www.forbes.com/sites/glassheel/2012/05/10/the-8-things-you-do-wrong-on-linkedin/"
    , "10 Qualities of Exceptional Interviewers": "http://www.linkedin.com/today/post/article/20130618124448-20017018-10-qualities-of-exceptional-interviewers?goback=.gde_50512_member_252151575"
    , "Brothel line-up?": "http://www.askamanager.org/2012/05/im-afraid-im-about-to-be-offered-a-job-i-wont-be-good-at.html"
    , "Embanet": "http://embanet.com/" 
    , "Fivel": "http://www.fivel.ca/"
    , "Interview Tips 1": "https://www.youtube.com/watch?v=wllwJM6EyOI"
    , "Interview Tips 2": "http://www.richattitude.com/2013/04/excellent-job-interview-tips.html"
    , "Linked In": "http://www.linkedin.com/"
    , "Monster": "http://www.monster.ca/"
    , "RBC jobs ": "https://performancemanager4.successfactors.com/career?company=RBC",
    "Age Is No Barrier to Gaining IT Skills": "https://www.netacad.com/web/about-us/two-students-prove-age-is-no-barrier-to-gaining-it-skills",
    "Beating the Age Barrier": "http://www.kellyservices.co.in/IN/Careers/Career-Tips/Beating-the-Age-Barrier/#.UpjYF2RDs5Q",
    "Avoid The Age Barrier in Your Cover Letter": "http://career-advice.monster.ca/resumes-cover-letters/cover-letter-tips/avoid-age-barrier-in-cover-letter/article.aspx"
  }; // end object

    //--------------------------------------------------------------------------



  
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

