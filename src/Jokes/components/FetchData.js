import React, { Component } from 'react';
import { Button, Icon, Spin } from 'antd'
import axios from 'axios';
class FetchData extends Component {

  constructor(props) {
    super(props)
    this.state = { loading: false }
  }

  getData() {
    this.setState({ loading: true }, () => axios.get(this.props.url).then(res => {
      this.setState({ loading: false })
      this.props.onFetchEnd(res)
    }, err => {
      this.setState({ loading: false })
      this.props.onError(err)
    }))
  }

  render() {
    return (
      <div  >
        <span><Button type="dashed" onClick={this.getData.bind(this)}> Get A Joke!! <Icon type='search' /> </Button></span>
        <div> {this.state.loading && <Spin tip="Loading..." />}</div>
      </div>
    );
  }
}
export default FetchData;
