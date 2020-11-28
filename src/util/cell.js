module.exports = class Cell {
	constructor(type = 'none') {
		this.type = type === 'none' ? 'none' : type
		this.default = 255
		this.color = 255
	}
	avail() {
		return this.type === 'none'
	}
	occupy(type) {
		this.type = type
	}
	update({mouse, delta}) {
		this.color -= delta * 255
	}
}