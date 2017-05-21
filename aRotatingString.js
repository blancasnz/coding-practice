/*

Rotate string

given a string str and an integer n, rotate the string n times

Ex:

rotate('hello', 1) -> 'ohell'
rotate('hello', 2) -> 'lohel'
rotate('hello', 3) -> 'llohe'
rotate('hello', 4) -> 'elloh'

Discovered % allows for a pattern solution.  When you loop "str", "n" amount of times, a pattern
begins to show. Ex. looping "str" 3 times is the same as looping 8 times.  When you do 
"n" % str.length, you create a newN, which stores the remainder.  In the case of 8%5, you get 3. 
The pattern in which looping 8 times is the same as 3 times goes into effect. 
str.length - newN, 5 - 3, gives you 2, the position where you want to start.  Then you can
start adding that part of the string to your new empty string.  This sequence will work to find 
a pattern with any number.  The second for loop is for when the first for loop no longer 
works and it will give you the other part of the string you need.

*/

var rotate = function (str,n){
  var rotatedWord = "";
  var newN = n % str.length;
  for(var i = str.length - newN; i < str.length; i++){
    rotatedWord += str[i];
  }
  for(var j = 0; j < str.length - newN; j++ ){
    rotatedWord += str[j];
  }
  return rotatedWord;
  
}
