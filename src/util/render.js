const { CELL_WIDTH, CELL_HEIGHT, BACKGROUND_COLOR, CENTER_X, CENTER_Y, SIZE, GAME_WIDTH, GAME_HEIGHT, PADDING } = require('./constants')
module.exports = function render({canvas, grid, mouse, turn}) {
	if(!grid || !canvas) throw new Error('called from render... canvas || grid is not defined')
	canvas.ctx.fillStyle = BACKGROUND_COLOR
	canvas.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
	//drawing the box
	const x = CENTER_X - (CELL_WIDTH * (SIZE / 2))
	const y = CENTER_Y - (CELL_HEIGHT * (SIZE / 2)) //assuming every index has the same length
	canvas.ctx.strokeStyle = 'black'
	canvas.ctx.lineWidth = 7
	canvas.ctx.strokeRect(x, y,CELL_WIDTH * SIZE, CELL_HEIGHT * SIZE )
	let clicked = false
	for (let row in grid.matrix) {
		for (let col in grid.matrix[row]) {
			const cell = grid.matrix[row][col]
			const cellX = x + row * CELL_WIDTH - 1
			const cellY = y + col * CELL_HEIGHT - 1
			const width = CELL_WIDTH + 1
			const height = CELL_HEIGHT + 1
			if(mouse.x > cellX && mouse.x < cellX + width && mouse.y > cellY && mouse.y < cellY + height && cell.type === 'none') {
				//sorry i know this shouldn't be in render, ill probably find an alternative solution later
				canvas.ctx.lineWidth = 10
				if(!clicked && mouse.on) {
					cell.type = turn
					clicked = true
				}
			}
			canvas.ctx.strokeStyle = `rgb(${cell.color},${cell.color},${cell.color})`
			canvas.ctx.strokeRect( cellX, cellY, width, height)
			if(cell.type === 'O') {
				canvas.ctx.lineWidth = 10
				canvas.ctx.beginPath()
				canvas.ctx.arc(cellX + width / 2, cellY + height / 2, 45, 0, Math.PI * 2)
				canvas.ctx.stroke()
			}
			if(cell.type === 'X') {
				canvas.ctx.lineWidth = 10
				const padding = 20 //this is for the x type
				canvas.ctx.beginPath()
				canvas.ctx.lineTo(cellX + padding, cellY + padding)
				canvas.ctx.lineTo(cellX + width - padding, cellY + height - padding)
				canvas.ctx.stroke()
				canvas.ctx.beginPath()
				canvas.ctx.lineTo(cellX + width - padding, cellY + padding)
				canvas.ctx.lineTo(cellX + padding, cellY + height - padding)
				canvas.ctx.stroke()
			}
			canvas.ctx.lineWidth = 6
		}
	}
	canvas.ctx.fillStyle = 'black'
	canvas.ctx.font = '30px sans-serif'
	canvas.ctx.fillText(`It's ${turn}'s Turn!`, GAME_HEIGHT - PADDING, CENTER_X)
	return clicked ? true : false
}