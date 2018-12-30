

export default class Fsm {
  constructor(settings) {
    this.settings = settings
    console.log(this.settings);
  }
  trasact(currentState, evt, payload) {
    console.log(currentState, evt, payload);
    console.log(this.settings.states[currentState].on[evt]);
    const nextState = this.settings.states[currentState].on[evt]
    console.log(nextState);
    let ImmediateEvts;
    if (nextState) {
      ImmediateEvts = this.settings.states[nextState].onEnter
    }
    return { nextState, payload, ImmediateEvts }
  }
}
