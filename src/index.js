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
let choseDif = false
let mode = null
// Player vs Player |  Player vs Computer

window.addEventListener('resize', () => {
	canvas.resize()
})


canvas.listen('mousemove', (event) => mouse.update({ event, canvas }))
canvas.listen('mousedown', () => mouse.down())
canvas.listen('mouseup', () => mouse.up())

const scores = {
	'X':10,
	'O':-10,
	'tie':0,
}

function bestMove(spots) {
	let bestScore = -Infinity
	let move
	for (let spot of spots) {
		grid.makeMove({ row: spot.row, col: spot.col, turn: ai })
		let score = minimax(grid.matrix, 0, false)
		grid.makeMove({ row: spot.row, col: spot.col, turn: 'none' })
		if (score > bestScore) {
			bestScore = score
			move = { row: spot.row, col: spot.col }
		}
	}
	grid.makeMove({ row: move.row, col: move.col, turn: ai })
	if (win(grid.matrix) && state.not('win')) {
		state.set('win')
		playerScores[turn.index]++
		canvas.restartTimer.begin()
	} else {
		turn.next()
	}
}

function minimax(matrix, depth, isMax) {
	if(win(matrix)) return isMax ? scores[ai] : scores[human]
	if(grid.full()) return scores['tie']
	if(isMax) {
		let bestScore = -Infinity
		for(let row in matrix) {
			for(let col in matrix[row]) {
				const cell = matrix[row][col]
				if(cell.avail()) {
					grid.makeMove({row,col,turn:ai})
					let score = minimax(matrix, depth + 1, false)
					grid.makeMove({row,col,turn:'none'})
					bestScore = Math.max(score, bestScore)
				}
			}
		}
		return bestScore
	} else {
		let bestScore = Infinity
		for(let row in matrix) {
			for(let col in matrix[row]) {
				const cell = matrix[row][col]
				if(cell.avail()) {
					grid.makeMove({row,col,turn:human})
					let score = minimax(matrix, depth + 1, true)
					grid.makeMove({row,col,turn:'none'})
					bestScore = Math.min(score, bestScore)
				}
			}
		}
		return bestScore
	}
}

function moveAi() {
	const spots = grid.availableSpots()
	if (spots.length > 0) {
		//setTimeout(() => {
		bestMove(spots)
		/*const spot = spots[Math.floor(Math.random() * spots.length)]
            grid.makeMove({row:spot.row,col:spot.col,turn:turn.turn})
            if(win(grid.matrix) && state.not('win')) {
            	state.set('win')
            	playerScores[turn.index]++
            	canvas.restartTimer.begin()
            } else {
            	turn.next()
            }*/
		//}, Math.random() * 500 + 200)
	}
}

function restart() {
	turn.randomize()
	grid.clear()
	state.set('game')
	mouse.up()
	grid.gridTimer.begin()
	if (mode === 'pvc' && turn.turn === ai) {
		moveAi()
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
	if (typeof value === 'object' && value.type) {
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