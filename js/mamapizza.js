/*************************************************************/
/* Name :  Igor Entaltsev                                    */
/* login : int222_122b36                                     */
/*************************************************************/

/****************************************************************************/
/*              This: function calculates the pizza price                    */
/****************************************************************************/
function calculatePizzaPrice(){
  var sizePrice     = 0;
  var toppingsCount = 0;
  var toppingsPrice = 0;
  var subTotal      = 0;
  var hst           = 0;
  var finalTotal    = 0;

  var priceList   = new Array(0.00, 11.55, 15.25, 22.00, 25.00);
  var whichSize   = 0;


  // Determine the price for the pizza size selected

  whichSize = document.pizza.pizzaSize.selectedIndex;

  if (whichSize > 0) {
    sizePrice = priceList[whichSize];
  }
  else { 
    sizePrice = 0;                                // no selection
  }

  // Determine the number of toppings if any


  for (var i = 0; i < 12;i++){                                       
      if (document.pizza.toppings[i].checked == true) { // check and count how many toppings
         toppingsCount++;  
      }
   }


   // Pizza price calculation based on what they selected

   toppingsPrice = Math.floor(((1.79 * toppingsCount) + 0.005)*100); 
   toppingsPrice = toppingsPrice /100;

   subTotal      = Math.floor(((sizePrice + toppingsPrice) + 0.005)*100);
   subTotal      = subTotal /100;

   hst           = Math.floor((((subTotal * .13) + 0.005)*100));
   hst           = hst/100;

   finalTotal    = (subTotal + hst).toFixed(2);

   // Results from store calculation

   document.pizza.hPizzaPrice.value     = sizePrice;
   document.pizza.hToppings.value       = toppingsCount
   document.pizza.hToppingsCost.value   = toppingsPrice;
   document.pizza.hSubTotal.value       = subTotal;
   document.pizza.hHst.value            = hst;
   document.pizza.hFinalTotal.value     = finalTotal;

   document.pizza.price.value           = finalTotal; // update price on the form

} // End of calculatePizzaPrice function


/****************************************************************************/
/*            Please do not change any of the above code                    */
/****************************************************************************/

/****************************************************************************/
/* This function  validates the whole order                                 */
/****************************************************************************/

// validate the whole order ---------------------------------------------------------------------------------------------------------------------------------
function validateOrder(){
   var errMessages="";

   errMessages = validateSurname(errMessages);
   errMessages = validateClientNo(errMessages);
   errMessages = validatePhoneNo(errMessages);
   errMessages = validateDOB(errMessages);
   errMessages = validatePizzaSize(errMessages);
   errMessages = validatePizzaCrust(errMessages);
   errMessages = validateCheese(errMessages);

   if(errMessages.length != 0){
      showErrors(errMessages);
      return false;
   }
   else 
   {
      var stringName  = document.pizza.surname.value;
      var nameLetter1 = stringName.substr(0,1);
      var nameLetters = stringName.substr(1);
      stringName      = nameLetter1.toUpperCase() + nameLetters.toLowerCase();

      document.pizza.surname.value    = stringName;        
      document.pizza.hJsActive.value  = "YES";
      return true;
   }
}  // End of function validateOrder 

// 1 validate surname =======================================================================================================

function validateSurname(errMessages){ // 
   var stringName = document.pizza.surname.value;
   var stringLength = stringName.length;
   if (stringLength == 0){
      errMessages += "<tr><td><mark>Name</mark></td><td>field is empty.</td></tr>";
   }  
   else {
      if (stringLength < 4){
         errMessages += "<tr><td><mark>Name</mark></td><td>must have minimum 4 letters plus 1 optional apostrophe.</td></tr>";
      } else {
         stringName = stringName.toUpperCase(); // easier to check - uppercase the data in "stringName"
         
         var countNonAlpha= 0;                 
         var countApostrophe = 0;
         var countAlpha = 0;

         for (var i=0; i<stringLength; i++ ){
            if (stringName.charCodeAt(i) == 39){ // if the code is an apostrophe
              countApostrophe++;
            } else {
               if ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ){ // if _ is a letter
                  countAlpha++;
               } else {
                  countNonAlpha++;
               } 
            } 
         } 

      //-------------------------------------------------------------------------
      
      var multiMessages ="";
      var ind="no";

      // ---------------------------------------------------------------------------------
      if  (countNonAlpha > 0)  // if non-letters are present 
      {
       multiMessages +="can have only letters and one optional apostrophe.<br />";
       ind="yes";
    }
      //----------------------------------------------------------------------------------

      
      if  (countApostrophe > 1) 
      {
       multiMessages += "can have only one apostrophe.<br />";
       ind="yes";
    }
      //----------------------------------------------------------------------------------

      
   if ( (stringName.indexOf("'") == 0) || (stringName.indexOf("'") == (stringLength - 1)) ){  // if apostrophe's position is 1 or last
      multiMessages +="cannot have an apostrophe at the start or the end of the Name.<br />";
      ind="yes";
   }
      //----------------------------------------------------------------------------------

      
      if  (countAlpha < 4) {
        multiMessages += "must be at least 4 letters plus an optional apostrophe.<br />";
        ind="yes";
      }
      //----------------------------------------------------------------------------------
      if (ind == "yes"){
        errMessages += "<tr><td> <mark>Name</mark> </td><td>" + multiMessages + "</td></tr>";
      }               
   } 
} 
return errMessages;
}  //   validateSurname(errMessages)

// 2 validate account number ===========================================================================================
function validateClientNo(errMessages){
   var accountNo = document.pizza.client.value;
   var ind = "no";
   var multiMessages ="";

   //-------------------------------------------------------------------------
   if(accountNo.length == 0){
      multiMessages += "field is empty.<br />";
      ind="yes";
   }  
   // -------------------------------------------
   else if(accountNo.length != 12) {
      multiMessages += "must be 12 digits long.<br />";
      ind="yes";
   }
   else {
      var posOfTGC = accountNo.charCodeAt(0) ;
      
      if ( (posOfTGC != 84) && ( posOfTGC != 71 ) && ( posOfTGC != 67 ) ){
         multiMessages += "must start with capital T, G, or C.<br />";
         ind="yes";
      }
      else {
         var posOfHyphen = accountNo.charCodeAt(6);
         if (posOfHyphen != 45){
            multiMessages += "7th character must be a hyphen.<br />";
            ind = "yes";
         }
         else {
            // step 1: checking group 1 Non digits  ----------------------------- 
            var group1NonDigits =0;                  
                     for( var j=1 ; j<6 ; j++){ // check if client number positions 1-5 are digits
                        if( (accountNo.charCodeAt(j) <48 ) || ( accountNo.charCodeAt(j) >57 )  ) { // if nonDigits
                           group1NonDigits++;
                        }                     
                     }

            //---------------------------------------------------
            
            if (group1NonDigits > 0){ // if client number positions 1-5 are NOT digits
               multiMessages += "must have 5 digits after capital letter.<br />";
               ind ="yes";
            } 
            
            // step 2: checking group 2 Non digits ---------------------------------------               
            var group2NonDigits =0;

                     for( var k=7 ; k<12 ; k++){ // check if client number positions 7-11 are digits
                        if( (accountNo.charCodeAt(k) <48 ) || ( accountNo.charCodeAt(k) >57 )  ) {// if nonDigit
                           group2NonDigits++;
                        }                     
                     }
               //---------------------------------------------------

            if (group2NonDigits > 0) {// if client number positions 7-11 are NOT digits
               multiMessages += "must end in 5 digits.<br />";
               ind ="yes";
            } 
            

            
            // step 3: ---------------------------------------------
            if ( group1NonDigits == 0 && group2NonDigits == 0 ){
               var pos3minPos9 = 0;
               var pos3 = accountNo.charAt(3);
               var pos9 = accountNo.charAt(9);
               
               pos3minPos9 = eval(pos3-pos9);
               
               if(pos3minPos9 != -1 && pos3minPos9 != 1){
                  multiMessages += "position 4 and position 10 difference is not 1 or -1.<br />";
                  ind ="yes";
               } 
               
               // -------------------------------
               
               var sumPos1_5 = 0;
               var sumPos7_11 = 0;
               
               for(var k=1; k<6; k++){
                  sumPos1_5 += eval(accountNo.charAt(k));
               }
               
               for(var m=7; m<12; m++){
                  sumPos7_11 += eval(accountNo.charAt(m));
               }
               
               if( sumPos1_5 >= sumPos7_11 ){
                  multiMessages += "sum of first 5 digits must be less than the sum of last 5 digits.<br />";
                  ind ="yes";
               }
               
            }// if 
            
         }// else if 
      } // else if 
      
   } // else if 

   // ---------------------------------------------------------------
   if (ind == "yes"){
      errMessages +="<tr><td><mark>Account</mark></td><td>"+multiMessages+"</td></tr>";                   
   }
return errMessages;
}// function validateClientNo(errMessages)

// 3 validate phone number =====================================================================================================
function validatePhoneNo(errMessages){
   var phoneNo = document.pizza.phone.value;
   var ind = "no";
   var multiMessages ="";

   // --------------------------------------------------------
   if (phoneNo.length == 0){
      multiMessages +=  "field is empty.<br />";
      ind="yes";
   }

   else if (phoneNo.length != 12){
      multiMessages +=  "must be 12 digits long.<br />";
      ind="yes";
   }

   else if (phoneNo.length == 12){
      var placeOfHyphen1 = phoneNo.charCodeAt(3);
      var placeOfHyphen2 = phoneNo.charCodeAt(7);

      // if i can't see hyphens in either right places
      if (placeOfHyphen1 != 45 && placeOfHyphen2 != 45){
         multiMessages +=  "must have two hyphens: 999<mark>-</mark>999<mark>-</mark>9999.<br />";
         ind="yes";
      }
      // if the symbol where hyphen1 should be is not a hyphen
      else if (placeOfHyphen1 != 45){
         multiMessages +=  "must have a hyphen in position 4.<br />";
         ind="yes";
      }
      // if the symbol where hyphen2 should be is not a hyphen
      else if (placeOfHyphen2 != 45){
         multiMessages +=  "must have a hyphen in position 8.<br />";
         ind="yes";
      }
      // if the hyphens are in the right places
      else{ 
         var phoneNoParts = phoneNo.split("-");                     
         // checking phoneNoGroup2NonDigits 
         var phoneNoGroup1NonDigits = 0; // create a value and set it to 0
         
         for( var n=0 ; n<3; n++) {
            if( phoneNoParts[0].charCodeAt(n) <48  ||  phoneNoParts[0].charCodeAt(n) >57   ) {// if nonDigits
               phoneNoGroup1NonDigits++;
            }                     
         }
         // checking phoneNoGroup2NonDigits ----------------------------------------------------------------------------------------------
         
         var phoneNoGroup2NonDigits = 0; // create and set to 0
         for( var p=0 ; p<3; p++){
            if( phoneNoParts[1].charCodeAt(p) <48  ||  phoneNoParts[1].charCodeAt(p) >57   ) {// if nonDigits
               phoneNoGroup2NonDigits++;
            }                     
         }
         
         // checking phoneNoGroup3NonDigits ----------------------------------------------------------------------------------------------
         
         var phoneNoGroup3NonDigits = 0;   
         for( var r=0 ; r<4; r++) {
            if( phoneNoParts[2].charCodeAt(r) <48  ||  phoneNoParts[2].charCodeAt(r) >57   ) { // if nonDigits
               phoneNoGroup3NonDigits++;
            }                     
         }
         
         // ------------------------------------------------------
         // case: there are > 0 non-digits in any of the 3 groups
         if (phoneNoGroup1NonDigits > 0 || phoneNoGroup2NonDigits > 0 ||phoneNoGroup3NonDigits > 0 ) {
            multiMessages +=  "contains non-digits.<br />";
            ind="yes";
         }
         // case: the number of nondigits in all 3 of the groups is 0
         else if (phoneNoGroup1NonDigits == 0 && phoneNoGroup2NonDigits == 0 && phoneNoGroup3NonDigits == 0 ){
            if (phoneNoParts[0] != 416 && phoneNoParts[0] != 905 && phoneNoParts[0] != 647){
               multiMessages +=  "area code must be 416 or 905 or 647.<br />";
               ind="yes";
            }
            else if (phoneNoParts[0] == 416 || phoneNoParts[0] == 905 || phoneNoParts[0] == 647){
               if((phoneNoParts[1] == "000") && (phoneNoParts[2] == "0000") ){
                  multiMessages +=  "can't be all zeroes.<br />";
                  ind="yes";
               } 
            } // else if 
         } // else if               
      } //else if 
   }// else if  

// -------------------------------------------------------
   if (ind == "yes"){
      errMessages +="<tr><td><mark>Phone</mark></td><td>"+multiMessages+"</td></tr>"; 
   }
   return errMessages;         
}

// 4 validate DOB =================================================================================================================

function validateDOB(errMessages){
   var dob = document.pizza.dob.value;
   var ind = "no";
   var multiMessages ="";
   // --------------------------------------------------------
   if (dob.length == 0){
      multiMessages +=  "field is empty.<br />";
      ind="yes";
   } else if (dob.length != 7){
      multiMessages +=  "must be 7 positions.<br />";
      ind="yes";
   }
   else if (dob.length == 7){
      var dobHalf1NonChars = 0;
      var dobHalf1Uppercased = dob.toUpperCase();
      
      for (var s=0; s<3; s++){
         if (dobHalf1Uppercased.charCodeAt(s) <65 || dobHalf1Uppercased.charCodeAt(s) > 90){
            dobHalf1NonChars++;
         }
      }
      
      if (dobHalf1NonChars > 0){
         multiMessages +=  "month has non-letters.<br />";
         ind="yes";
      }
      else {
         var mmm = dob.substr(0,3);
         var mmmAbbrevationsUppercased = new Array ("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");
         var mmmAbbrevationsLowercased = new Array ("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");
         var mmmUppercased = mmm.toUpperCase();
         var mmmLowercased = mmm.toLowerCase();
         var mismatch = 0;
         for (var v = 0; v<12; v++){
            if (mmmUppercased != mmmAbbrevationsUppercased[v] || mmmLowercased != mmmAbbrevationsLowercased[v]){
               mismatch++;
            }
         }
         if (mismatch == 12){
            multiMessages +=  "month abbreviation not recognized.<br />";
            ind="yes";
         }
         var yyyy = dob.substr(3,4);
         var yyyyNonDigits = 0;

         for (var t = 0; t < yyyy.length; t++){     
            if( yyyy.charCodeAt(t) <48  ||  yyyy.charCodeAt(t) >57   ) {// if nonDigits
               yyyyNonDigits++;
            }  
         } 
         
         //-----------------------------------------
         if (yyyyNonDigits > 0){
            multiMessages +=  "year has non-digits.<br />";
            ind="yes";
         }
         else {
            var myDate = new Date();
            var myYear = myDate.getFullYear();                  
            var clientAge = (myYear - eval(yyyy));
            
            if (clientAge < 16){
               multiMessages +=  "clientAge must be at least 16.<br />";
               ind="yes";
            }                   
         }
      }//if 
   }// if 
   // -------------------------------------------------------
   if (ind == "yes"){
      errMessages +="<tr><td><mark>D.O.B.</mark></td><td>"+multiMessages+"</td></tr>"; 
   }
   return errMessages;         
}

// 5 validate pizza size =================================================================================================================

function validatePizzaSize(errMessages){
   var ind = "no";
   var multiMessages ="";
   var sizesAvailable = document.pizza.pizzaSize.options.length;
   var sizeSelected = document.pizza.pizzaSize.selectedIndex;
   if (sizeSelected == -1 || sizeSelected == 0){ // -1: no option selected, 0: first option selected
      multiMessages +=  "not selected.<br />";
      ind="yes";
   }
   else if(sizeSelected > 0 && sizeSelected < sizesAvailable ){
      calculatePizzaPrice();
   } 
   // ------------------------------------------------------------------------------------------------------------------
   if (ind == "yes"){
      errMessages +="<tr><td><mark>Size</mark></td><td>"+multiMessages+"</td></tr>"; 
   }
   return errMessages;         
}      
// 6 validate pizza crust =================================================================================================================

function validatePizzaCrust(errMessages){         
   var multiMessages ="";
   var crustsAvailable = document.pizza.pizzaCrust.options.length;
   var crustSelected = document.pizza.pizzaCrust.selectedIndex;

   if (crustSelected == -1){ // -1: no option selected
      multiMessages +=  "not selected.<br />";
      //ind="yes";
      errMessages +="<tr><td><mark>Crust</mark></td><td>"+multiMessages+"</td></tr>"; 
   }
   return errMessages;         
}

// 8 validate cheese =================================================================================================================

function validateCheese(errMessages){
   var ind = "no";
   var multiMessages ="";
   var cheesesAvailable = document.pizza.cheese.length;
   var cheeseSelected = 0;

   for(var i = 0; i < cheesesAvailable; i++){
      if (document.pizza.cheese[i].checked == true){
         cheeseSelected++;
      }
   }

   if (cheeseSelected == 0){             
      ind="yes";
      multiMessages +=  "not selected.<br />";
   }

   if (ind == "yes"){
      errMessages +="<tr><td><mark>Cheese</mark></td><td>"+multiMessages+"</td></tr>"; 
   }
   return errMessages;         
}


// display errors on error display ============================================================================================   
function showErrors(errMessages) {      
   errMessages = "<i>Um... we're sorry, something is not quite correct. :)</i><hr/><table class='errorsTable'>" + errMessages + "</table><hr/>Hover over the field titles in Personal Information to see the rules.";
   document.getElementById('errors').innerHTML = errMessages;
}


// clear Error Display ============================================================================================
function  clearShowErrors(){
   document.getElementById('errors').innerHTML = "";
}
