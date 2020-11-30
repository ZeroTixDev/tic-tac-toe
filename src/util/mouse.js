'use strict'

module.exports = class Mouse {
	constructor() {
		this.x = -1
		this.y = -1
		this.on = false
	}
	update({event, canvas}) {
		const bound = canvas.canvas.getBoundingClientRect()
		this.x = Math.round((event.pageX - bound.left) / canvas.scale)
		this.y = Math.round((event.pageY - bound.top) / canvas.scale)
	}
	down() {
		this.on = true
	}
	up() {
		this.on = false
	}
	touches({x, y, width, height}){
		return this.x > x && this.x < x + width && this.y > y && this.y < y + height
	}
}