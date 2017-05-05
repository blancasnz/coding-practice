/*

Print board

given an integer n, print a n x n square in the following form:

printBoard(3)
XOO
XXO
XXX

printBoard(4)
XOOO
XXOO
XXXO
XXXX

*/

var printBoard = function(n) {
	
    for(var i = 1; i <= n; i++){
      var square = "";
       for(var j = 1; j <= n; j++){
           if(j <= i){
             square += "X";
           }
           else {
             square += "O";
           }
       }
       console.log(square);
    }
}
