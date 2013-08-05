
/*
var objRegExp = /(\w+)\s(\w+)/;
var strFullName = "Jane Doe";
var strReverseName = strFullName.replace(objRegExp, "$2, $1");
  document.write(strReverseName + "<br>") //alerts "Doe, John"
  */
  function bbb() {
    document.getElementById("here").innerHTML= bbb2();
  };

  var bbb2 = function(){
    document.write("Hello!<br>");


    var alpha = [

    

    '<hr><b>A</b><br>'
    , '<!--A-->'
    



    , '<!--B-->'
    , '<hr><b>B</b><br>'
    



    , '<!--C-->'
    , '<hr><b>C</b><br>'




    , '<!--D-->'
    , '<hr><b>D</b><br>'

    , '<a href="http://requirejs.org/docs/api.html#i18n" target="_blank">Define an i18n bundle</a> <i></i><br>'    

    
    
    
    



    , '<!--E-->'
    , '<hr><b>E</b><br>'
    
    , '<!--F-->'
    , '<hr><b>F</b><br>'
    


    , '<!--G-->'
    , '<hr><b>G</b><br>'

    , '<!--H-->'
    , '<hr><b>H</b><br>'
    



    , '<!--I-->'
    , '<hr><b>I</b><br>'



    , '<!--J-->'
    , '<hr><b>J</b><br>'
    
    

    


    , '<!--K-->'
    , '<hr><b>K</b><br>'

    , '<!--L-->'
    , '<hr><b>L</b><br>'
    

    , '<!--M-->'
    , '<hr><b>M</b><br>'
    , '<a href="http://help.transifex.com/intro/projects.html#managing-your-project" target="_blank">Managing your project</a> <i></i><br>'

    
    , '<!--N-->'
    , '<hr><b>N</b><br>'

    , '<!--O-->'
    , '<hr><b>O</b><br>'
    

    , '<!--P-->'
    , '<hr><b>P</b><br>'
    , '<a href="http://help.transifex.com/intro/projects.html#projects" target="_blank">Projects</a> <i></i><br>'



    , '<!--Q-->'
    , '<hr><b>Q</b><br>'


    , '<!--R-->'
    , '<hr><b>R</b><br>'
    
    
    
    


    , '<!--S-->'
    , '<hr><b>S</b><br>'
    , '<a href="http://en.wikipedia.org/wiki/Single_sign-on" target="_blank">SSO</a> <i></i><br>'
    



    , '<!--T-->'
    , '<hr><b>T</b><br>'
    , '<a href="http://help.transifex.com/features/api/api-v2.html#translations" target="_blank">Translations</a> <i></i><br>'



    , '<!--U-->'
    , '<hr><b>U</b><br>'

    , '<!--V-->'
    , '<hr><b>V</b><br>'

    , '<!--W-->'
    , '<hr><b>W</b><br>'
    
    , '<!--X-->'
    , '<hr><b>X</b><br>'

    , '<!--Y-->'
    , '<hr><b>Y</b><br>'

    , '<!--Z-->'
    , '<hr><b>Z</b><br>'  





    ];



//---------------------------------------------------
 // var objRegExp = /(\w+)\s(\w+)/;

//var regex = /<\/a>.*$/;  // find all (</a>) and all the characters after it until the line-end ($)
//var regexLetters = /<!--[A-Z]-->/;   // find all char. combos that are like this  ('<!--Y-->')
//var regexLetters2 = /<hr><b>[A-Z]<\/b><br>/;  // find all the char-combos like this ('<hr><b>Y</b><br>')
//var regex2 = /(\w+)\>(\w+)/;
var bravo = new Array(); // array for ready strings
var charlie  = new Array(); // a bin
document.write("alpha.length is " + alpha.length + "<br>");
//---------
  for (var j=0; j<alpha.length; j++){           // look through all the -alpha-, at its every element, and process each element as follows:

    alpha[j] = alpha[j].replace(/<hr><b>[A-Z]<\/b><br>/, '');  // remove all ABC
           //document.write("after removing all ABC\'s: " + alpha[j]);

    alpha[j] = alpha[j].replace('<a href=', '');          // remove all this (<a href=)
    alpha[j] = alpha[j].replace('target="_blank"', '');   // remove all this (target="_blank")

    alpha[j] = alpha[j].replace(/<\/a>.*$/, '');               // remove all this (</a>) and all the following to line-end

    //alpha[j] = alpha[j].replace(/<!--[A-Z]-->/, '');  
    alpha[j] = alpha[j].replace(/\s+/, ''); // remove all 1 and > spaces

    alpha[j] = alpha[j].replace(/(\".+\")\>(.+)/, '"$2":$1');  
               //document.write("a -> "+alpha[j] + "<br>");

    if ( !alpha[j] || (alpha[j].search("http") == -1) ){ // if element is 'not truthy' (is empty) OR search for 'http' returned 'none' (-1)
      charlie.push(alpha[j]); // discard the element (-charlie- is the bin)
    } // end if()
    else bravo.push(alpha[j]); // else, put the element into -bravo-

  } // end for()




//--------------
document.write("bravo.length is " + bravo.length + "<br>" );
//document.write("removed empty elements: " + (alpha.length - bravo.length) + "<br/>");
document.write("charlie.length (removed elements) is " + charlie.length + "<br>")

//------------------------------------------------------
document.write("<ol>");

for (var a in charlie){
  document.write("<li><mark>>>>" + charlie[a] + "<<<</mark></li>");

}
document.write("</ol>")    
//------------------------------------------------------

document.write("<ol>");
for (var k=0; k<bravo.length; k++){             // print out the ready array

  // document.write("<li>" + bravo[k] + "</li>");
   document.write(", " + bravo[k] + "<br>");

    } // end for()
document.write("</ol>")    
//------------------------------------------------------

}; // end bbb2()
//------------------