'use strict'

require('./style.css')
const { GAME_WIDTH, GAME_HEIGHT } = require('./util/constants.js')
const Canvas = require('./util/canvas')
const Grid = require('./util/grid')
const Mouse = require('./util/mouse')
const Turn = require('./util/turn')
const {Time} = require('./util/time')
const State = require('./util/state')
const loop = require('./util/loop')
const win = require('./util/win')
const canvas = new Canvas(GAME_WIDTH, GAME_HEIGHT)
const grid = new Grid()
const mouse = new Mouse()
const time = new Time()
const state = new State()
const turn = new Turn()
const scores = [0,0]

window.addEventListener('resize', () => {
	canvas.resize()
})

canvas.listen('mousemove', (event) => mouse.update({event, canvas}))
canvas.listen('mousedown', () => mouse.down())
canvas.listen('mouseup', () => mouse.up())

function restart() {
	turn.randomize()
	grid.clear()
	state.set('game')
	mouse.up()
	grid.gridTimer.begin()
}
(function run(now) {
	time.update(now)
	if(loop({canvas, grid, mouse, turn:turn.turn, delta:time.delta, scores, state})) {
		if(win(grid.matrix) && state.not('win')) {
			state.set('win')
			scores[turn.index]++
			canvas.restartTimer.begin()
		}else if(state.is('win') || state.is('tie')){
			restart()
		}else{
			//next turn aka ai
			turn.next()
		}
	}
	if(grid.full() && state.not('win') && state.not('tie')) {
		state.set('tie')
		canvas.restartTimer.begin()
	}
	requestAnimationFrame(run)
})()