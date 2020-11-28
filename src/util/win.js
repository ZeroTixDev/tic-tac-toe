function equal(arr) {
	return arr.every((value)=> value === arr[0])
}
function arrayToType(array) {
	return array.map((cell)=>cell.type)
}
module.exports = function win(matrix) {
	//Vertical
	for(let row in matrix) {
		if(equal(arrayToType(matrix[row])) && matrix[row][0].type !== 'none') {
			// 1 0 0
			// 1 0 0  //matrix,  row 0 , look at the other types , 0 == 1 && 1 == 2 && type != none
			// 1 0 0
			return true
		}
	}
	//Horizontal
	for(let i = 0; i < matrix.length; i++) {
		const array = []
		for(let j = 0; j < matrix[i].length; j++) {
			array.push(matrix[j][i])
		}
		if(equal(arrayToType(array)) && matrix[0][i].type !== 'none') {
			return true
		}
	}
	return false
}