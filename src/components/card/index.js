/* eslint-disable jsx-a11y/alt-text */
import './index.css';
import React from 'react';
import Button from '../../components/button';
import { Typography,Input } from 'antd';
const {Title,Paragraph}=Typography;
function index({isKeyword,miniCardImageStyle,miniCardImage,miniCard,BoxNoHeader,rightHeaderImageStyle,foterSocailImagesContainer,foterRightImageStyle,foterLeftImageStyle,foterRightImage,foterLeftImage,footerBoxNo,btnStyle,btnTitle,level,isBtnShow,mainImage,mainImageStyle,BoxNo,containerStyle,righHeadertText,rightHeaderStyle,rightHeaderImage,leftHedaerSocialImage,rightHeaderSocialImage,leftHedaerSocialImageStyle,rightHeaderSocialImageStyle}) {
  return (
    <div style={containerStyle}>
        <div className='hederitem-wraper'>
            <div>
                <Title level={level}>{BoxNo}</Title>
            </div>
            <div style={rightHeaderStyle}>
                <Title level={level}>{righHeadertText}</Title>
                <img
                    src={rightHeaderImage}
                    style={rightHeaderImageStyle}
                />
            </div>
            <div className='header-social-images'>
                <div style={{marginTop:20}}>
                    <Title level={level}>{BoxNoHeader}</Title>
                </div>
                <div style={{marginTop:40}}>
                    <img
                        src={leftHedaerSocialImage}
                        style={leftHedaerSocialImageStyle}
                    />
                    <img
                        src={rightHeaderSocialImage}
                        style={rightHeaderSocialImageStyle}
                    />
                </div>
            </div>

        </div>
        <div className='mainImage'>
            <img
                src={mainImage}
                style={mainImageStyle}
            />
        <div style={miniCard}>
            <img
                src={miniCardImage}
                style={miniCardImageStyle}
            />
        </div>
        </div>
        {isBtnShow && 
        <div className='btn'>
            <Button title={btnTitle} style={btnStyle} />
        </div>
        }
        <div className='footer'>
            <div className='footer-boxNo'>
                <Title level={4}>{footerBoxNo}</Title>
            </div>
            <div className='footer-social-images' style={foterSocailImagesContainer}>
                <img
                    src={foterLeftImage}
                    style={foterLeftImageStyle}
                />
                <img
                    src={foterRightImage}
                    style={foterRightImageStyle}
                />
            </div>
            {isKeyword &&
            <div className='Input&Button'>
                <div style={{display:'flex',marginRight:0,marginTop:20,background:'rgba(255, 154, 13, 0.5',borderRadius:5}}>
                    <Input
                        placeholder='Enter Keyword'
                        style={{background:'transparent',width:455}}
                    />
                    <Button title='ADD' style={{width:200,height:65,background: '#FF9A0D',borderRadius:'0 5 5 0'}} />
                </div>
                <div className='keyWord'style={{marginTop:20,width:108,height:38,background: 'rgba(255, 154, 13, 0.5)',borderRadius:5,textAlign:'center',}} >
                    <Paragraph  style={{paddingTop:10}}>KeyWord</Paragraph>
                </div>
            </div>
           }
        </div>
    </div>
  )
}

export default index;