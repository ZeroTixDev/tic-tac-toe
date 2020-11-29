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
		if(equal(arrayToType(array)) && matrix[0][i].type !== 'none') return true
	}
	//Diagonal
	// 1 0 0
	// 0 1 0
	// 0 0 1
	//top left to bottom right
	const diag1 = (()=>{
		const arr = []
		for(let i = 0; i < matrix.length; i++) {
			arr.push(matrix[i][i])
		}
		return arr
	})()
	//Diagonal
	// 0 0 1
	// 0 1 0
	// 1 0 0
	//top right to bottom left
	const diag2 = (()=>{
		const arr = []
		let j = 0
		for(let i = matrix.length - 1; i >= 0; i--) {
			arr.push(matrix[i][j])
			j++
		}
		return arr
	})()
	if(equal(arrayToType(diag1)) && matrix[0][0].type !== 'none') return true
	if(equal(arrayToType(diag2)) && matrix[matrix.length-1][matrix.length-1].type !== 'none') return true
	return false
}