import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import PrimaryGrid from '../../../components/GridA';
import InputField from '../../../components/input';
import Button from '../../../components/button';
import { Typography } from 'antd';
//////////Images//////////////////////////
import PasswordIcon from '../../../assets/images/Password.png';
import SecureEyeIcon from '../../../assets/images/SecureEye.png';
const { Title } = Typography;

function CreatePasswordScreenPresenter() {
  return (
    <Row gutter={{xs:1,sm:1,md:2,lg:2,xl:2}}>
        <Col span={12} className='Welecome-Grid'>
            <PrimaryGrid headerText='Create New Password'/>                  
        </Col>
        <Col span={12} className='SignIn-Grid'>
            <div className='signIn-container'>
                <Title>Create New Password</Title>
                <div style={styles.textWraper}>
                    <Title level={4} style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem psum has been the industry's standard I dummy text ever since the 1500s,</Title>
                </div>
                <div style={{marginTop:54}}>
                    <InputField leftImage={PasswordIcon} leftImageStyle={styles.passwordImageStyle} placeholder="Enter Your Password" rightImage={SecureEyeIcon} rightImageStyle={styles.secureeyeImageStyle}/>
                </div>
                <div style={{marginTop:30}}>
                    <InputField leftImage={PasswordIcon} leftImageStyle={styles.passwordImageStyle} placeholder="Enter Your Password" rightImage={SecureEyeIcon} rightImageStyle={styles.secureeyeImageStyle}/>
                </div>
                <div style={{marginTop:30}}>
                <Button title='Reset Password' style={styles.buttonStyle} />
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default CreatePasswordScreenPresenter;

const styles={
   buttonStyle:{
     width:446,
     height:65,
     background:'#FF9A0D',
     borderRadius: 10,
   },
   textWraper:{
      width:466,
      height:125
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
 }