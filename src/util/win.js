function equal(arr) {
	return arr.every((value)=> value === arr[0])
}
function arrayToType(array) {
	return array.map((cell)=>cell.type)
}
function taken(array) {
	return array.every((value)=> !value.avail())
}
module.exports = function win(matrix) {
	//Vertical
	for(let row in matrix) {
		if(equal(arrayToType(matrix[row])) && taken(matrix[row])) {
			return true
		}
	}
	//Horizontal
	for(let i = 0; i < matrix.length; i++) {
		const array = []
		for(let j = 0; j < matrix[i].length; j++) {
			array.push(matrix[j][i])
		}
		if(equal(arrayToType(array)) && taken(array)) return true
	}
	//top left to bottom right
	const diag1 = (()=>{
		const arr = []
		for(let i = 0; i < matrix.length; i++) {
			arr.push(matrix[i][i])
		}
		return arr
	})()
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
	if(equal(arrayToType(diag1)) && taken(diag1)) return true
	if(equal(arrayToType(diag2)) && taken(diag2)) return true
	return false
}