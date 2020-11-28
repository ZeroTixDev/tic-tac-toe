module.exports = class Canvas {
	constructor(width, height) {
		this.canvas = document.createElement('canvas')
		this.ctx = this.canvas.getContext('2d')
		this.ctx.textAlign = 'center'
		this.canvas.width = width
		this.canvas.height = height
		this.state = 'game'
		this.scale = undefined
		this.resize()
		document.body.appendChild(this.canvas)
	}
	resize() {
		let winw = window.innerWidth
		let winh = window.innerHeight
		let scale = Math.min(winw / this.canvas.width, winh / this.canvas.height)
		this.canvas.style.transform = 'scale(' + scale + ')'
		this.canvas.style.left = ( winw - this.canvas.width ) / 2 + 'px'
		this.canvas.style.top = ( winh - this.canvas.height ) / 2 + 'px'
		this.scale = scale
	}
	listen(type, callback) {
		this.canvas.addEventListener(type, callback)
	}
}