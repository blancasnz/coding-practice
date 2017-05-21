/*
Write a program that creates a string that represents an 8×8 grid, using newline characters 
to separate lines. At each position of the grid there is either a space or a “#” character. 
The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 and change the 
program so that it works for any size, outputting a grid of the given width and height.

"\n" allows for a new line to start.  So we are building up one string, in this case graph, and 
"\n" allows for line breaks. This is why graph can be outside the for loop and doesn't have to 
start off as an empty string every time you loop.

The pattern is adding the row and column position and checking if they are even.
*/

var graph = "";
var size = 8;

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        if ((j + i) % 2 === 0) {
            graph += " ";
        } else {
            graph += "#";
        }
    }
  graph += "\n";
}
console.log(graph);