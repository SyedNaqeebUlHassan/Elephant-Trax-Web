import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import Header from '../../../components/header';
import Card from '../../../components/card';
import Navbar from '../../../components/navbar';
import Button from '../../../components/button';
/////Images////////
import DropdownImage from '../../../assets/images/DropdownImage.png';
import CameraImage from '../../../assets/images/CameraImage.png';
import AttachImage from '../../../assets/images/AttachImage.png';
import ProductImage from '../../../assets/images/ProductImage.png';

function CreateScreenPresenter() {
  return (
    <Row>
      <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}} span={4}>
        <Navbar/>
      </Col>
      <Col span={20}>
          <div className='container'>
            <Header headerText='CREATE PACKAGE' text='Here you can create your package or find your box.'/>      
            <Row style={{marginTop:60}}>
                <Col span={16}>
                  <Card level={5} containerStyle={styles.card} righHeadertText='Category' rightHeaderImage={DropdownImage} rightHeaderImageStyle={styles.dropdown} mainImage={ProductImage} mainImageStyle={styles.productImage} footerBoxNo='Box No: 03' foterLeftImage={AttachImage} foterLeftImageStyle={styles.attachImage} foterRightImage={CameraImage} foterRightImageStyle={styles.cameraImage} rightHeaderStyle={styles.rightHeaderContainer}/>
                  <div className='btn-groupp'>
                    <Button title='Create' style={styles.btn}/>
                    <Button title='Add Items' style={styles.btn}/>
                  </div>
                </Col>
                <Col span={2}>
                  <div className='OOPS'>
                        <p className='opps-text'>OOPS</p>
                        <p className='opps-text' style={{marginTop:-20}}>You don’t create any package</p>
                  </div>
                </Col>
            </Row>
          </div>
      </Col>
    </Row>
  );
};

export default CreateScreenPresenter;

const styles={
  card:
    {
      width:585,
      height:397,
      background:'#F6F6F6',
      backdropFilter:'blur(15)',
      borderRadius:10,
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'column',
    },
  dropdown:
    {
      width:15,
      height:15,
      marginTop:18,
      marginLeft:10
    },
  productImage:
    {
      width:216,
      height:253,

    },
  attachImage:
    {
      width:43,
      height:43,
    },
  cameraImage:
    {
      width:43,
      height:43,
      marginLeft:10
    },
  rightHeaderContainer:
    {
      display:'flex',
      justifyContent:'end',
      alignItems:'center',
      width:550,
      marginTop:-60,
    },
  btn:
    {
      width:262.5,
      height:50,
      background:'linear-gradient(90deg, #FF9A0D 0%, #FF9A0D 100%)',
      boxShadow:' 0px 130px 52px rgba(0, 0, 0, 0.01), 0px 73px 44px rgba(0, 0, 0, 0.03), 0px 33px 33px rgba(0, 0, 0, 0.04), 0px 8px 18px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)',
      borderRadius:5,
    }
  }