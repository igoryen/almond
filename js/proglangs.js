  
//   //----------------------------------------------------------------------------
// // this function helps make sort() case-insensitive

// function insensitive(s1, s2) {
//   var s1lower = s1.toLowerCase();
//   var s2lower = s2.toLowerCase();

//   return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);

// }
// //----------------------------------------------------------------------------





// //----------------------------------------------------------------------------
// // function to print out a js object

// function printObj(obj){

//   var keys = [];  // declare variable to put array keys in
//   var currentKey,nextKey, f;
//   var bag = "";
//   var startingLetter = "";

//   for (var k in obj){  // for every key in json object 
//     if (obj.hasOwnProperty(k)){ // if key has a property 
//       keys.push(k);   // put key (and its property) into the -keys- array
//     }
//   } // end for()

//   keys.sort(insensitive); // sort the -keys- array regardless of case





//   for (f = 0; f < keys.length; f++) {  // for each of the elements of the -keys- array

//     //------------
//     if (!keys[f - 1]) {
//       bag = "<hr>" + keys[f].charAt(0).toUpperCase() + "<br>";
//     }
//     //----------------

//     startingLetter = "";     // empty the main letter variable

//     // assign the current key and the next jey
//     currentKey = keys[f]; //console.log('currentKey: '+ currentKey);
//     if (keys[f + 1]) {   // if nextKey exists
//       nextKey = keys[f + 1]; //console.log('nextKey: ' + nextKey);
//     }
//     else {

//       nextKey = ' ';
//     }

//     if( currentKey.toLowerCase().charAt(0)  != nextKey.toLowerCase().charAt(0) ){
//     //console.log('in if()');
//     //console.log(currentKey.charAt(0).toLowerCase() + " vs " + nextKey.charAt(0).toLowerCase());
//     startingLetter += "<hr>" + nextKey.toUpperCase().charAt(0) + "<br>";
//     //console.log('startingLetter: '+startingLetter);
//   }



//   bag += '<a href="'+ obj[currentKey] + '" target="_blank">'+ currentKey + '</a><br>';

//   bag += startingLetter; // add the letter to the bag

//   } // end for()
//       return bag; // if you use 'document.write()' the document will have only the contents of the object on white background
// }; // end printObj()

// //=========================================================================================
//  //window.onload = printObj(funnyObj);
//  function func (){
//   var element = document.getElementById('display_pane');
//   element.innerHTML = printObj(object);
//  }

//  window.onload = func;


var acies = [
    {   name: "action=",
        of: "html",
        url: "http://www.w3schools.com/tags/att_form_action.asp"
    },
    {   name: "add()",
        of: "Java",
        on: "Container",
        url: "http://docs.oracle.com/javase/7/docs/api/java/awt/Container.html#add(java.awt.Component)"
    }, 
    {   name: "addColorStop()",
        of: "html",
        url: "http://www.w3schools.com/tags/canvas_addcolorstop.asp"
    },
    { name: "addObject()",
      on: "ModelAndView",
      url: "http://docs.spring.io/spring/docs/2.5.x/api/org/springframework/web/servlet/ModelAndView.html#addObject(java.lang.Object)"
    },    
    { name: "alert()",
      of: "JavaScript",
      on: "Window",
      url: "http://www.w3schools.com/jsref/met_win_alert.asp"
    },    
    { name: "all",
      of: "xs",
      url: "http://www.w3schools.com/schema/el_all.asp"
    },    
    { name: "annotation",
      on: "javax.xml.bind",
      url: "http://docs.oracle.com/javaee/5/api/javax/xml/bind/annotation/package-summary.html"
    },    
    { name: "append()",
      on: "StringBuffer",
      of: "Java",
      url: "http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#append(boolean)"
    },    
    { name: "appendChild()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/met_node_appendchild.asp"
    },    
    { name: "arc()",
      of: "html",
      url: "http://www.w3schools.com/tags/canvas_arc.asp"
    },    
    { name: "attribute 1",
      of: "xsd",
      url: "http://www.w3schools.com/schema/schema_simple_attributes.asp"
    },    
    { name: "attribute 2",
      of: "xsd",
      url: "http://msdn.microsoft.com/en-us/library/ms256143(v=vs.110).aspx"
    },    
    { name: "back()",
      of: "JavaScript",
      on: "History",
      url: "http://www.w3schools.com/jsref/met_his_back.asp"
    },    
    { name: "background()",
      of: "processing",
      url: "https://www.processing.org/reference/background_.html"
    },    
    { name: "basename()",
      of: "JavaScript",
      on: "OS.Path",
      url: "https://developer.mozilla.org/en-US/docs/JavaScript_OS.File/OS.Path#OS.Path.basename"
    },    
    { name: "basename()",
      on: "path",
      of: "Node.js",
      url: "http://nodejs.org/api/path.html#path_path_basename_p_ext"
    },    
    { name: "beginPath()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_beginpath.asp"
    },    
    { name: "beginShape()",
      of: "processing",
      url: "http://processing.org/reference/beginShape_.html"
    },    
    { name: "bgColor=",
      of: "html",
      url: "http://www.w3schools.com/tags/att_body_bgcolor.asp"
    },    
    { name: "ceil()",
      of: "JavaScript", 
      url: "http://www.w3schools.com/jsref/jsref_ceil.asp"
    },    
    { name: "charset=",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/prop_anchor_charset.asp"
    },    
    { name: "choice",
      of: "xs",
      url: "http://www.w3schools.com/schema/el_choice.asp"
    },
    { name: "close()",
      of: "Java",
      on: "Statement",
      url: "http://docs.oracle.com/javase/7/docs/api/java/sql/Statement.html#close()"
    },    
    { name: "complexType",
      of: "xml",
      url: "http://www.w3schools.com/schema/el_complextype.asp"
    },    
    { name: "concat()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_concat_array.asp"
    },    
    { name: "config",
      of: "npm",
      url: "https://npmjs.org/doc/config.html"
    },    
    { name: "confirm()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/met_win_confirm.asp"
    },    
    { name: "copy()",
      on: "grunt.file",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.copy"
    },    
    { name: "create()",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
    },    
    { name: "createLinearGradient()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_createlineargradient.asp"
    },    
    { name: "createRadialGradient()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_createradialgradient.asp"  
    },    
    { name: "createStatement()",
      of: "Java",
      url: "http://docs.oracle.com/javase/7/docs/api/java/sql/Connection.html#createStatement()"
    },    
    { name: "cwd()",
      of: "process.",
      of: "Node.js",
      url: "http://nodejs.org/api/process.html#process_process_cwd"
    },    
    { name: "delete()",
      on: "grunt.file",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.delete"
    },    
    { name: "dirname(p)",
      on: "path",
      of: "Node.js",
      url: "http://nodejs.org/api/path.html#path_path_dirname_p"
    },    
    { name: "drawImage()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_drawimage.asp"
    },    
    { name: "DriverManager",
      of: "Java",
      url: "http://docs.oracle.com/javase/7/docs/api/java/sql/DriverManager.html"
    },    
    { name: "element 1",
      of: "xsd",
      url: "http://www.w3schools.com/schema/schema_complex.asp"
    },    
    { name: "element 2",
      of: "xsd",
      url: "http://msdn.microsoft.com/en-us/library/ms256118(v=vs.110).aspx"
    },    
    { name: "elementFormDefault",
      of: "XML",
      url: "http://stackoverflow.com/questions/1463138/what-does-elementformdefault-do-for-xml-when-is-it-used"
    },    
    { name: "enum types", 
      of: "JavaSE",
      url: "http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html"
    },    
    { name: "env",
      on: "process",
      of: "Node.js",
      url: "http://nodejs.org/api/process.html#process_process_env"
    },    
    { name: "equals()",
      on: "Object",
      of: "Java",
      url: "https://today.java.net/pub/a/today/2006/07/27/defining-object-identity.html#objectequals-implements-identity"
    },    
    { name: "err",
      of: "Java",
      on: "System",
      url: "http://docs.oracle.com/javase/7/docs/api/java/lang/System.html#err"
    },    
    { name: "escapeString()",
      of: "PHP",
      url: "http://php.net/manual/en/sqlite3.escapestring.php"
    },    
    { name: "eval()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_eval.asp"
    },    
    { name: "executeUpdate()",
      on: "Statement",
      of: "Java",
      url: "http://docs.oracle.com/javase/7/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)"
    },    
    { name: "exists()",
      on: "grunt.file",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.exists"
    },    
    { name: "exists()",
      of: "Java",
      on: "File",
      url: "http://docs.oracle.com/javase/7/docs/api/java/io/File.html#exists()"
    },    
    { name: "exists(path, callback)",
      of: "fs.",
      url: "http://nodejs.org/api/fs.html#fs_fs_exists_path_callback"
    },    
    { name: "existsSync(path)",
      of: "fs.",
      url: "http://nodejs.org/api/fs.html#fs_fs_existssync_path"
    },    
    { name: "expand()",
      on: "grunt.file",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.expand"
    },    
    { name: "fail",
      of: "grunt.",
      url: "http://gruntjs.com/api/grunt.fail#grunt.fatal"
    },    
    { name: "fill()",
      of: "processing",
      url: "https://www.processing.org/reference/fill_.html"
    },    
    { name: "fillRect()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_fillrect.asp"
    },    
    { name: "fillStyle",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_fillstyle.asp"
    },    
    { name: "fillText()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_filltext.asp"
    },    
    { name: "floor()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_floor.asp"
    },    
    { name: "font=",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_font.asp"
    },    
    { name: "for...in",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
    },    
    { name: "forEach()",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
    },    
    { name: "forName()",
      on: "Class&lt;T&gt;",
      of: "Java",
      url: "http://docs.oracle.com/javase/7/docs/api/java/lang/Class.html#forName(java.lang.String)"
    },    
    { name: "fs",
      of: "Node.js",
      url: "http://nodejs.org/api/fs.html#fs_file_system"
    },    
    { name: "function",
      of: "JavaScript",
      url: "http://www.w3schools.com/js/js_functions.asp"
    },    
    { name: "get()",
      on: "habitat",
      of: "Node.js",
      url: "https://www.npmjs.org/package/habitat"
    },    
    { name: "get()",
      on: "HashMap",
      of: "Java",
      url: "http://msdn.microsoft.com/en-us/library/aa986846(v=vs.80).aspx"
    },    
    { name: "getConnection()",
      of: "Java",
      on: "DriverManager",
      url: "http://docs.oracle.com/javase/7/docs/api/java/sql/DriverManager.html#getConnection(java.lang.String)"
    },    
    { name: "getDay()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_getday.asp"
    },    
    { name: "getElementById()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/met_doc_getelementbyid.asp"
    },    
    { name: "getenv()",
      of: "PHP",
      url: "http://www.php.net/manual/en/function.getenv.php"
    },    
    { name: "getFullYear()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_getfullyear.asp"
    },    
    { name: "getFullYear()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getfullyear"
    },    
    { name: "getProperty()",
      on: "Properties",
      of: "Java",
      url: "http://docs.oracle.com/javase/7/docs/api/java/util/Properties.html#getProperty(java.lang.String)"
    },    
    { name: "getTemplate()",
      of: "env.",
      of: "nunjucks",
      url: "http://nunjucks.jlongster.com/api#Loading-a-template"
    },    
    { name: "getTime() 1",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_gettime.asp"
    },    
    { name: "getTime() 2",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime"
    },    
    { name: "go()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/met_his_go.asp"
    },    
    { name: "habitat",
      of: "Node.js",
      url: "https://www.npmjs.org/package/habitat"
    },    
    { name: "hasOwnProperty() 1",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
    },    
    { name: "hasOwnProperty() 2",
      of: "JavaScript",
      url: "http://msdn.microsoft.com/en-us/library/ie/328kyd6z(v=vs.94).aspx"
    },    
    { name: "info()",
      on: "console",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/console.info"
    },    
    { name: "init()",
      on: "config",
      of: "Grunt",
      url: "http://gruntjs.com/api/grunt.config#grunt.config.init"
    },    
    { name: "initConfig()",
      on: "grunt",
      url: "http://gruntjs.com/api/grunt#grunt.initconfig"
    },    
    { name: "isDataSet()",
      of: "xsd",
      url: "http://msdn.microsoft.com/en-us/library/system.xml.serialization.xmlschemas.isdataset(v=vs.110).aspx"
    },    
    { name: "isDir()",
      on: "grunt.file",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.isdir"
    },    
    { name: "JAXBContent",
      of: "Java",
      url: "http://docs.oracle.com/javaee/5/api/javax/xml/bind/JAXBContext.html"
    },    
    { name: "JAXBElement<T>",
      of: "Java",
      url: "http://docs.oracle.com/javaee/5/api/javax/xml/bind/JAXBElement.html"
    },    
    { name: "join()",
      on: "Array",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_join.asp"
    },    
    { name: "join()",
      of: "path.",
      of: "Node.js",
      url: "http://nodejs.org/api/path.html#path_path_join_path1_path2"
    },    
    { name: "lastChild",
      of: "JavaScript",
      url: "http://www.w3schools.com/dom/prop_node_lastchild.asp"
    },    
    { name: "lastModified",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/prop_doc_lastmodified.asp"
    },    
    { name: "length",
      on: "String",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_length_string.asp"
    },    
    { name: "length()",
      on: "String",
      of: "Java",
      url: "http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#length()"
    },    
    { name: "length()",
      on: "StringBuffer",
      of: "Java",
      url: "http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#length()"
    },    
    { name: "lineTo()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_lineto.asp"
    },    
    { name: "loadNpmTasks()",
      of: "grunt.",
      url: "http://gruntjs.com/api/grunt#grunt.loadnpmtasks"
    },    
    { name: "loadNpmTasks()",
      of: "grunt.task.",
      url: "http://gruntjs.com/api/grunt.task#grunt.task.loadnpmtasks"
    },    
    { name: "max()",
      of: "JavaScript",
      on: "Math",
      url: "http://www.w3schools.com/jsref/jsref_max.asp"
    },    
    { name: "maxExclusive 1",
      of: "xsd",
      url: "http://www.java2s.com/Code/XML/XML-Schema/xsmaxExclusivedefinesamaximumvaluethatcanbereached.htm"
    },    
    { name: "maxExclusive 2",
      of: "xsd",
      url: "http://www.safariflow.com/library/view/xml-in-a/0596007647/re103.html"
    },    
    { name: "maxInclusive",
      of: "xsd",
      url: "http://pic.dhe.ibm.com/infocenter/mpadoc/v7r0m0/index.jsp?topic=%2Fcom.volantis.mcs.eclipse.doc_6.3.0.ibm-9_0%2Fxdime2%2Fxs_mininclusive.html"
    },    
    { name: "maxOccurs=",
      of: "xs",
      url: "http://msdn.microsoft.com/en-us/library/ms759115(v=vs.85).aspx"
    },    
    { name: "meta",
      of: "html",
      url: "http://www.w3schools.com/tags/tag_meta.asp"
    },    
    { name: "method",
      of: "RequestMapping",
      url: "http://docs.spring.io/spring/docs/2.5.x/api/org/springframework/web/bind/annotation/RequestMapping.html#method()"
    },    
    { name: "min=",
      of: "html",
      url: "http://www.w3schools.com/tags/att_input_min.asp"
    },    
    { name: "min()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_min.asp"
    },    
    { name: "minInclusive",
      of: "xsd",
      url: "http://pic.dhe.ibm.com/infocenter/mpadoc/v7r0m0/index.jsp?topic=%2Fcom.volantis.mcs.eclipse.doc_6.3.0.ibm-9_0%2Fxdime2%2Fxs_mininclusive.html"
    },    
    { name: "minOccurs",
      of: "xsd",
      url: "http://msdn.microsoft.com/en-us/library/ms754677(v=vs.85).aspx"
    },    
    { name: "mkdir()",
      on: "grunt.file",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.mkdir"
    },    
    { name: "mouseClicked()",
      of: "processing",
      url: "https://www.processing.org/reference/mouseClicked_.html"
    },    
    { name: "mouseX",
      of: "processing",
      url: "https://www.processing.org/reference/mouseX.html"
    },    
    { name: "mouseY",
      of: "processing",
      url: "https://www.processing.org/reference/mouseY.html"
    },    
    { name: "moveTo()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_moveto.asp"
    },    
    { name: "NMTOKEN 1",
      of: "xsd",
      url: "http://www.datypic.com/sc/xsd/t-xsd_NMTOKEN.html"
    },    
    { name: "NMTOKEN 2",
      of: "xsd",
      url: "http://stackoverflow.com/questions/5808976/what-is-the-usefulness-of-nmtoken-and-nmtokens-types"
    },    
    { name: "nodeType",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/prop_node_nodetype.asp"
    },    
    { name: "noStroke()",
      of: "processing",
      url: "https://www.processing.org/reference/noStroke_.html"
    },    
    { name: "nonNegativeInteger",
      of: "xsd",
      url: "http://www.datypic.com/sc/xsd/t-xsd_nonNegativeInteger.html"
    },    
    { name: "onclick=",
      of: "html",
      url: "http://www.w3schools.com/jsref/event_onclick.asp"
    },    
    { name: "onsubmit=",
      of: "html",
      url: "http://www.w3schools.com/tags/ev_onsubmit.asp"
    },    
    { name: "option()",
      of: "grunt.",
      url: "http://gruntjs.com/api/grunt#grunt.option"
    },    
    { name: "parse()",
      on: "JSON",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"
    },    
    { name: "pattern",
      of: "xsd",
      url: "http://www.datypic.com/books/defxmlschema/chapter09.html"
    },    
    { name: "port",
      on: "location",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/prop_loc_port.asp"
    },    
    { name: "positiveInteger",
      of: "xsd",
      url: "http://www.datypic.com/sc/xsd/t-xsd_positiveInteger.html"
    },    
    { name: "pow()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_pow.asp"
    },    
    { name: "println()",
      of: "Java",
      url: "http://docs.oracle.com/javase/7/docs/api/java/io/PrintStream.html#println()"
    },    
    { name: "prompt()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/met_win_prompt.asp"
    },    
    { name: "protocol",
      on: "location",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/prop_loc_protocol.asp"
    },    
    { name: "put()",
      on: "HashMap&lt;K,V&gt;",
      of: "Java",
      url: "http://docs.oracle.com/javase/7/docs/api/java/util/HashMap.html#put(K,%20V)"
    },    
    { name: "put()",
      of: "Java",
      url: "http://www.coderanch.com/t/401152/java/java/put-method"
    },    
    { name: "rand()",
      of: "PHP",
      url: "http://www.w3schools.com/php/func_math_rand.asp"
    },    
    { name: "random()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_random.asp"
    },    
    { name: "read()",
      on: "grunt.file",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.read"
    },    
    { name: "readFileSync()",
      of: "Node.js",
      url: "http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options"
    },    
    { name: "readJson()",
      of: "Grunt",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.readjson"
    },    
    { name: "readObject()",
      of: "Java",
      url: "http://docs.oracle.com/javase/7/docs/api/java/io/ObjectInputStream.html#readObject()"
    },    
    { name: "ref=",
      of: "xsd",
      url: "http://stackoverflow.com/questions/1448888/what-does-the-ref-attribute-on-an-element-in-an-xsd-do"
    },    
    { name: "registerTask()",
      of: "grunt.task.",
      url: "http://gruntjs.com/api/grunt.task#grunt.task.registertask"
    },    
    { name: "relative(from, to)",
      on: "path",
      of: "Node.js",
      url: "http://nodejs.org/api/path.html#path_path_relative_from_to"
    },    
    { name: "replace() 1",
      on: "String",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_replace.asp"
    },    
    { name: "replace() 2",
      on: "String",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace"
    },    
    { name: "request",
      of: "Git",
      url: "https://github.com/mikeal/request"
    },    
    { name: "request",
      of: "Git",
      url: "https://npmjs.org/package/request"
    },    
    { name: "RequestMapping",
      of: "annotation",
      url: "http://docs.spring.io/spring/docs/2.5.x/api/org/springframework/web/bind/annotation/RequestMapping.html"
    },    
    { name: "require()",
      of: "npm",
      url: "https://npmjs.org/package/require"
    },    
    { name: "restriction",
      of: "xsd",
      url: "http://www.w3schools.com/schema/schema_facets.asp"
    },    
    { name: "round()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_round.asp"
    },    
    { name: "run()",
      of: "grunt.task.",
      url: "http://gruntjs.com/api/grunt.task#grunt.task.run"
    },    
    { name: "schema",
      of: "xsd",
      url: "http://www.w3schools.com/schema/schema_schema.asp"
    },    
    { name: "sequence",
      of: "xs",
      url: "http://www.w3schools.com/schema/el_sequence.asp"
    },    
    { name: "size()",
      of: "processing",
      url: "https://www.processing.org/reference/size_.html"
    },    
    { name: "sort()",
      of: "JavaScript",
      on: "Array",
      url: "http://www.w3schools.com/jsref/jsref_sort.asp"
    },    
    { name: "spawn()",
      of: "grunt.util.",
      url: "http://gruntjs.com/api/grunt.util#grunt.util.spawn"
    },    
    { name: "split()",
      of: "JavaScript",
      on: "String",
      url: "http://www.w3schools.com/jsref/jsref_split.asp"
    },    
    { name: "sqrt()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_sqrt.asp"
    },    
    { name: "src",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/prop_frame_src.asp"
    },    
    { name: "Stats",
      on: "fs",
      of: "Node.js",
      url: "http://nodejs.org/api/fs.html#fs_class_fs_stats"
    },    
    { name: "statSync(path)",
      on: "fs",
      of: "Node.js",
      url: "http://nodejs.org/api/fs.html#fs_fs_statsync_path"
    },    
    { name: "string",
      of: "xsd",
      url: "http://www.datypic.com/sc/xsd/t-xsd_string.html"
    },    
    { name: "stringBuffer",
      of: "Java",
      url: "http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html"
    },    
    { name: "stringify() 1",
      on: "JSON",
      of: "JavaScript",
      url: "http://msdn.microsoft.com/en-us/library/ie/cc836459(v=vs.94).aspx"
    },    
    { name: "stringify() 2",
      on: "JSON",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
    },    
    { name: "stroke()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_stroke.asp"
    },    
    { name: "strokeText()",
      of: "JavaScript",
      url: "http://www.w3schools.com/tags/canvas_stroketext.asp"
    },    
    { name: "substr()",
      of: "JavaScript",
      on: "String",
      url: "http://www.w3schools.com/jsref/jsref_substr.asp"
    },    
    { name: "substring()",
      on: "StringBuffer",
      of: "Java",
      url: "http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#substring(int)"
    },    
    { name: "substring()",
      of: "JavaScript",
      on: "String",
      url: "http://www.w3schools.com/jsref/jsref_substring.asp"
    },    
    { name: "switch()",
      of: "JavaScript",
      url: "http://www.w3schools.com/js/js_switch.asp"  
    },    
    { name: "toLocaleString()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_tolocalestring.asp"
    },    
    { name: "toLowerCase()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_tolowercase.asp"
    },    
    { name: "toString",
      on: "Object",
      of: "JavaSE",
      url: "http://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#toString()"
    },    
    { name: "toUTCString() 1",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/jsref_toutcstring.asp"
    },    
    { name: "toUTCString() 2",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_toutcstring"
    },    
    { name: "trim()",
      on: "js",
      of: "jsf",
      url: "http://jsfiddle.net/KCza9/"
    },    
    { name: "util",
      of: "Node.js",
      url: "http://stackoverflow.com/questions/17368565/what-does-the-util-module-in-node-js-do"
    },    
    { name: "value",
      of: "RequestMapping",
      url: "http://docs.spring.io/spring/docs/2.5.x/api/org/springframework/web/bind/annotation/RequestMapping.html#value()"
    },    
    { name: "while()",
      of: "JavaScript",
      url: "http://www.w3schools.com/js/js_loop_while.asp"
    },    
    { name: "write()",
      on: "grunt.file",
      url: "http://gruntjs.com/api/grunt.file#grunt.file.write"
    },    
    { name: "write()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/met_doc_write.asp"
    },    
    { name: "writeFile()",
      on: "fs.",
      of: "Node.js",
      url: "http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback"
    },    
    { name: "writeln()",
      on: "grunt.verbose",
      url: "http://gruntjs.com/api/grunt.log#grunt.log.write-grunt.verbose.write"
    },    
    { name: "writeln()",
      of: "JavaScript",
      url: "http://www.w3schools.com/jsref/met_doc_writeln.asp"
    },    
    { name: "xmlns",
      of: "html",
      url: "http://www.w3schools.com/tags/att_html_xmlns.asp"
    },    
    { name: "xmlns:tns",
      url: "http://stackoverflow.com/questions/17295588/xmlntns-and-targetnamespace"
    },    
    { name: "XmlAccessorType",
      of: "@annot",
      url: "http://docs.oracle.com/javaee/5/api/javax/xml/bind/annotation/XmlAccessorType.html"
    },    
    { name: "XmlElement",
      of: "@annot",
      url: "http://docs.oracle.com/javaee/5/api/javax/xml/bind/annotation/XmlElements.html"
    },    
    { name: "XMLHttpRequest",
      of: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"
    },    
    { name: "XmlRootElement",
      of: "@annot",
      url: "http://docs.oracle.com/javaee/5/api/javax/xml/bind/annotation/XmlRootElement.html"
    },    
    { name: "XmlType",
      of: "@annot",
      url: "http://docs.oracle.com/javaee/5/api/javax/xml/bind/annotation/XmlType.html"
    },    
    { name: "xs: vs xsd:",
      url: "http://stackoverflow.com/questions/1193563/difference-between-xs-and-xsd-in-xml-schema-file"
    },    
    { name: "xsd indicators",
      url: "http://www.w3schools.com/schema/schema_complex_indicators.asp"
    }

];

function printArray(acies){
    var summa = acies.length;
    var bag ="Words in my vocabulary: <b>"+summa+"</b><br>";
    for(x in acies){
        bag += '<a href="' + acies[x].url + '" target="_blank">';
        bag += '<span class="entry">' + acies[x].name + '</span></a> ';
        bag += '<span class="gray">';

        if(acies[x].hasOwnProperty('of')){
            bag += ' <span class="of">'+ acies[x].of + '</span>';
        }
        if(acies[x].hasOwnProperty('on')){
            bag += ' ' + acies[x].on + '.~';
        }
        bag += '</span><br>';
        //bag += '<button formaction="' + acies[x].url +'" type="button">go</button><br>';
    }
    return bag;
}


 function func (){
  var element = document.getElementById('display_pane');
  element.innerHTML = printArray(acies);
 }

 window.onload = func;