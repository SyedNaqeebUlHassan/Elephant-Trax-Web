/* eslint-disable jsx-a11y/alt-text */
import './index.css';
import React from 'react';
import { Input } from 'antd';

function index({leftImageStyle,rightImageStyle,leftImage,placeholder,rightImage}) {
  return (
    <div className='container-input'>
        <div className='left-container'>
            <div>
                <img
                    style={leftImageStyle}
                    src={leftImage}
                />
            </div>
            <div className='input-field-Wraper'>
                <Input
                    className='input-filed'
                    placeholder={placeholder}
                    style={{backgroundColor:'transparent',border:'none'}}
                />
            </div>
        </div>
        <div className='right-container'>
            <div style={{marginLeft:130}}>
                <img
                    style={rightImageStyle}
                    src={rightImage}
                />
            </div>
        </div>

    </div>
  )
}

export default index