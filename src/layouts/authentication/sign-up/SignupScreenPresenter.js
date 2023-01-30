import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import PrimaryGrid from '../../../components/GridA';
import InputField from '../../../components/input';
import Button from '../../../components/button';
import { Typography } from 'antd';
//////////Images//////////////////////////
import EmailIcon from '../../../assets/images/Email.png'; 
import PasswordIcon from '../../../assets/images/Password.png';
import SecureEyeIcon from '../../../assets/images/SecureEye.png';
import FbIcon from '../../../assets/images/FB.png';
import GoogleIcon from '../../../assets/images/Google.png';
import InstaIcon from '../../../assets/images/Insta.png';
import AdminIcon from '../../../assets/images/Admin.png';

import { useNavigate } from "react-router-dom";
import { ROUTES,BTN,COLOR,FontFamily,TEXT,PLACEHOLDERS } from "../../../constants";

const { Title,Paragraph } = Typography;
function SignupScreenPresenter() {
  const navigate = useNavigate();
  return (
    <Row gutter={{xs:1,sm:1,md:2,lg:2,xl:2}}>
        <Col span={12} className='Welecome-Grid'>
            <div className='signIn-container'>
                <Title className='hello-text'>{TEXT.GridText.HeaderText.Hello}</Title>
                <div className='paragarph-text-signin'>
                  <Title level={4}>{TEXT.GridText.ParagraphText.SignCreateYourAccount}</Title>
                </div>
                <div style={styles.marginTop54}>
                  <InputField leftImage={AdminIcon} leftImageStyle={styles.adminImageStyle} placeholder={PLACEHOLDERS.AuthanticationPlaceholders.EnterYourName}/>
                </div>
                <div style={styles.marginTop30}>
                  <InputField leftImage={EmailIcon} leftImageStyle={styles.emailImageStyle} placeholder={PLACEHOLDERS.AuthanticationPlaceholders.EnterYourEmail}/>
                </div>
                <div style={styles.marginTop30}>
                  <InputField leftImage={PasswordIcon} leftImageStyle={styles.passwordImageStyle} placeholder={PLACEHOLDERS.AuthanticationPlaceholders.EnterYourPassword} rightImage={SecureEyeIcon} rightImageStyle={styles.secureeyeImageStyle}/>
                </div>
                <div style={styles.marginTop30}>
                  <Button className='signup-btn-home'  onClick={()=>navigate(ROUTES.Login)} title={BTN.SignUp}  />
                </div>
                <div className='or'>
                  <Paragraph style={styles.or} level={5}>{TEXT.GridText.ParagraphText.OR}</Paragraph>
                </div>
                <div className='socail-images-container'>
                  <div>
                    <img 
                      className='socail-images'
                      src={FbIcon}
                      alt='FB ICon'
                  />
                  </div>
                  <div>
                    <img
                      className='socail-images'
                      src={GoogleIcon}
                      alt='FB ICon'
                    />
                  </div>
                  <div>
                    <img
                        className='socail-images'
                        src={InstaIcon}
                        alt='FB ICon' 
                    />
                  </div>
                </div>
                <Title level={5} className='dnt-text'>{TEXT.GridText.ParagraphText.DontHaveAnAccount} <span className='sign-up-text'>{TEXT.GridText.ParagraphText.SignIn}</span></Title>     
            </div>
        </Col>
        <Col span={12} className='SignIn-Grid'>
            <PrimaryGrid headerText={TEXT.GridText.HeaderText.CreateYourAccount}/>
         </Col> 
    </Row>
  )
}

export default SignupScreenPresenter;

const styles={
  emailImageStyle:{
   width:29,
   height:23,
   marginLeft:26,
   marginRight:18,
 },
 passwordImageStyle:{
   width:29,
   height:22,
   marginLeft:26,
   marginRight:18,
 },
 secureeyeImageStyle:{
   width:33,
   height:21,
   marginRight:30,
 },
 buttonStyle:{
   width:446,
   height:65,
   background:`${COLOR.BtnColor}`,
   borderRadius: 10,
 },
 adminImageStyle:{
  width:36,
  height:36,
  marginLeft:26,
  marginRight:18,
 },
 or:{
  fontFamily:`${FontFamily.fontSanic}`,
  fontStyle:'normal',
  fontWeight:'700',
  fontSize:'20px',
  lineHeight:'24px',
  color:`${COLOR.SecondaryTextColor}`,
  marginTop:57,
 },
 marginTop30:{
  marginTop:30
 },
 marginTop54:{
  marginTop:54
 }
}