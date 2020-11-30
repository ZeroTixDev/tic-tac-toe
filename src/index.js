'use strict'

require('./style.css')
const { GAME_WIDTH, GAME_HEIGHT } = require('./util/constants.js')
const Canvas = require('./util/canvas')
const Grid = require('./util/grid')
const Mouse = require('./util/mouse')
const Turn = require('./util/turn')
const { Time } = require('./util/time')
const State = require('./util/state')
const loop = require('./util/loop')
const win = require('./util/win')
const canvas = new Canvas(GAME_WIDTH, GAME_HEIGHT)
const grid = new Grid()
const mouse = new Mouse()
const time = new Time()
const state = new State()
const turn = new Turn()
const playerScores = [0, 0]
const human = 'O'
const ai = 'X'
const maxDepth = 5
let choseDif = false
let mode = null
// Player vs Player |  Player vs Computer

window.addEventListener('resize', () => {
	canvas.resize()
})


canvas.listen('mousemove', (event) => mouse.update({ event, canvas }))
canvas.listen('mousedown', () => mouse.down())
canvas.listen('mouseup', () => mouse.up())

function next() {
	if (win(grid.matrix) && state.not('win')) {
		state.set('win')
		playerScores[turn.index]++
		canvas.restartTimer.begin()
	} else {
		turn.next()
	}
}
function firstMove() {
	const array = [{row:0,col:0},{row:0,col:2},{row:2,col:0},{row:2,col:2},{row:1,col:1}]
	const {row, col} = array[Math.floor(Math.random() * array.length)]
	grid.makeMove({row, col, turn: ai})
	next()
}
const delay =  (ms) => {
	return new Promise((resolve)=>setTimeout(resolve, ms))
}
const processAi = () => {
	return new Promise(resolve => {
		resolve(minimax(grid.copy(), 0, true))
	})
}
async function bestMove() {
	const before = Date.now()
	const {row, col} = await processAi()
	if(Date.now() - before < 1500) await delay(Math.random() * 100 + 500)
	grid.makeMove({row, col, turn:ai})
	next()
}
function minimax(newGrid, depth, isMax) {
	if(win(newGrid.matrix)) {
		if(isMax) {
			return 10 - depth + Math.random() //computer
		} else {
			return depth - 10 + Math.random()
		}
	}
	if(newGrid.full()) return 0
	if(depth >= maxDepth) return 1
	const values = []
	for(let row in newGrid.matrix) {
		for(let col in newGrid.matrix[row]) {
			const gridCopy = newGrid.copy()
			if(!gridCopy.matrix[row][col].avail()) continue
			gridCopy.makeMove({row, col, turn: (isMax ? ai : human)})
			const value = minimax(gridCopy.copy(), depth + 1, !isMax)
			gridCopy.makeMove({row, col, turn: 'none'})
			values.push({
				cost:value,
				cell: {row, col}
			})
		}
	}
	if(isMax) {
		const max = values.sort((a,b)=> a.cost - b.cost)[0]
		if(depth === 0) {
			return max.cell
		} else {
			return max.cost + Math.random() * 5 - 2.5
		}
	} else {
		const min = values.sort((a,b) => b.cost - a.cost)[0]
		if(depth === 0) {
			return min.cell
		} else {
			return min.cost + Math.random() * 5 - 2.5
		}
	}
}
function moveAi() {
	const spots = grid.availableSpots()
	if (spots.length > 0) {
		bestMove()
	}
}

async function restart() {
	turn.randomize()
	grid.clear()
	state.set('game')
	mouse.up()
	grid.gridTimer.begin()
	if (mode === 'pvc' && turn.turn === ai) {
		await delay(500)
		firstMove()
	}
}

(function run(now) {
	time.update(now)
	const value = loop({ canvas, grid, mouse, turn: turn.turn, delta: time.delta, scores: playerScores, state, choseDif, mode, human })
	if (value === true) {
		if (win(grid.matrix) && state.not('win')) {
			state.set('win')
			playerScores[turn.index]++
			canvas.restartTimer.begin()
		} else if (state.is('win') || state.is('tie')) {
			restart()
		} else {
			//next turn aka ai
			turn.next()
			if (mode === 'pvc') {
				moveAi()
			}
		}
	}
	if (typeof value === 'object' && value.type && !choseDif) {
		choseDif = true
		if (value.type === 'pvp') mode = 'pvp'
		if (value.type === 'pvc') mode = 'pvc'
		restart()
	}
	if (grid.full() && state.not('win') && state.not('tie')) {
		state.set('tie')
		canvas.restartTimer.begin()
	}
	requestAnimationFrame(run)
})()