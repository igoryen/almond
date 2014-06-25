//======= VARIABLES ========================================================
var aux = require("./middleware");
//console.log('the type is: ' + typeof aux.printButtons); // success!

var express = require('express');  // use this web application framework for node. assign: module 'express' to $express
var nunjucks = require( "nunjucks" ); // a templating system
var tmpl = new nunjucks.Template('Привет, {{ aaa }}!'); // create a template used in the terminal
console.log(tmpl.render({ aaa: "igoryen" })); // "Привет, igoryen!"

/*
nunjucksEnv.addFilter("instantiate", function(input) {
    var tmpl = new nunjucks.Template(input);
    return tmpl.render(this.getVariables());
});
*/

var path = require('path'); // The -path- module is required for handling and transforming file paths.
//var i18n = require( "i18n-abide" );
var i18n = require( "webmaker-i18n" );
var routes  = require( "./routes" );
var app = express();
var env = require('./config/environment'); // take all the environment variables supplied from ./config/environment.js  and assign them to -env

var nunjucksEnv   = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, 'views' ))); // create the environment for the templating system

var tmpl_test = nunjucksEnv.getTemplate('test.html'); // doesn't work
//console.log(tmpl2.render({ bbb: "Igor" })); // works
tmpl_test.render({ bbb: "Igor" }); // doesn't work. Misplaced?

var cwd_name = process.cwd(); // take process.cwd [current working dir] and assign ... to $dirname
var logger  = require('./lib/logger');

//--------------------------------------------------
// create a server and assign it to variable -app- 
// -app- will be the handle of my server
// Warning: express.createServer() is deprecated, express
// applications no longer inherit from http.Server,
// please use:

//   var express = require("express");
//   var app = express();

// var app = express.createServer(express.logger());
//--------------------------------------------------

//-----------------------------------------------------
// the server will be listening to port with this number
// This is an example of hard-coding this value

//var port = 8008; // 3
//--------------------------------------------------------------


//===VARIABLES end==========================================================



//=== EXPRESS CONFIGURATION ================================================
app.configure( function() {

  nunjucksEnv.express( app );
  app.disable( "x-powered-by" ); //?
  app.use(express.logger('dev'));//?
  app.use( express.compress() ); //?

  //----------------------------------------------------------------
  //   This results in:
  //   /Users/igoryen/igoryen_personal/Learn/avocado/public.
  //   If a specific directory is not specified
  //   (where?... )
  //   then express will use the dir called 'public'. 
  //   what will be served is only the HTML file in public

  app.use( express.static( path.join( __dirname  + "/public") ) ); 
  //-----------------------------------------------------------------


  //-------------------------------------------
  // Setup locales with i18n

  //app.use( i18n.abide({
    app.use( i18n.middleware({
      supported_languages: [
        'en-US'
      ],
      default_lang: "en_US", // PROBLEM (2012-08)! if I switch to a dash, links in the english version stop working.
      translation_type: "key-value-json",
      //translation_directory: "locale",
      translation_directory: path.resolve( __dirname, "locale"),
      locale_on_url: true
  }));
  //-------------------------------------------

  app.use( express.bodyParser() );
  app.use( app.router );

  //---------------------------------------------------------------
  //  1. pass -dirname- to express.static()
  //  2. pass the return value to app.use 
  app.use( express.static(cwd_name));  
  //---------------------------------------------------------------

});
//=== EXPRESS CONFIGURATION end ===================






//--------------------------------------------------------------------
    //if (process.argv[2] && process.argv[2].match(/^[0-9]+$/)) // 5
      //port = parseInt(process.argv[2]); // 6
//----------------------------------------------------



//------- APP.GET() et al ---------------------------------



//---------------------------------------------------------
// index() is defined at: routes/index.js
// 
//app.get('/', routes.index);
//--------------------------------------------------------


//----------------------------------------------
// -routes- is defined above
// -pages() is a method of -routes-
// pages() receives string 'index' into its 'view' parameter
// as defined in routes/index.js

//----------------------------------------------


//------ROUTES----------------------------------------
// -routes- is defined above
// .pages() is defined at: routes/index.js
// .pages() looks into the views directory by default??
app.get( "/strings/:lang?", i18n.stringsRoute( "en-US" ) );

app.get('/', routes.pages("index")); // folder 'routes', function 'pages'
app.get('/cic', routes.pages("cic"));
app.get('/danschool', routes.pages("danschool"));
app.get('/debug', routes.pages("debug"));
app.get('/digitalclock', routes.pages("digitalclock"));
app.get('/funny', routes.pages("funny"));
app.get('/git', routes.pages("git"));
app.get('/gregoriana', routes.pages("gregoriana")); 
app.get('/health', routes.pages("health"));
app.get('/hillsong', routes.pages("hillsong"));
app.get('/history', routes.pages("history"));
app.get('/index', routes.pages("index"));
app.get('/index2', function( req, res ) {
  res.render('index2.html');
});
app.get('/itstuff', routes.pages("itstuff"));
app.get('/itterms', routes.pages("itterms"));
app.get('/java', routes.pages("java"));
app.get('/jobsearch', routes.pages("jobsearch"));
app.get('/joyschool', routes.pages("joyschool"));
app.get('/jsfiddle', routes.pages("jsfiddle"));
app.get('/lingua', routes.pages("lingua"));
app.get('/localization', routes.pages("localization")); 
app.get('/me', routes.pages("me"));
app.get('/moveon', routes.pages("moveon"));
app.get('/mozilla', routes.pages("mozilla"));
app.get('/mozillabugs', routes.pages("mozillabugs"));
app.get('/music', routes.pages("music"));
app.get('/mylinks', routes.pages("mylinks"));
app.get('/praiseandworship', routes.pages("praiseandworship"));
app.get('/preachandteach', routes.pages("preachandteach"));
app.get('/revealcontent', routes.pages("revealcontent"));
app.get('/selfdefense', routes.pages("selfdefense"));
app.get('/seneca', routes.pages("seneca")); 
app.get('/tagsmanager', routes.pages("tagsmanager"));
app.get('/test', routes.pages("test"));
app.get('/tolkieniana', routes.pages("tolkieniana"));
app.get('/transifex', routes.pages("transifex"));
app.get('/uncategorized', routes.pages("uncategorized"));
app.get('/video', routes.pages("video"));
app.get('/webdev', routes.pages("webdev"));

//int222
app.get('/int222audio', routes.pages("int222audio"));
app.get('/int222contact', routes.pages("int222contact"));
app.get('/int222forms', routes.pages("int222forms"));
app.get('/int222gallery', routes.pages("int222gallery"));
app.get('/int222honesty', routes.pages("int222honesty"));
app.get('/int222honesty2', routes.pages("int222honesty2"));
app.get('/int222index', routes.pages("int222index"));
app.get('/int222index2', routes.pages("int222index2"));
app.get('/mamapizza', routes.pages("int222index3"));
app.get('/int222lab2', routes.pages("int222lab2"));
app.get('/int222lab3', routes.pages("int222lab3"));
app.get('/int222lab4', routes.pages("int222lab4"));
app.get('/int222lab5', routes.pages("int222lab5"));
app.get('/int222lists', routes.pages("int222lists"));
app.get('/int222other', routes.pages("int222other"));
app.get('/int222profile', routes.pages("int222profile"));
app.get('/int222tables', routes.pages("int222tables"));
app.get('/int222tables2', routes.pages("int222tables2"));
app.get('/int222text', routes.pages("int222text"));
app.get('/int222video', routes.pages("int222video"));




//--------------------------------------------------
// due to this
// you will see in the terminal
// information on which port to open
// -port- will have the absolute path
// -__dirname- has the name of the dir where the currently executing 
// script [s.js] resides in


app.listen( env.get('PORT'), function() { 
  logger.info("env.get('PORT') is " + env.get('PORT') + ", cwd_name (where files are) is " + cwd_name);
  logger.info("______The currently executing script resides in __dirname '" +__dirname + '"'); //11
});
//========= APP.GET() et al ================================================


// 5) if it's true that ...
// 6)  then re-assign 'port', take ..., parse it into an int, and re-assign it to $port
   
// 8) nameless function: prints (in terminal) port number and dir_name. 
//     - port number will be 8005
//     - dir_name will be the absolute path to the dir where s.js is located.

// 10) 
// 11) 

