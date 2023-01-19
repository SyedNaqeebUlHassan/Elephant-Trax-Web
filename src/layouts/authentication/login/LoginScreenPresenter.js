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
const { Title } = Typography;


function LoginScreenPresenter() {
  return (
    <Row gutter={{xs:1,sm:1,md:2,lg:2,xl:2}}>
        <Col span={12} className='Welecome-Grid'>
            <PrimaryGrid headerText='Welecome Back'/>
        </Col>
        <Col span={12} className='SignIn-Grid'>
            <div className='signIn-container'>
                <Title>Hello!</Title>
                <Title level={4}>Sign In Your Account</Title>
                <div style={{marginTop:54}}>
                  <InputField leftImage={EmailIcon} leftImageStyle={styles.emailImageStyle} placeholder="Enter Your Email"/>
                </div>
                <div style={{marginTop:30}}>
                  <InputField leftImage={PasswordIcon} leftImageStyle={styles.passwordImageStyle} placeholder="Enter Your Password" rightImage={SecureEyeIcon} rightImageStyle={styles.secureeyeImageStyle}/>
                </div>
                <div style={{marginTop:30}}>
                  <Button title='Sign In' style={styles.buttonStyle} />
                </div>
                <div style={{width:446,textAlign:'end'}}>
                  <Title level={5}>Forget Password</Title>
                </div>
                <Title level={5}>OR</Title>
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
                <Title level={5} className='dnt-text'>Don’t have an account! <span className='sign-up-text'>Sign Up</span></Title>
            </div>
         </Col>
        
    </Row>
  )
}

export default LoginScreenPresenter;

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
    background:'#FF9A0D',
    borderRadius: 10,
  },
}