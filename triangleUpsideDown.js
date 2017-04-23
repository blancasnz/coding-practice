/*

print this pattern
#####
####
###
##
#

*/

var triangle = function() {
  var trianglePattern = "";
  for(var i = 5; i > 0; i --){
    for(var j = 0; j < i; j++){
      trianglePattern += "#";
    }
    console.log(trianglePattern);
    trianglePattern = "";
    
    }
 }

triangle();