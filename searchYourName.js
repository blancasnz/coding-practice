/*
In this project, you'll be writing a short program that checks a block of text for your name.

Specifically, it will check the text for the first letter of your name, then push (add) the number
of characters equal to your name's length to an array. By inspecting the array, you'll be able to 
see if your name was mentioned!

This is a beginner lesson and isn't modified to differ between other names that start with 
letter "B"
*/

var text = "Manuel and I want to walk to the park. \
My name is Blanca. Manuel likes the name Blanca.";

var myName = "Blanca";

var hits = [];

for ( var i = 0; i < text.length; i++){
    if (text[i] === "B"){
     for (var j = i; j < i+myName.length; j++ ){
            hits.push(text[j]);
        }
    }
}

if(hits.length === 0) {
  console.log("Your name wasn't found!");   
} else {
  console.log(hits);  
}