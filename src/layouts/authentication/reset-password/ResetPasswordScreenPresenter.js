import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import PrimaryGrid from '../../../components/GridA';
import InputField from '../../../components/input';
import Button from '../../../components/button';
import { Typography } from 'antd';
//////////Images//////////////////////////
import EmailIcon from '../../../assets/images/Email.png'; 
const { Title } = Typography;


function ResetPasswordScreenPresenter() {
  return (
    <Row gutter={{xs:1,sm:1,md:2,lg:2,xl:2}}>
        <Col span={12} className='Welecome-Grid'>
            <div className='signIn-container'>
                <Title>Reset Your Password</Title>
                <div style={styles.textWraper}>
                  <Title level={4} style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem psum has been the industry's standard I dummy text ever since the 1500s,</Title>
                </div>
                <div style={{marginTop:54}}>
                  <InputField leftImage={EmailIcon} leftImageStyle={styles.emailImageStyle} placeholder="Enter Your Email"/>
                </div>
                <div style={{marginTop:30}}>
                  <Button title='Send Email' style={styles.buttonStyle} />
                </div>
            </div>
        </Col>
        <Col span={12} className='SignIn-Grid'>
            <PrimaryGrid headerText='Reset Your Password'/>       
        </Col>
  </Row>
  )
}

export default ResetPasswordScreenPresenter;

const styles={
    emailImageStyle:{
     width:29,
     height:23,
     marginLeft:26,
     marginRight:18,
   },
   buttonStyle:{
     width:446,
     height:65,
     background:'#FF9A0D',
     borderRadius: 10,
   },
   textWraper:{
      width:466,
      height:125
   }
 }