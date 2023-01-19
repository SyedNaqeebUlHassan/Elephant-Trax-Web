import React from 'react'
import { Button } from 'antd'
function index({title,style,onClick}) {
  return (
    <Button style={style} onClick={onClick}>
      {title}
    </Button>
  )
}

export default index