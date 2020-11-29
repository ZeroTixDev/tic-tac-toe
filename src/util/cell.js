'use strict'

module.exports = class Cell {
	constructor(type = 'none') {
		this.type = type === 'none' ? 'none' : type
	}
	avail() {
		return this.type === 'none'
	}
	occupy(type) {
		this.type = type
	}
}