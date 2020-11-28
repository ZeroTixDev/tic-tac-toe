require('./style.css')
const { GAME_WIDTH, GAME_HEIGHT } = require('./util/constants.js')
const Canvas = require('./util/canvas')
const Grid = require('./util/grid')
const Mouse = require('./util/mouse')
const Time = require('./util/time')
const render = require('./util/render')
const update = require('./util/update')
const canvas = new Canvas(GAME_WIDTH, GAME_HEIGHT)
const grid = new Grid()
const mouse = new Mouse()
const time = new Time()
let turn = 'X'

window.addEventListener('resize', ()=>{
	canvas.resize()
})
canvas.listen('mousemove', (event) => mouse.update({event, canvas}))
canvas.listen('mousedown', () => mouse.down())
canvas.listen('mouseup', () => mouse.up())
function nextTurn(turn) {
	return turn === 'X'? 'O': 'X'
}
(function run(now) {
	time.update(now)
	update({mouse, grid, delta:time.delta})
	const next = render({canvas, grid, mouse, turn})
	if(next) turn = nextTurn(turn)
	requestAnimationFrame(run)
})()