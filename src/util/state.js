module.exports = class State {
	constructor(state='game',states=['game','tie','win']) {
		this.state = state
		this.states = states
	}
	is(state) {
		return this.state === state
	}
	not(state) {
		return this.state !== state
	}
	set(state) {
		if(this.states.indexOf(state) > -1) {
			this.state = state
			return
		}
		throw new Error('Cannot set state of undefined, try adding it in the states array || called from state.js')
	}
}