module.exports = class Turn {
	constructor(types=['X','O']) {
		this.types = types
		this.index = Math.floor(Math.random()*this.types.length)
	}
	get turn() {
		return this.types[this.index]
	}
	next() {
		this.index += 1
		if(this.index > this.types.length - 1) this.index = 0
	}
	randomize() {
		this.index = Math.floor(Math.random()*this.types.length)
	}
}