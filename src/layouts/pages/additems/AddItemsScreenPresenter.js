import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import Header from '../../../components/header';
import Card from '../../../components/card';
import Navbar from '../../../components/navbar';
import Button from '../../../components/button';
/////Images////////
import CameraImage from '../../../assets/images/CameraImage.png';
import AttachImage from '../../../assets/images/AttachImage.png';
import ProductImage from '../../../assets/images/ProductImage.png';

function AddItemsScreenPresenter() {
  return (
    <Row>
      <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}} span={4}>
        <Navbar/>
      </Col>
      <Col span={20}>
        <div className='container'>
          <Header headerText='ADD ITEMS' text='Here you can create your package or find your box.'/>
        </div>
          <div className='container-additems'>
            <Card containerStyle={styles.card} BoxNoHeader='Box No: 03' level={5} leftHedaerSocialImage={AttachImage} leftHedaerSocialImageStyle={styles.attachImage} rightHeaderSocialImage={CameraImage} rightHeaderSocialImageStyle={styles.cameraImage} miniCard={styles.miniCard} miniCardImage={ProductImage} miniCardImageStyle={styles.productImage} isKeyword='true' />      
          <div className='btn-group'>
                <Button title='Create' style={styles.btn}/>
                <Button title='Add Items' style={styles.btn}/>
          </div>
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
        background:'#F6F6F6',
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
    btn:
      {
        width:362.5,
        height:50,
        background:'linear-gradient(90deg, #FF9A0D 0%, #FF9A0D 100%)',
        boxShadow:' 0px 130px 52px rgba(0, 0, 0, 0.01), 0px 73px 44px rgba(0, 0, 0, 0.03), 0px 33px 33px rgba(0, 0, 0, 0.04), 0px 8px 18px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)',
        borderRadius:5,
      },
    miniCard:
      {
        width:655,
        height:216,
        background: 'rgba(255, 154, 13, 0.5)',
        borderRadius:10,
      }
    }