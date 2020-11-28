const Cell = require('./cell')
module.exports = class Grid {
	constructor(size = 3, matrix = [[new Cell(), new Cell(), new Cell()],[new Cell(), new Cell(), new Cell()],[new Cell(), new Cell(), new Cell()]]) {
		this.size = size
		this.matrix = matrix
	}
	updateCells({mouse}) {
		for(let row in this.matrix) {
			for(let col in this.matrix[row]) {
				const cell = this.matrix[row][col]
				cell.update({mouse})
			}
		}
	}
	copy() {
		return new Grid(this.size,this.matrix)
	}
}