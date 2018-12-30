import React, { Component } from 'react';
import Fsm from '../Fsm/Fsm'
import { settings, apiEndPoint } from '../consts'
import { Button } from 'antd'
import DataDisplay from './components/DataDisplay'
import FetchData from './components/FetchData'
class Jokes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      machineState: 'start'
    }
    this.fsm = new Fsm(settings);
    this.renderComponentsAcordingToMachineState = this.renderComponentsAcordingToMachineState.bind(this)
  }
  executeTrancsaction(evt, payload) {
    const newStateSettings = this.fsm.trasact(this.state.machineState, evt, payload)
    this.setState({ machineState: newStateSettings.nextState, ...payload })
  }
  renderComponentsAcordingToMachineState() {
    switch (this.state.machineState) {
      case 'start':
        return <FetchData url={apiEndPoint} onError={err => this.executeTrancsaction('ERROR')} onFetchEnd={(res) => this.executeTrancsaction('SEARCH', { text: res.data })} />
      case 'joke':
        return <DataDisplay text={this.state.text} confirm={() => this.executeTrancsaction('CONFIRM', null)} cancel={() => this.executeTrancsaction('CANCEL', null)} />
      case 'success':
        return <div><h1>HA HA! :)</h1><Button onClick={() => this.executeTrancsaction('TRYAGAIN', null)}>Try Again </Button></div>
      case 'error':
        return <div><h1>error</h1> <Button onClick={() => this.executeTrancsaction('TRYAGAIN', null)}>Try Again </Button></div>
      default: return <div></div>
    }
  }
  render() {
    return (
      <div className='Absolute-Center'>
        {this.renderComponentsAcordingToMachineState()}
      </div>
    );
  }
}
export default Jokes;
