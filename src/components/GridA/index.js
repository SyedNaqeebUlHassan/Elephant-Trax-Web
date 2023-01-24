import './index.css';
import React from 'react';
import Logo from '../../assets/images/Logo.png';
import { Typography } from 'antd';
const { Title } = Typography;

function index({headerText,headerTextStyle}) {
  return (
    <div className='container-grid'>
        <div className='img'> 
            <img
                className='img'
                src={Logo}
                alt='Logo.png'
            />
        </div>
        <div>
            <Title  style={headerTextStyle}>{headerText}</Title>
        </div>
        <div>
            <Title className='text' level={4}>Lorem ipsum dolor sit amet consectetur. Eget venenatis commodo faucibus lorem ac egestas. Dolor nulla dui venenatis urna sed ipsum turpis. Mollis odio eleifend odio nulla diam donec lacus. Laoreet odio ornare dis volutpat. Mauris mauris elementum nec nibh id. Tincidunt sed augue quisque eget viverra lacus ornare. Nunc nisl gravida auctor lorem est phasellus </Title>
        </div>
    </div>
  )
}

export default index;