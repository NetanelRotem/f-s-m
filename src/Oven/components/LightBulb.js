import React from 'react'
import './style.css'

const LightBulb = (props) => {
  return <input className="l" type="checkbox" readOnly checked={props.checked} />
}

export default LightBulb;