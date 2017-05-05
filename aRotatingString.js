/*

Rotate string

given a string str and an integer n, rotate the string n times

Ex:

rotate('hello', 1) -> 'ohell'
rotate('hello', 2) -> 'lohel'
rotate('hello', 3) -> 'llohe'
rotate('hello', 4) -> 'elloh'

Discovered to use % in order to deal with "n" being greater than the "str" length. Ex. if "n" is 5, then in 
the for loop "str.length - n" in this ex. 5-5 = 0, then it would start at str[0], which is "h" and 
it will go on to print "hello". However if "n" is 6, then "str.length - n" in this ex. will be 
5-6 = -1. This will not work because there is no str[-1]. So if you were to loop "hello" six 
times, you want to get "ohell" which is the same result as when you loop "hello" 1 time.  So by 
getting the remainder of n/str.length, you are getting a positive number, and it also gives the 
result you want! It's a pattern!

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
