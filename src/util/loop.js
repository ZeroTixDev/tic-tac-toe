'use strict'

function degToRad(deg) {
	return deg * Math.PI / 180
}
const {
	CELL_WIDTH,
	CELL_HEIGHT,
	BACKGROUND_COLOR,
	CENTER_X,
	CENTER_Y,
	SIZE,
	GAME_WIDTH,
	GAME_HEIGHT,
	PADDING,
	GRID_OUTLINE_COLOR,
	X_COLOR,
	O_COLOR,
	TEXT_COLOR,
	HIGHLIGHT_COLOR
} = require('./constants')
module.exports = function loop({ canvas, grid, mouse, turn, delta, scores, state }) {
	if (!grid || !canvas) throw new Error('called from render... canvas || grid is not defined')
	//update
	if (state.is('win') || state.is('tie')) {
		canvas.restartTimer.update(delta)
		if (canvas.restartTimer.current >= canvas.restartTimer.max) {
			//cooldown is done
			if (mouse.on) return true
		}
	}
	grid.cellUpdate(delta)
	//rendering
	canvas.ctx.fillStyle = BACKGROUND_COLOR
	canvas.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
	//drawing the box
	const x = CENTER_X - (CELL_WIDTH * (SIZE / 2))
	const y = CENTER_Y - (CELL_HEIGHT * (SIZE / 2)) //assuming every index has the same length
	let clicked = false
	for (let row in grid.matrix) {
		for (let col in grid.matrix[row]) {
			const cell = grid.matrix[row][col]
			const cellX = x + row * CELL_WIDTH - 1
			const cellY = y + col * CELL_HEIGHT - 1
			const width = CELL_WIDTH + 1
			const height = CELL_HEIGHT + 1
			if (mouse.x > cellX &&
                mouse.x < cellX + width &&
                mouse.y > cellY &&
                mouse.y < cellY + height &&
                cell.avail() &&
                state.not('win')) {
				if (mouse.on && !clicked) {
					grid.makeMove({ row, col, turn })
					clicked = true
				}
			}
			canvas.ctx.strokeStyle = GRID_OUTLINE_COLOR
			canvas.ctx.strokeRect(cellX, cellY, width, height)
			if (cell.type === 'O') {
				canvas.ctx.lineWidth = 12
				canvas.ctx.strokeStyle = O_COLOR
				canvas.ctx.save()
				canvas.ctx.translate(cellX + width / 2, cellY + height / 2)
				canvas.ctx.scale(-1, 1)
				canvas.ctx.rotate(degToRad(-90))
				canvas.ctx.beginPath()
				if (cell.circleTimer && cell.circleTimer.current > 0) {
					canvas.ctx.arc(0,0, 40, 0, degToRad(cell.circleTimer.current))
				}
				canvas.ctx.stroke()
				canvas.ctx.restore()
			}
			if (cell.type === 'X') {
				canvas.ctx.lineWidth = 12
				canvas.ctx.strokeStyle = X_COLOR
				let padding = 50
				if(cell.xTimer && cell.xTimer.current > 0) {
					padding = cell.xTimer.current * -1 + 50
				}
				canvas.ctx.beginPath()
				canvas.ctx.lineTo(cellX + padding, cellY + padding)
				canvas.ctx.lineTo(cellX + width - padding, cellY + height - padding)
				canvas.ctx.stroke()
				canvas.ctx.beginPath()
				canvas.ctx.lineTo(cellX + width - padding, cellY + padding)
				canvas.ctx.lineTo(cellX + padding, cellY + height - padding)
				canvas.ctx.stroke()
			}
			canvas.ctx.lineWidth = 8
		}
	}
	canvas.ctx.strokeStyle = BACKGROUND_COLOR
	canvas.ctx.lineWidth = 15
	canvas.ctx.lineWidth = grid.gridTimer.current * -1 + 290//15
	canvas.ctx.strokeRect(x, y, CELL_WIDTH * SIZE, CELL_HEIGHT * SIZE)
	canvas.ctx.lineWidth = 8
	canvas.ctx.textAlign = 'center'
	canvas.ctx.fillStyle = TEXT_COLOR
	canvas.ctx.font = '30px sans-serif'
	let text = `${turn} Turn`
	if (state.is('tie')) text = 'The board is full'
	if (state.is('win')) text = `Player ${turn} has won`
	const textX = CENTER_X
	const textY = CENTER_Y - PADDING - 10
	canvas.ctx.fillText(text, textX, textY)
	canvas.ctx.fillStyle = TEXT_COLOR
	canvas.ctx.save()
	canvas.ctx.globalAlpha = canvas.restartTimer.current / canvas.restartTimer.max
	if (state.is('win') || state.is('tie')) {
		canvas.ctx.fillText('Click the screen to play again', textX, CENTER_Y + (PADDING * 1.5))
	}
	canvas.ctx.globalAlpha = 1
	canvas.ctx.restore()
	canvas.ctx.strokeStyle = GRID_OUTLINE_COLOR
	canvas.ctx.font = '40px sans-serif'
	if(turn === 'X') canvas.ctx.strokeStyle = HIGHLIGHT_COLOR
	canvas.ctx.strokeRect(CENTER_X - 350, PADDING / 2, 300, 70)
	canvas.ctx.strokeStyle = GRID_OUTLINE_COLOR
	canvas.ctx.fillStyle = TEXT_COLOR
	canvas.ctx.fillText('X', CENTER_X - 300, PADDING / 2 + 50)
	let xText = String(scores[0])
	if(scores[0] === 0) xText = '-'
	canvas.ctx.font = '45px Arial'
	canvas.ctx.fillText(xText, CENTER_X - 75, PADDING / 2 + 50)
	if(turn === 'O') canvas.ctx.strokeStyle = HIGHLIGHT_COLOR
	canvas.ctx.strokeRect(CENTER_X + 50, PADDING / 2, 300, 70)
	canvas.ctx.font = '40px sans-serif'
	canvas.ctx.fillText('O', CENTER_X + 100, PADDING / 2 + 50)
	let oText = String(scores[1])
	if(scores[1] === 0) oText = '-'
	canvas.ctx.font = '45px Arial'
	canvas.ctx.fillText(oText, CENTER_X + 275, PADDING / 2 + 50)
	canvas.ctx.font = '30px sans-serif'
	return clicked
}