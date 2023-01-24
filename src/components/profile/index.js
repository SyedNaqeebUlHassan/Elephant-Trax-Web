import './index.css';
import React from 'react';
import { Typography } from 'antd';
import AvatarImg from '../../assets/images/Avatar.png';
const { Title } = Typography;

function index() {
  return (
    <div className='profile-container'>
        <div className='profile-name'><Title level={3}>Shahrukh</Title></div>
        <div className='profile-img'>
            <img
                src={AvatarImg}
                alt='Profile'
                className='img'
            />
        </div>
    </div>
  )
}

export default index;