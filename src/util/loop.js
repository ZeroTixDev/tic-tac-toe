'use strict'

const { CELL_WIDTH, CELL_HEIGHT, BACKGROUND_COLOR, CENTER_X, CENTER_Y, SIZE, GAME_WIDTH, GAME_HEIGHT, PADDING } = require('./constants')
module.exports = function loop({ canvas, grid, mouse, turn, delta, scores, theme}) {
	if (!grid || !canvas) throw new Error('called from render... canvas || grid is not defined')
	//update
	if(canvas.state === 'win' || canvas.state === 'tie') {
		canvas.restartTimer.update(delta)
		if(canvas.restartTimer.current > canvas.restartTimer.max) {
			//cooldown is done
			if(mouse.on) return true
		}
	}
	//rendering
	canvas.ctx.fillStyle = BACKGROUND_COLOR
	canvas.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
	if(theme === 'colors') {
		canvas.ctx.fillStyle = 'rgb(0,0,160)'
		canvas.ctx.fillRect(0,0,CENTER_X, GAME_HEIGHT)
		canvas.ctx.fillStyle = 'rgb(160,0,0)'
		canvas.ctx.fillRect(CENTER_X, 0, GAME_WIDTH / 2, GAME_HEIGHT)
	}
	//drawing the box
	const x = CENTER_X - (CELL_WIDTH * (SIZE / 2))
	const y = CENTER_Y - (CELL_HEIGHT * (SIZE / 2)) //assuming every index has the same length
	canvas.ctx.strokeStyle = 'black'
	canvas.ctx.lineWidth = 5
	canvas.ctx.strokeRect(x, y, CELL_WIDTH * SIZE, CELL_HEIGHT * SIZE)
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
                canvas.state !== 'win') {
				//sorry i know this shouldn't be in render, ill probably find an alternative solution later
				canvas.ctx.lineWidth = 9
				if (mouse.on) {
					cell.occupy(turn)
					clicked = true
				}
			}
			canvas.ctx.strokeStyle = `rgb(${cell.color},${cell.color},${cell.color})`
			canvas.ctx.strokeRect(cellX, cellY, width, height)
			if (cell.type === 'O') {
				if(theme === 'letters') {
					canvas.ctx.lineWidth = 9
					canvas.ctx.beginPath()
					canvas.ctx.arc(cellX + width / 2, cellY + height / 2, 45, 0, Math.PI * 2)
					canvas.ctx.stroke()
				} else if(theme === 'colors') {
					canvas.ctx.fillStyle = 'red'
					canvas.ctx.fillRect(cellX,cellY,width,height)
				}
			}
			if (cell.type === 'X') {
				if(theme === 'letters') {
					canvas.ctx.lineWidth = 9
					const padding = 20 //this is for the x type
					canvas.ctx.beginPath()
					canvas.ctx.lineTo(cellX + padding, cellY + padding)
					canvas.ctx.lineTo(cellX + width - padding, cellY + height - padding)
					canvas.ctx.stroke()
					canvas.ctx.beginPath()
					canvas.ctx.lineTo(cellX + width - padding, cellY + padding)
					canvas.ctx.lineTo(cellX + padding, cellY + height - padding)
					canvas.ctx.stroke()
				} else if(theme === 'colors') {
					canvas.ctx.fillStyle = 'blue'
					canvas.ctx.fillRect(cellX,cellY,width,height)
				}
			}
			canvas.ctx.lineWidth = 5
		}
	}
	canvas.ctx.textAlign = 'center'
	canvas.ctx.fillStyle = 'black'
	if(theme === 'colors') canvas.ctx.fillStyle = 'white'
	canvas.ctx.font = '30px sans-serif'
	let text = `It's ${turn}'s Turn`
	if (canvas.state === 'tie') text = 'The board is full'
	if (canvas.state === 'win') text = `Player ${turn} has won`
	const textX = CENTER_X
	const textY = GAME_HEIGHT - PADDING
	canvas.ctx.fillText(text, textX , textY)
	canvas.ctx.fillText('Space to change the game theme', CENTER_X, PADDING)
	canvas.ctx.font = '60px sans-serif'
	if(theme === 'letters') {
		canvas.ctx.fillText(`X ${scores[0]}`, PADDING * 2,CENTER_Y)
		canvas.ctx.fillText(`O ${scores[1]}`, GAME_WIDTH - PADDING * 2,CENTER_Y)
	}else if(theme === 'colors') {
		canvas.ctx.fillText(`Blue ${scores[0]}`, PADDING * 2,CENTER_Y)
		canvas.ctx.fillText(`Red ${scores[1]}`, GAME_WIDTH - PADDING * 2,CENTER_Y)
	}
	canvas.ctx.font = '30px sans-serif'
	canvas.ctx.fillStyle = `rgba(0,0,0,${canvas.restartTimer.current / canvas.restartTimer.max}`
	if(theme === 'colors') canvas.ctx.fillStyle = `rgba(255,255,255,${canvas.restartTimer.current / canvas.restartTimer.max}`
	if(canvas.state === 'win'|| canvas.state === 'tie') {
		canvas.ctx.fillText('Click the screen to play again', textX , textY + (PADDING / 2))
	}
	return clicked
}