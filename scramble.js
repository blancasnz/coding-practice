// Using a function in another function.  Practicing true and false with functions

var containsLetter = function (ch,str){
  for(var i = 0; i < str.length; i++){
    if(ch === str[i]){
        return true;
    }
  }
  return false;
}

var scramble = function (str1,str2){
  for(var i = 0; i < str1.length; i++){
    if(!containsLetter(str1[i],str2)){
        return false;
    }
  }
  return true;

}
