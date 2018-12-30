import React, { Component } from 'react';
import Fsm from '../Fsm/Fsm'
import { oven } from '../consts'
import { Row, Col, Button } from 'antd'
import LightBulb from './components/LightBulb'
import Thermometer from './components/Thermometer'
import './style.css'
class Oven extends Component {
  constructor(props) {
    super(props)
    this.state = {
      machineState: 'start', ovenIsOn: false,
      OvenValue: 0, counter: 0
    }
    this.fsm = new Fsm(oven);
    this.renderComponentsAcordingToMachineState = this.renderComponentsAcordingToMachineState.bind(this)
  }

  cancel() {
    this.executeTrancsaction('CANCEL', { OvenValue: 0, ovenIsOn: false, counter: 0, success: "" })

  }
  turnOnTheOven() {
    this.setState({ ovenIsOn: true, success: "" }, this.startHeating)
  }
  startHeating() {
    this.executeTrancsaction('TURNINGON', { OvenValue: 0, ovenIsOn: true })

  }
  heat(val) {
    const _val = val || 0
    const nextValueOfOven = _val < 251 ? _val + 50 : _val - 50
    if (nextValueOfOven < 251 && nextValueOfOven > 200) {
      setTimeout(() => {
        if (this.state.ovenIsOn) //check if there is no canclation
        { this.executeTrancsaction('MAXTEMP', { OvenValue: nextValueOfOven }) }
      }, 2000)
    } else {
      this.setState({ OvenValue: nextValueOfOven }, () => setTimeout(() => {
        if (this.state.ovenIsOn) //check if there is no canclation
        { this.heat(nextValueOfOven) }
      }, 1000))
    }
  }
  startIdel() {
    if (this.state.counter > 3 && this.state.ovenIsOn) {
      this.executeTrancsaction('BAKED', { counter: 0, OvenValue: 0, success: 'Dinner Is Ready' })
    } else {
      setTimeout(() => {
        if (this.state.ovenIsOn) //check if there is no canclation
        { this.executeTrancsaction('MINTEMP', { counter: this.state.counter + 1, OvenValue: this.state.OvenValue - 50 }) }
      }, 3000)
    }
  }
  exeuteImmediateEvts(evt) {
    if (evt) {
      switch (evt) {
        case 'startIdel':
          this.startIdel()
          break;
        case "heat":
          this.heat(this.state.OvenValue);
          break;
        case "restart":
          this.setState({ machineState: 'start', counter: 0, OvenValue: 0, ovenIsOn: false });
          break;
        default:
          break;
      }
    }
  }
  executeTrancsaction(evt, payload) {
    const newStateSettings = this.fsm.trasact(this.state.machineState, evt, payload)
    this.setState({ machineState: newStateSettings.nextState, ...payload }, () => this.exeuteImmediateEvts(newStateSettings.ImmediateEvts))
  }
  renderComponentsAcordingToMachineState() {
    switch (this.state.machineState) {
      case 'start':
        return <div className='Absolute-Center'><h1>{this.state.success}</h1></div>
      default: return <div></div>
    }
  }
  render() {
    return (
      <div style={{ width: 400, backgroundColor: 'lightgrey' }}>
        <Row>
          <Col xs={8} className='Absolute-Center'>
            <Button disabled={this.state.machineState !== 'start'} onClick={() => this.startHeating()} >Heat</Button>
          </Col>
          <Col xs={8} className='Absolute-Center'>
            <LightBulb checked={this.state.ovenIsOn} />
          </Col>
          <Col xs={8} className='Absolute-Center'>
            <Button disabled={this.state.machineState === 'start'} onClick={() => this.cancel()} >Cancel</Button>
          </Col>
        </Row>
        <div style={{ margin: 20 }}></div>
        <hr />
        <Row style={{ margin: 20 }}><Col xs={6}>
          <Thermometer value={this.state.OvenValue} />
        </Col>
          <Col xs={18} style={{ backgroundColor: 'blue' }}>
            <img width='100%' alt='oven' height='100%' src='https://media.ao.com/en-GB/Productimages/Images/rvMedium/b3ace0an0b_ss_neff_oven_01_m_p.jpg' />
          </Col>
        </Row>
        {this.renderComponentsAcordingToMachineState()}

      </div >
    );
  }
}

export default Oven;
