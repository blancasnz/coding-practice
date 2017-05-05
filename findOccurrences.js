/*

Find occurences

given a string str and a character ch, return a list of indices where the
character was found in the string

Ex:
findOccurrences('hello word', 'o') -> [4, 7]
findOccurrences('i ate an apple', 'a') -> [2,6,9]
findOccurrences('Hello, my name is Mr. Stkrdknmibalz', 'm') -> 
[7, 12, 18, 29]

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