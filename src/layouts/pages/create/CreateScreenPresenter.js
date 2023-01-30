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

import { ROUTES,BTN,COLOR,TEXT} from "../../../constants";

function CreateScreenPresenter() {
  return (
    <Row>
      <Col style={styles.navbarWraper} span={4}>
        <Navbar/>
      </Col>
      <Col span={20}>
          <div className='container'>
            <Header headerText={TEXT.ScreenText.HeaderText.CreatePackage} text={TEXT.ScreenText.ParagraphText.HomeScreen$CreateScreen}/>      
            <Row style={styles.marginTop60}>
                <Col span={16}>
                  <Card level={5} containerStyle={styles.card} righHeadertText={TEXT.Category} rightHeaderImage={DropdownImage} rightHeaderImageStyle={styles.dropdown} mainImage={ProductImage} mainImageStyle={styles.productImage} footerBoxNo={TEXT.BoxNo} foterLeftImage={AttachImage} foterLeftImageStyle={styles.attachImage} foterRightImage={CameraImage} foterRightImageStyle={styles.cameraImage} rightHeaderStyle={styles.rightHeaderContainer}/>
                  <div className='btn-groupp'>
                    <Button title={BTN.Create} style={styles.btn}/>
                    <Button title={BTN.AddItems} style={styles.btn}/>
                  </div>
                </Col>
                <Col span={2}>
                  <div className='OOPS'>
                        <p className='opps-text'>{TEXT.OOPS}</p>
                        <p className='opps-text' style={styles.dontHaveText}>{TEXT.YouDontCreateAnyPackage}</p>
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
      background:`${COLOR.CardBackgroundColor}`,
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
      background:`${COLOR.BtnLinerColor}`,
      boxShadow:' 0px 130px 52px rgba(0, 0, 0, 0.01), 0px 73px 44px rgba(0, 0, 0, 0.03), 0px 33px 33px rgba(0, 0, 0, 0.04), 0px 8px 18px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)',
      borderRadius:5,
    },
    navbarWraper:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    marginTop60:{
      marginTop:60
    },
    dontHaveText:{
      marginTop:-20,
    }
  }