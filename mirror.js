/*

Given a string input, make the first half of the string a mirror of the second half, as long as 
there is a letter to swap with.

ex:
input -> "hello"
output -> "olllo"  

input -> "banana"
output -> anaana

*/

var mirrors = function(input) {
  var newWord = "";
  var loops = Math.floor(input.length/2);
  for(var i = 0; i < loops; i++){
    newWord += input[input.length-1-i];
  }
  for(var j = loops; j < input.length; j++ ){
    newWord += input[j];
  }
  return newWord;
}

