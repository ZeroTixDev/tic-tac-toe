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
	constructor({start, max, mult = 1}) {
		this.start = start
		this.max = max
		this.mult = mult
		this.current = this.max
	}
	begin() {
		this.current = this.start
	}
	update(delta) {
		if(this.current < this.max) {
			this.current += delta * this.mult
			if(this.mult > 1) this.current += (this.current/this.max) * 5
		}
		if(this.current >= this.max) this.current = this.max
	}
}}