/*

Find occurences

given a string str and a character ch, return a list of indices where the
character was found in the string

Ex:
findOccurrences('hello word', 'o') -> [4, 7]
findOccurrences('i ate an apple', 'a') -> [2,6,9]
findOccurrences('Hello, my name is Mr. Stkrdknmibalz', 'm') -> 
[7, 12, 18, 29]

In this solution I turned the string into all lowercase letters so it would find the character
whether it was in uppercase or lowercase, however the solution could have that out in case you 
wanted to particularly find a character in uppercase only or lowercase only.

*/

var findOccurrences = function(str, ch) {
  var occurrences = [];
  var nStr = str.toLowerCase();
  for(var i =0; i < nStr.length; i++){
    if(nStr[i] === ch){
      occurrences.push(i);
    }
  }
  return occurrences;
	
}