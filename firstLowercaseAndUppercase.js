/*

Given a string input, find the first character that has both lower and uppercase in the string

Example:
input -> "aSfjeLKJDFKjdlwekjfskjdf;e" 
output -> j

*/

var lowerAndUpper = function(input){
	for (var i = 0; i < input.length; i++){
		for ( j = i + 1; j < input.length; j++){
			if (input[j] === input[i].toUpperCase()){
				return input[i];
			}
		}
	}
  return "no matches";
}

console.log(lowerAndUpper(""));