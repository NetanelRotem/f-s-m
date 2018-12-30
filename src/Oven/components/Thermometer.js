import React from 'react'
import { Slider } from 'antd';

const style = {
  float: 'left',
  height: 280,
};

const marks = {
  0: '0°C',
  100: '100°C',
  200: '200°C',
  300: {
    style: {
      color: '#f50',
    },
    label: <strong>300°C</strong>,
  },
};
const Thermometer = (props) => {
  return <div style={{ height: 300 }}>
    <div style={style}>
      <Slider vertical range marks={marks} max={300} min={0} value={[0, props.value]} defaultValue={[0, 0]} />
    </div>
  </div>
}
export default Thermometer