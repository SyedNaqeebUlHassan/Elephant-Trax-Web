import './index.css';
import React from 'react';
import { Button } from 'antd';
function index({title,style,onClick}) {
  return (
    <div >
      <Button className='btn-component' style={style} onClick={onClick}>
        {title}
      </Button>
    </div>
  )
};

export default index;