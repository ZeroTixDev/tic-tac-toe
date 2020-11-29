'use strict'

const Cell = require('./cell')
module.exports = class Grid {
	constructor(size = 3, matrix = [[new Cell(), new Cell(), new Cell()],[new Cell(), new Cell(), new Cell()],[new Cell(), new Cell(), new Cell()]]) {
		this.size = size
		this.matrix = matrix
	}
	full() {
		for(let row in this.matrix) {
			for(let col in this.matrix[row]) {
				if(this.matrix[row][col].avail()) return false
			}
		}
		return true
	}
	clear() {
		for(let row in this.matrix) {
			for(let col in this.matrix[row]) {
				this.matrix[row][col] = new Cell()
			}
		}
	}
}