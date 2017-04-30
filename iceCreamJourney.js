/*
Imagine a person wants to go to an ice cream shop across town. 

Complete the function to help calculate how minutes it would take to 
reach the ice cream shop on foot, given the integer walkSpeed (mph), and the integer distance (mi)

*/

var iceCreamJourney = function(walkSpeed, distance) {
	var hours = distance/walkSpeed;
	return hours * 60;
}