/*
Have the function LetterChanges(str) take the str parameter being passed and
modify it using the following algorithm. Replace every letter in the string 
with the letter following it in the alphabet (ie. c becomes d, z becomes a).  
Then capitalize every vowel in this new string (a,e,i,o,u) and finally return 
this modified string.
*/

function LetterChanges(str) { 
   
    var newWord = "";
    for( var i = 0; i < str.length; i++){
        if(str[i].match(/[a-z]/i)){
            var checking = String.fromCharCode(str.charCodeAt(i) + 1);
            if( checking === "e" || checking === "a" || checking === "i" || checking === "o" || checking === "u"){
                checking = checking.toUpperCase();
            }
            newWord += checking;
        } 
        else {
            newWord += str[i];
        }
    }
    
     
    return newWord;
}