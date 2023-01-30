import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import Header from '../../../components/header';
import Card from '../../../components/card';
import Navbar from '../../../components/navbar';
/////Images////////
import CameraImage from '../../../assets/images/CameraImage.png';
import AttachImage from '../../../assets/images/AttachImage.png';
import ProductImage from '../../../assets/images/ProductImage.png';

import {COLOR,TEXT} from "../../../constants";
import { useSelector } from 'react-redux';

function AddItemsScreenPresenter() {

  const data=useSelector(state=>state.dataSlice);
  console.log(data);
  return (
    <Row>
      <Col style={styles.navbarWraper} span={4}>
        <Navbar/>
      </Col>
      <Col span={20}>
        <div className='container'>
          <Header headerText={TEXT.ScreenText.HeaderText.AddItems} text={TEXT.ScreenText.ParagraphText.AdditemsScreen}/>
        </div>
          <div className='container-additems'>
            <Card isBtnGroupShown='true' containerStyle={styles.card} BoxNoHeader={TEXT.BoxNo} level={5} leftHedaerSocialImage={AttachImage} leftHedaerSocialImageStyle={styles.attachImage} rightHeaderSocialImage={CameraImage} rightHeaderSocialImageStyle={styles.cameraImage} miniCard={styles.miniCard} miniCardImage={ProductImage} miniCardImageStyle={styles.productImage} isKeyword='true' />           
          </div>
      </Col>
    </Row>
  );
};

export default AddItemsScreenPresenter;

const styles={
    card:
      {
        width:685,
        height:516,
        background:`${COLOR.CardBackgroundColor}`,
        backdropFilter:'blur(15)',
        borderRadius:10,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
      },
    productImage:
      {
        width:150,
        height:150,
        marginTop:20,
        marginLeft:20,
        marginBottom:20,
        marginRight:20,
  
      },
    attachImage:
      {
        width:33,
        height:33,
      },
    cameraImage:
      {
        width:33,
        height:33,
        marginLeft:10
      },
    miniCard:
      {
        width:655,
        height:216,
        background: `${COLOR.OrangeColor}`,
        borderRadius:10,
      },
    navbarWraper:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
    }