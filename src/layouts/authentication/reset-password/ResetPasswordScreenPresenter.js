import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import PrimaryGrid from '../../../components/GridA';
import InputField from '../../../components/input';
import Button from '../../../components/button';
import { Typography } from 'antd';
//////////Images//////////////////////////
import EmailIcon from '../../../assets/images/Email.png';

import { ROUTES,BTN,COLOR,TEXT,PLACEHOLDERS } from "../../../constants";
const { Title,Paragraph } = Typography;



function ResetPasswordScreenPresenter() {
  return (
    <Row gutter={{xs:1,sm:1,md:2,lg:2,xl:2}}>
        <Col span={12} className='Welecome-Grid'>
            <div className='signIn-container'>
                <p className='reset-your-password-rest'>{TEXT.GridText.HeaderText.ResetYourPassword}</p>
                <div style={styles.textWraper}>
                  <Paragraph className='paragraph-rest-password'>{TEXT.GridText.ParagraphText.SecondaryParagraph}</Paragraph>
                </div>
                <div style={styles.marginTop30}>
                  <InputField leftImage={EmailIcon} leftImageStyle={styles.emailImageStyle} placeholder={PLACEHOLDERS.AuthanticationPlaceholders.EnterYourEmail}/>
                </div>
                <div style={styles.marginTop30}>
                  <Button title={BTN.SendEmail}  />
                </div>
            </div>
        </Col>
        <Col span={12} className='SignIn-Grid'>
            <PrimaryGrid headerText={TEXT.GridText.HeaderText.ResetYourPassword}/>       
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
     background:`${COLOR.BtnColor}`,
     borderRadius: 10,
   },
   textWraper:{
      width:466,
      height:125
   },
   marginTop30:{
    marginTop:30
   },
   secondaryParagraph:{
    textAlign:'center',
   }
 }