
/**

Calculate the sum

ex:
sum([1,2,3]) -> 6
sum([10,25,5]) -> 40

*/

var sum = function(arr) {
	var added = 0;
	for (var i = 0; i < arr.length; i++){
		added += arr[i];
	}
	return added;
}