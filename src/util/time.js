'use strict'

module.exports = {Time:class Time {
	constructor() {
		this.lastTime = 0
		this.delta = 0
	}
	update(now) {
		this.delta = (now - this.lastTime) / 1000
		this.lastTime = now
	}
},Timer: class Timer {
	constructor({start, max}) {
		this.start = start
		this.max = max
		this.current = this.max
	}
	begin() {
		this.current = this.start
	}
	update(delta) {
		if(this.current < this.max) {
			this.current += delta
		}
	}
}}