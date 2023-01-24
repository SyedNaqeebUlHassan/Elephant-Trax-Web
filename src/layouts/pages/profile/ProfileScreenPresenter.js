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

const {Title,Paragraph}=Typography;
const { Option } = Select;

function ProfileScreenPresenter() {
  return (
    <Row>
      <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}} span={4}>
        <Navbar/>
      </Col>
      <Col span={20} >
        <div className='container'>
            <Header headerText='Profile' text='Here you can create your profile.'/>
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
                    <Title level={2}>M.Shahrukh Khan</Title>
                    <Paragraph>Write your passion</Paragraph>

                </div>
            </div>
            <div className='form'>
                <div className='wraper'>
                    <div >
                        <Title level={3}>First Name</Title>
                        <Input placeholder='Shahrukh Khan'/>
                    </div>
                    <div>
                        <Title level={3}>Last Name</Title>
                        <Input placeholder='Yousafzai'/>
                    </div>
                </div>
                <div className='wraper'>
                    <div >
                        <Title level={3}>Email</Title>
                        <Input placeholder='something@gmail.com'/>
                    </div>
                    <div>
                        <Title level={3}>Confirm Email</Title>
                        <Input placeholder='something@gmail.com'/>
                    </div>
                </div>
                <div className='wraper'>
                    <div >
                        <Title level={3}>Password</Title>
                        <Input placeholder='Shahrukh123456@'/>
                    </div>
                    <div>
                        <Title level={3}>Confirm Password</Title>
                        <Input placeholder='Shahrukh123456@'/>
                    </div>
                </div>
                <div className='wraper'>
                    <div >
                       <Title level={3}>Gender</Title>
                       <Select placeholder="Male/Female" style={{width:446}}>
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </div>
                    <div>
                        <Title level={3}>D/O/B</Title>
                        <Space style={{width:446}}>
                            <DatePicker/>
                        </Space>
                    </div>
                </div>
            </div>
            <div style={{marginTop:20}}>
                <Button title='Save Setting' style={styles.btn}/>
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
        background:'#FF9A0D',
        borderRadius:10,
    }
}