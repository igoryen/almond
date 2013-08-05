/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

//------------------------------------------
// source of module 'habitat':
// package.json/dependencies

var habitat = require('habitat');
//--------------------------------------------

//----------------------------------------------------
// Load config (i.e. fill the habitat variable 
// with all the environment variables) from ".env"

habitat.load();
//-----------------------------------------------------


//------------------------------------------------
// create a new -env- from the filled -habitat-
var env = new habitat();

      //console.log('env 1 .......... '+ env);
      //console.log('PORT 2 ..........' + env.get('PORT'));
//------------------------------------------------


//--------------------------------------
// export -env-
module.exports = env;
//--------------------------------------
