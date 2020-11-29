'use strict'

require('./style.css')
const { GAME_WIDTH, GAME_HEIGHT } = require('./util/constants.js')
const Canvas = require('./util/canvas')
const Grid = require('./util/grid')
const Mouse = require('./util/mouse')
const Turn = require('./util/turn')
const {Time} = require('./util/time')
const loop = require('./util/loop')
const win = require('./util/win')
const canvas = new Canvas(GAME_WIDTH, GAME_HEIGHT)
const grid = new Grid()
const mouse = new Mouse()
const time = new Time()
const turn = new Turn()
const scores = [0,0]
let theme = 'letters' // ["letters", "colors"]
window.addEventListener('resize', () => {
	canvas.resize()
})
window.addEventListener('keyup', ({keyCode}) => {
	if(keyCode === 32) {
		if(theme === 'letters') theme = 'colors'
		else theme = 'letters'
	}
})
canvas.listen('mousemove', (event) => mouse.update({event, canvas}))
canvas.listen('mousedown', () => mouse.down())
canvas.listen('mouseup', () => mouse.up())

function restart() {
	turn.randomize()
	grid.clear()
	canvas.state = 'game'
	mouse.up()
	console.log(canvas,grid,mouse,turn)
}
(function run(now) {
	time.update(now)
	if(loop({canvas, grid, mouse, turn:turn.turn, delta:time.delta, scores, theme})) {
		if(win(grid.matrix) && canvas.state !== 'win') {
			canvas.state = 'win'
			scores[turn.index]++
			canvas.restartTimer.begin()
		}else if(canvas.state === 'win' || canvas.state === 'tie'){
			restart()
		}else turn.next()
	}
	if(grid.full() && canvas.state != 'win' && canvas.state !== 'tie') {
		canvas.state = 'tie'
		canvas.restartTimer.begin()
	}
	requestAnimationFrame(run)
})()