/* 
Create a dragon slaying game! This is a practice and is meant to have random results.
*/

var slaying = true;

var youHit = Math.floor(Math.random() * 2) /*This sets youHit to a random number that's either 0
(which JavaScript reads as false) or 1 (which JavaScript reads as true). */


var damageThisRound = Math.floor(Math.random() * 5 + 1) /* First we use Math.random() to create 
a random number from 0 up to 1. For example, 0.5. Then we multiply by 5 to make the random number
from 0 up to 5. For example, 0.5 * 5 = 2.5
Next we use Math.floor() to round down to a whole number. For example, Math.floor( 2.5 ) = 2. 
Finally we add 1 to change the range from between 0 and 4 to between 1 and 5 (up to and 
including 5). */


var totalDamage = 0;

while(slaying) {
    if(youHit) {
       console.log("You hit the dragon and did " + damageThisRound + " points sword damage!"); 
       totalDamage += damageThisRound;
       if(totalDamage >= 4) {
           console.log ("You slew the dragon! You can sit on the throne!");
           slaying = false;
       } else {
           youHit = Math.floor(Math.random() * 2);
       }
    } else {
       console.log("Dragon got you! Practice those sword moves!");
       slaying = false;
    }
}