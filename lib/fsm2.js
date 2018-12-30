


export class Fsm {
  constructor(settings) {
    this.settings = settings
  }

  trasact(currentState, evt) {
    const nextState = this.settings[currentState].on[evt]
    const availableEvts = this.settings[nextState].on ? Object.keys(this.settings[nextState].on) : [] // this is the end
    const onEnter = this.settings[nextState].onEnter || []
    return { onEnter, nextState, availableEvts: this.settings[nextState] }
  }
}
