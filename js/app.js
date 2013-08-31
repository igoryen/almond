
// ---- VARIABLES ------------------------------------------------


//-------------------------------------------------
// use this web application framework for node
// assign: module 'express' to $express

var express = require('express'); 

//if (express) console.log('express .......... '+ express);
//else console.log('no express');

//-------------------------------------------------
 



//-------------------------------------------------------
// a templating system

var nunjucks = require( "nunjucks" );

//if (nunjucks) console.log('nunjucks .......... '+ nunjucks);
//else console.log('no nunjucks');

//--------------------------------------------------------



//--------------------------------------------------------
// in case
/*
nunjucksEnv.addFilter("instantiate", function(input) {
    var tmpl = new nunjucks.Template(input);
    return tmpl.render(this.getVariables());
});
*/
//--------------------------------------------------------


//-----------------------------------------------------------
// The -path- module is required for handling and transforming file paths.

var path = require('path'); 

//if (path) console.log('path .......... '+ path);
//else console.log('no path');

//--------------------------------------------------------------


//---------------------------------------------

var i18n = require( "i18n-abide" );
//---------------------------------------------

//---------------------------------------------------

var routes  = require( "./routes" );

//if (routes) console.log('routes .......... '+ routes);
//else console.log('no routes');

//--------------------------------------------------------



//...

//-----------------------------------------------

var app = express();

//if (app) console.log('app .......... '+ app);
//else console.log('no app');
//------------------------------------------------




//-----------------------------------------------------------------
// take all the environment variables supplied from ./config/environment.js
// and assign them to -env

var env = require('./config/environment');

//if (env) console.log('env 2 .......... '+ env);
//else console.log('no env');

//console.log('PORT 2 ..........' + env.get('PORT'));

//-----------------------------------------------------------------




//-------------------------------------------------------
// create the environment for the templating system

var nunjucksEnv   = new nunjucks.Environment( new nunjucks.FileSystemLoader( path.join( __dirname, 'views' )));

//if (nunjucksEnv) console.log('nunjucksEnv .......... '+ nunjucksEnv);
//else console.log('no nunjucksEnv');
//-------------------------------------------------------



//-------------------------------------------------
// take process.cwd [current working dir] and assign ... to $dirname

var cwd_name = process.cwd();

//if (cwd_name) console.log('cwd_name .......... '+ cwd_name);
//else console.log('no cwd');

//--------------------------------------------------



//------------------------------------------------------

var logger  = require('./lib/logger');

//if (logger) console.log('logger .......... '+ logger);
//------------------------------------------------------



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


//===VARIABLES==========================================================






//=== EXPRESS CONFIGURATION ======================
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
    default_lang: "en_US", // if I switch to a dash, links in the english version stop working.
    translation_type: "key-value-json",
    translation_directory: "locale",
    locale_on_url: true
  }));
  //-------------------------------------------





  app.use( express.bodyParser() );
  app.use( app.router );


  //---------------------------------------------------------------
  //  1. pass -dirname- to express.static()
  //  2. pass the return value app.use 

  app.use( express.static(cwd_name));  
  //---------------------------------------------------------------

});
//=== EXPRESS CONFIGURATION ===================






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

app.get('/', routes.pages("index"));
//----------------------------------------------


//----------------------------------------------
// -routes- is defined above
// -pages() is a method of -routes-
// pages() looks into the views directory by default??

app.get('/me', routes.pages("me"));
//----------------------------------------------


//----------------------------------------------
// -routes- is defined above
// pages() is defined at: routes/index.js
// pages() looks into the views directory by default??

app.get('/mylinks', routes.pages("mylinks"));
//----------------------------------------------

//-------------------------------------------------
app.get('/revealcontent', routes.pages("revealcontent"));
//-------------------------------------------------
app.get('/digitalclock', routes.pages("digitalclock"));
app.get('/tagsmanager', routes.pages("tagsmanager"));


//--------------------------------------------------
// due to this
// you will see in the terminal
// information on which port to open
// -port- will have the absolute path
// -__dirname- has the name of the dir where the currently executing 
// script [s.js] resides in


app.listen( env.get('PORT'), function() { 
  logger.info("______Serving on port >" + env.get('PORT') + "< files in >" + cwd_name);
  logger.info("______The currently executing script resides in directory '" +__dirname + '"'); //11
});
//========= APP.GET() et al ================================================


// 5) if it's true that ...
// 6)  then re-assign 'port', take ..., parse it into an int, and re-assign it to $port
   
// 8) nameless function: prints (in terminal) port number and dir_name. 
//     - port number will be 8005
//     - dir_name will be the absolute path to the dir where s.js is located.

// 10) 
// 11) 

