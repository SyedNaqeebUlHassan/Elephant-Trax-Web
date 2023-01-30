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

import { ROUTES,BTN,COLOR,TEXT,PLACEHOLDERS } from "../../../constants";
const { Title,Paragraph } = Typography;

function CreatePasswordScreenPresenter() {
  return (
    <Row gutter={{xs:1,sm:1,md:2,lg:2,xl:2}}>
        <Col span={12} className='Welecome-Grid'>
            <PrimaryGrid headerText={TEXT.GridText.HeaderText.CreateNewPassword}/>                  
        </Col>
        <Col span={12} className='SignIn-Grid'>
          <div className='wraper-create'>
              <div className='signIn-container'>
                  <p className='reset-your-password-rest'>{TEXT.GridText.HeaderText.CreateNewPassword}</p>
                  <div style={styles.textWraper}>
                    <Paragraph className='paragraph-rest-password'>{TEXT.GridText.ParagraphText.SecondaryParagraph}</Paragraph>
                  </div>
                  <div style={styles.marginTop54}>
                      <InputField leftImage={PasswordIcon} leftImageStyle={styles.passwordImageStyle} placeholder={PLACEHOLDERS.AuthanticationPlaceholders.EnterYourPassword} rightImage={SecureEyeIcon} rightImageStyle={styles.secureeyeImageStyle}/>
                  </div>
                  <div style={styles.marginTop30}>
                      <InputField leftImage={PasswordIcon} leftImageStyle={styles.passwordImageStyle} placeholder={PLACEHOLDERS.AuthanticationPlaceholders.EnterYourPassword} rightImage={SecureEyeIcon} rightImageStyle={styles.secureeyeImageStyle}/>
                  </div>
                  <div style={styles.marginTop30}>
                  <Button title={BTN.Resetpassword}  />
                  </div>
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
     background:`${COLOR.BtnColor}`,
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
    secondaryParagraph:{
      textAlign:'center',
     },
    marginTop30:{
      marginTop:30
    },
    marginTop54:{
      marginTop:54
    }
 }