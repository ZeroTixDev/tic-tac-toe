const { CELL_WIDTH, CELL_HEIGHT, BACKGROUND_COLOR, CENTER_X, CENTER_Y, SIZE } = require('./constants')
module.exports = function render({canvas, grid}) {
	if(!grid || !canvas) throw new Error('called from render... canvas || grid is not defined')
	canvas.ctx.fillStyle = BACKGROUND_COLOR
	canvas.ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height)
	//drawing the box
	const x = CENTER_X - (CELL_WIDTH * (SIZE / 2))
	const y = CENTER_Y - (CELL_HEIGHT * (SIZE / 2)) //assuming every index has the same length
	canvas.ctx.strokeStyle = 'black'
	canvas.ctx.lineWidth = 5
	canvas.ctx.strokeRect(x, y,CELL_WIDTH * SIZE, CELL_HEIGHT * SIZE )
	for (let row in grid.matrix) {
		for (let col in grid.matrix[row]) {
			const cell = grid.matrix[row][col]
			canvas.ctx.fillStyle = `rgb(${cell.color-Math.random()*200},${cell.color},${cell.color})`
			canvas.ctx.fillRect( x + row * CELL_WIDTH - 1, y + col * CELL_HEIGHT - 1, CELL_WIDTH + 1, CELL_HEIGHT + 1)
			console.log(x,y)
		}
	}
}