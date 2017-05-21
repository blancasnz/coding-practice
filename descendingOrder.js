/*
Your task is to make a function that can take any non-negative integer 
as a argument and return it with it's digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.


Examples:

Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221

toString transforms n into a string, split returns an array, sort arranges from smallest number
to largest number, reverse will make it largest to smallest, join has to have it's own variable
and will return the array into a string, Number is a constructor and will return the string as a
number.

In split, "" lets it know to split in between numbers. Other options you could have would be to 
split the string according to the commas in place Ex. "hey, you, how's it going" it would split
["hey", "you", "how's it going"] or other example is splitting using spaces " " as an indicator.

*/


function descendingOrder(n){
  var numberString = n.toString();
  var numberArray = numberString.split("");
  numberArray.sort();
  numberArray.reverse();
  var output = numberArray.join(""); 
  return Number(output);    
}