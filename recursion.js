/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd 
by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a 
positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept 
a number parameter and return a Boolean.

*/

var isEven = function(N){
  // turn negative numbers positive
  if (N < 0) {
    N *= -1
  }
  
  // base cases (stopping condition)
  if (N == 0){
  	return true;
  } else if (N == 1) {
   	return false; 
  }
  
  // this is the recursive part
  return isEven(N-2)
}
