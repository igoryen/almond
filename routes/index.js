
//-------------------------------------------
// create function -pages- for -route-
// pages() will use -view-
// to render html pages

exports.pages = function( view ) {
  return function( req, res ) {
    res.render( view + ".html" );
  };
};
//-------------------------------------------



//-------------------------------------------
// create function index()
// index() will display the home page
// which resides at the following address:

exports.index = function(req, res) {
  return res.render('public/index.html');
};
//-------------------------------------------