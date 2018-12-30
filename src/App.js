import React, { Component } from 'react';
import { Row, Col, Button } from 'antd'
import './App.scss'
import Jokes from './Jokes/Jokes'
import Oven from './Oven/Oven'
import { jokeSchema, ovenSchema } from './consts'
class App extends Component {
  render() {
    return (
      <div >
        <div className='App-header'>
          <div>Welcome</div>
        </div>
        <Row >

          <Col xs={12} className='Absolute-Center col-center'>
            <Oven /></Col>
          <Col xs={12} className='col-center'><Jokes /></Col>
        </Row>
        <Row >
          <Col xs={12} className='Absolute-Center col-center'>
            <a href={ovenSchema} type='primary' target='blank'><Button style={{ marginBottom: 0 }}>Watch Schema</Button></a>
          </Col>
          <Row >
            <Col xs={12} className='Absolute-Center col-center'>
              <a href={jokeSchema} type='primary' target='blank'><Button style={{ marginBottom: 0 }}>Watch Schema</Button></a>
            </Col>
          </Row>
          <div className='App-Footer'>Netanel Rotem</div>
        </Row>
      </div>
    );
  }
}

export default App;
