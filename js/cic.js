var object = {  // 25
    "CEC (Can.Exp.Class)": "http://www.cic.gc.ca/english/immigrate/cec/index.asp"
  , "Citizenship apply": "http://www.cic.gc.ca/english/citizenship/become.asp"
  , "Dependent Child": "http://www.cic.gc.ca/english/helpcentre/glossary.asp#dependent_child"
  , "Residence calculator": "https://eservices.cic.gc.ca/rescalc/resCalcStartNew.do?&lang=en"
  , "PR requirements": "http://www.cic.gc.ca/english/helpcentre/answer.asp?q=355&t=5"
};

// 26
function insensitive(s1, s2) {
  var s1lower = s1.toLowerCase();
  var s2lower = s2.toLowerCase();
  return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);
}

// 27
function printObj(obj){
  var keys = [];  // 28
  var currentKey,nextKey, f;
  var bag = "";
  var startingLetter = "";

  for (var k in obj){  // 29
    if (obj.hasOwnProperty(k)){ // 30
      keys.push(k);   // 31
    }
  }

  keys.sort(insensitive); // 32

  for (f = 0; f < keys.length; f++) {  // 33

    if (!keys[f - 1]) {
      bag = "<hr>" + keys[f].charAt(0).toUpperCase() + "<br>";
    }

    startingLetter = ""; // 34

    // 35
    currentKey = keys[f]; // 37
    if (keys[f + 1]) {   // 38
      nextKey = keys[f + 1]; // 39
    }
    else {
      nextKey = ' ';
    }

    if( currentKey.toLowerCase().charAt(0)  != nextKey.toLowerCase().charAt(0) ){
    // 40, 41
    startingLetter += "<hr>" + nextKey.toUpperCase().charAt(0) + "<br>";
    // 42
  }

  bag += '<a href="'+ obj[currentKey] + '" target="_blank">'+ currentKey + '</a><br>';
  bag += startingLetter; // 43

  } // for()
    return bag; // 36
}; // printObj()

//window.onload = printObj(funnyObj);
function func (){
  var element = document.getElementById('display_pane');
  element.innerHTML = printObj(object);
}

 window.onload = func;
