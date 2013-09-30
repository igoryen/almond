function xternal(){
  document.getElementById("display_pane").innerHTML=xternalFunc();
}; // end java

var xternalFunc = function(){

  // VERSION 1: array of links
  
  // js object
  var xternalObj = {
   "append()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#append(boolean)"
   , "zzz":"aaa"
   , "length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#length()"
   , "length()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#length()"
   , "stringBuffer":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html"
   , "substring()":"http://docs.oracle.com/javase/6/docs/api/java/lang/StringBuffer.html#substring(int)"
  }; // end js object


  //var obj = javaObj;

   return printObj(xternalObj);
  


}; // end javaFunc