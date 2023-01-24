import './index.css';
import React from 'react';
import { Typography } from 'antd';
import Profile from '../profile';
///////Images///////////
const { Title } = Typography;

function index({headerText,text}) {
  return (
    <div className='header-containerd'>
            <div className='information-text'>
                <Title level={2}>{headerText}</Title>
                <div style={{marginTop:-30}}>
                    <Title level={5}>{text}</Title>
                </div>
            </div>
            <div className='profile'>
                <Profile/>
            </div>
    </div>
  )
}

export default index