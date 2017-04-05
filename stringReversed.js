/*
Have the function FirstReverse (str) take the str parametere being passed and 
return the string in reversed order.  
*/

function FirstReverse(str) { 
  var reversedStr = "";
  for(var i = str.length-1; i >= 0; i--){
      reversedStr += str[i];
  } 
  return reversedStr; 
         
}
 
