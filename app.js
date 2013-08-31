//======= VARIABLES ========================================================

var express = require('express');  // use this web application framework for node. assign: module 'express' to $express
var nunjucks = require( "nunjucks" ); // a templating system

/*
nunjucksEnv.addFilter("instantiate", function(input) {
    var tmpl = new nunjucks.Template(input);
    return tmpl.render(this.getVariables());
});
*/

var path = require('path'); // The -path- module is required for handling and transforming file paths.
var i18n = require( "i18n-abide" );
var routes  = require( "./routes" );
var app = express();
var env = require('./config/environment'); // take all the environment variables supplied from ./config/environment.js  and assign them to -env
var nunjucksEnv   = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, 'views' ))); // create the environment for the templating system
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

  app.use( i18n.abide({
    supported_languages: [
      'en-US', 'ru'
    ],
    default_lang: "en_US", // PROBLEM (2012-08)! if I switch to a dash, links in the english version stop working.
    translation_type: "key-value-json",
    translation_directory: "locale",
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


//----------------------------------------------
// -routes- is defined above
// .pages() is defined at: routes/index.js
// .pages() looks into the views directory by default??
app.get('/', routes.pages("index"));
app.get('/debug', routes.pages("debug"));
app.get('/digitalclock', routes.pages("digitalclock"));
app.get('/me', routes.pages("me"));
app.get('/moveon', routes.pages("moveon"));
app.get('/mylinks', routes.pages("mylinks"));
app.get('/revealcontent', routes.pages("revealcontent"));
app.get('/tagsmanager', routes.pages("tagsmanager"));


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

