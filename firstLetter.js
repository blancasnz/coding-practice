

/*

The function takes a parameter name, the function will return different 
outputs depending on the first character of the name. 

if the name starts with a vowel return 'Piss off name!'
if starts with a consonant return 'Hello name!'
if name is empty simply return 'Hello!'

ex:

startsWithVowel('Albert') -> return 'Piss off Albert!'
startsWithVowel('Bono') -> return 'Hello Bono!'
startsWithVowel('') -> return 'Hello!'

*/


var startsWithVowel = function(name) {
  if(!name){
	return "Hello!";
  }

  var firstLetter = name[0];
  if(firstLetter === "A" || firstLetter === "E" || firstLetter === "I" || firstLetter === "O" || firstLetter === "U"){
	return "Piss off " + name + "!";
  } 
  else {
	return "Hello " + name + "!";
  }

}