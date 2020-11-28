module.exports = class Cell {
	constructor(type = 'none') {
		this.type = type === 'none' ? 'none' : type
		this.color = 0
	}
	avail() {
		return this.type === 'none'
	}
	occupy(type) {
		this.type = type
	}
	update({mouse, delta}) {
		//do something useful
	}
}