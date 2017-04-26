/*

Given a string input, find the first character that has both lower and uppercase in the string

Example:
input -> "aSfjeLKJDFKjdlwekjfskjdf;e" 
output -> j

*/

var lowerAndUpper = function(input){
    for (var i = 0; i < input.length; i++){
        for ( j = i + 1; j < input.length; j++){
            if (input[i] === input[i].toLowerCase() && input[j] === input[i].toUpperCase()){
                return input[i];
            } else if(input[i] === input[i].toUpperCase() && input[j] === input[i].toLowerCase()){
                return input[i];
              }
            
         }
     }
  return "no matches";
}