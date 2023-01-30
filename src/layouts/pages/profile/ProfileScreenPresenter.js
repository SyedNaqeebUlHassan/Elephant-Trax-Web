import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import Header from '../../../components/header';
import Navbar from '../../../components/navbar';
import Input from '../../../components/input';
import Button from '../../../components/button';
import { Typography,Select,DatePicker, Space } from 'antd';
////////Images////////////
import AvatarImage from '../../../assets/images/Avatar.png';
import CameraImage from '../../../assets/images/cameraimagee.png';

import { ROUTES,BTN,COLOR,TEXT,PLACEHOLDERS} from "../../../constants";
const {Title,Paragraph}=Typography;
const { Option } = Select;

function ProfileScreenPresenter() {
  return (
    <Row>
      <Col style={styles.navbarWraper} span={4}>
        <Navbar/>
      </Col>
      <Col span={20} >
        <div className='container'>
            <Header headerText={TEXT.ScreenText.HeaderText.Profile} text={TEXT.ScreenText.ParagraphText.ProfileScreen}/>
            <div className='information-container'>
                <div className='img-container'>
                    <img
                        src={AvatarImage}
                        className='avatarImage'
                        alt='avatar'
                    />
                    <div className='cameraImageContainer'>
                        <img
                            src={CameraImage}
                            className='cameraImage'
                            alt='camera'
                            />
                    </div>
                </div>
                <div className='name-container'>
                    <Title level={2}>{TEXT.FullName}</Title>
                    <Paragraph>{TEXT.WriteYourPassion}</Paragraph>

                </div>
            </div>
            <div className='form'>
                <div className='wraper'>
                    <div >
                        <Title level={3}>{TEXT.FormText.FirstName}</Title>
                        <Input placeholder={PLACEHOLDERS.ProfileScreenPlaceholders.FirstName}/>
                    </div>
                    <div>
                        <Title level={3}>{TEXT.FormText.LastName}</Title>
                        <Input placeholder={PLACEHOLDERS.ProfileScreenPlaceholders.LastName}/>
                    </div>
                </div>
                <div className='wraper'>
                    <div >
                        <Title level={3}>{TEXT.FormText.Email}</Title>
                        <Input placeholder={PLACEHOLDERS.ProfileScreenPlaceholders.Email}/>
                    </div>
                    <div>
                        <Title level={3}>{TEXT.FormText.ConfirmEmail}</Title>
                        <Input placeholder={PLACEHOLDERS.ProfileScreenPlaceholders.Email}/>
                    </div>
                </div>
                <div className='wraper'>
                    <div >
                        <Title level={3}>{TEXT.FormText.Password}</Title>
                        <Input placeholder={PLACEHOLDERS.ProfileScreenPlaceholders.Password}/>
                    </div>
                    <div>
                        <Title level={3}>{TEXT.FormText.ConfirmPassword}</Title>
                        <Input placeholder={PLACEHOLDERS.ProfileScreenPlaceholders.Password}/>
                    </div>
                </div>
                <div className='wraper'>
                    <div >
                       <Title level={3}>{TEXT.FormText.Gender}</Title>
                       <Select placeholder={PLACEHOLDERS.ProfileScreenPlaceholders.MaleFemale} style={{width:446}}>
                            <Option value={PLACEHOLDERS.ProfileScreenValue.Male}></Option>
                            <Option value={PLACEHOLDERS.ProfileScreenValue.Female}>{TEXT.FormText.Female}</Option>
                            <Option value={PLACEHOLDERS.ProfileScreenValue.Other}>{TEXT.FormText.Other}</Option>
                        </Select>
                    </div>
                    <div>
                        <Title level={3}>{TEXT.FormText.DOB}</Title>
                        <Space style={{width:446}}>
                            <DatePicker/>
                        </Space>
                    </div>
                </div>
            </div>
            <div style={{marginTop:20}}>
                <Button title={BTN.SaveSetting} style={styles.btn}/>
            </div>
        </div>
      </Col>
    </Row>
  )
}

export default ProfileScreenPresenter;
const styles={
    btn:{
        width:1070,
        height:50,
        background:`${COLOR.BtnColor}`,
        borderRadius:10,
    },
    navbarWraper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
}