'use strict'
const {Timer} = require('./time')
const Cell = require('./cell')
module.exports = class Grid {
	constructor(size = 3, matrix = [[new Cell(), new Cell(), new Cell()],[new Cell(), new Cell(), new Cell()],[new Cell(), new Cell(), new Cell()]]) {
		this.size = size
		this.matrix = matrix
		this.gridTimer = new Timer({start:0,max:260,mult:260/0.5})
		this.gridTimer.begin()
	}
	full() {
		for(let row in this.matrix) {
			for(let col in this.matrix[row]) {
				if(this.matrix[row][col].avail()) return false
			}
		}
		return true
	}
	cellUpdate(delta) {
		for(let row in this.matrix) {
			for(let col in this.matrix[row]) {
				this.matrix[row][col].update(delta)
			}
		}
		if(this.gridTimer) {
			this.gridTimer.update(delta)
		}
	}
	makeMove({row,col,turn}) {
		this.matrix[row][col].occupy(turn)
	}
	clear() {
		for(let row in this.matrix) {
			for(let col in this.matrix[row]) {
				this.matrix[row][col] = new Cell()
			}
		}
	}
}