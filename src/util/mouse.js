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
}