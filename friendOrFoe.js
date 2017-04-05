/*
Make a program that filters a list of strings and returns a list with only 
your friends name in it.

If a name has 4 letters in it, you can be sure that it has to be a friend of 
yours!

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/


function friend(friends){
var myFriends = [];
  for(var i = 0; i< friends.length; i++){
    if(friends[i].length === 4){
      myFriends.push(friends[i]);
    }
  }
  return myFriends;
}