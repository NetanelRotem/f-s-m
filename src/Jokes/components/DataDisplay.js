import React from 'react';
import { Card, Icon, Button } from 'antd';

const DataDisplay = (props) => {
  return <Card
    title="Joke"
    style={{ width: 400 }}
    actions={[<Button type="primary" onClick={() => props.confirm()}  ><Icon type="check" /></Button>,
    <Button type="primary" onClick={() => props.cancel()} ><Icon type="close" /></Button>]}
  >
    <p>{props.text}</p>
  </Card>
}

export default DataDisplay