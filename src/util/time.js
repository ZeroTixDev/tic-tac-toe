'use strict'

module.exports = class Time {
	constructor() {
		this.lastTime = 0
		this.delta = 0
	}
	update(now) {
		this.delta = (now - this.lastTime) / 1000
		this.lastTime = now
	}
}