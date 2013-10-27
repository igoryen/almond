require(["jsobject"],function(jsobject){ // 1
  var retval = "";
  retval = jsobject.getObject();             // 2
  document.getElementById('a').innerHTML  = retval;
});