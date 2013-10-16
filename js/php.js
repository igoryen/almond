
//-----------------------------------------------------------------------------------------

// create an object
  var object = {
     "Arrays": "http://zenit.senecac.on.ca/~int322_123a07/practice/121025_arrays.php"
    , "Asgmt 1 ": "http://zenit.senecac.on.ca/~int322_123a07/assign1/add.php"
    , "Asgmt 2 ": "https://zenit.senecac.on.ca/~int322_123a07/assign2/login.php"
    , "Caseless": "http://zenit.senecac.on.ca/~int322_123a07/practice/caseless.php"
    , "Classes 01": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_classes_01.php"
    , "Classes 02": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_classes_02.php"
    , "Code Anywhere . net": "https://codeanywhere.net/"
    , "CodePad Viper 7": "http://codepad.viper-7.com/"
    , "CodePad.org": "http://codepad.org/"
    , "Lab 5-1": "http://zenit.senecac.on.ca/~int322_123a07/lab5/cookies.php"
    , "DB thru classes": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_class_db_01.php"
    , "Encrypting": "http://zenit.senecac.on.ca/~int322_123a07/practice/121120_encrypting.php"
    , "Escaping (advanced)": "http://zenit.senecac.on.ca/~int322_123a07/practice/121024_advanced_escaping_001.php"
    , "Ideone.com": "http://ideone.com/"
    , "Lab 1 ": "http://zenit.senecac.on.ca/~int322_123a07/lab1/lab1.php"
    , "Lab 2 ": "http://zenit.senecac.on.ca/~int322_123a07/lab2/forms-part3.php"
    , "Lab 3 ": "http://zenit.senecac.on.ca/~int322_123a07/lab3/mysqlform.php"
    , "Lab 4-1 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv.php"
    , "Lab 4-2 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv2.php"
    , "Lab 4-3 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/pcv3.php"
    , "Lab 4-4 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_4.php"
    , "Lab 4-5 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_5.php"
    , "Lab 4-6 ": "http://zenit.senecac.on.ca/~int322_123a07/lab4/lab4_6.php"
    , "Lab 5-2a": "http://zenit.senecac.on.ca/~int322_123a07/lab5/login.php"
    , "Lab 5-2b": "http://zenit.senecac.on.ca/~int322_123a07/lab5/login.php"
    , "Lab 6": "http://zenit.senecac.on.ca/~int322_123a07/lab6/myClasses.php"
    , "Lab6": "http://zenit.senecac.on.ca/~int322_123a07/lab6/testMenu.php"
    , "oo-login.php": "http://zenit.senecac.on.ca/~int322_123a07/lab6/oo-login.php"
    , "online PHP functions": "http://sandbox.onlinephpfunctions.com/"
    , "testMenu.php": "http://zenit.senecac.on.ca/~int322_123a07/lab6/testMenu.php"
    , "login prx": "http://zenit.senecac.on.ca/~int322_123a07/practice/login_prx.php"
    , "My_class": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_destructor_01.php"
    , "Reg Ex": "http://zenit.senecac.on.ca/~int322_123a07/practice/121028_regex.php"
    , "Salve!": "http://zenit.senecac.on.ca/~int322_123a07/practice/121110_specialMethodsPHP5_test.php"
    , "Strings": "http://zenit.senecac.on.ca/~int322_123a07/practice/121028_strings.php"
    , "a.php": "http://zenit.senecac.on.ca/~int322_123a07/practice/templating/a.php"
    , "cc.html": "http://zenit.senecac.on.ca/~int322_123a07/practice/templating/cc.html"
    , "dd.php": "http://zenit.senecac.on.ca/~int322_123a07/practice/templating/dd.php"
    , "ff.php": "http://zenit.senecac.on.ca/~int322_123a07/ff.php"
    , "gg.php": "http://zenit.senecac.on.ca/~int322_123a07/gg.php"
    , "hh.php": "http://zenit.senecac.on.ca/~int322_123a07/hh.php"
    , "test1.php": "http://zenit.senecac.on.ca/~int322_123a07/practice/test1.php"
    , "write code online": "http://writecodeonline.com/php/"

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

