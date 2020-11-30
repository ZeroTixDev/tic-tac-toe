'use strict'
const {Timer} = require('./time')
module.exports = class Cell {
	constructor(type = 'none', types=['X','O','none']) {
		this.type = type === 'none' ? 'none' : type
		this.types = types
	}
	avail() {
		return this.type === 'none'
	}
	update(delta) {
		if(this.circleTimer) {
			this.circleTimer.update(delta)
		}
		if(this.xTimer) {
			this.xTimer.update(delta)
		}
	}
	occupy(type) {
		if(this.types.indexOf(type) <= -1) throw new Error('This is the wrong cell type || cell.js')
		this.type = type
		if(this.type === 'O') {
			const time = 0.2
			this.circleTimer = new Timer({start:0,max:360,mult:360/time})
			this.circleTimer.begin()
		} else if(this.type === 'X') {
			const time = 0.2
			this.xTimer = new Timer({start:0,max:20,mult:20/time})
			this.xTimer.begin()
		}
	}
}