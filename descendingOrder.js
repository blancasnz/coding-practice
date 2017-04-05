/*
Your task is to make a function that can take any non-negative integer 
as a argument and return it with it's digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.


Examples:

Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221

*/


function descendingOrder(n){
  var n2 = n.toString();
  arrayN2 = n2.split("");
  arrayN2.sort();
  arrayN2.reverse();
  var output = arrayN2.join(""); 
  return Number(output);    
}