import './index.css';
import React from 'react';
import { Col, Row } from 'antd';
import Card from '../../../components/card';
import Header from '../../../components/header';
import Navbar from '../../../components/navbar';
///////Images////////////
import SearchBox from '../../../assets/images/SearchBox.png';
import FindBox from '../../../assets/images/FindBox.png';

import { ROUTES,BTN,COLOR,TEXT} from "../../../constants";
function HomeScreenPresenter() {
  return (
    <Row>
      <Col style={styles.navbarWraper} span={4}>
        <Navbar/>
      </Col>
      <Col span={20} >
        <div className='container'>
            <Header headerText={TEXT.ScreenText.HeaderText.WelcomeShahrukh} text={TEXT.ScreenText.ParagraphText.HomeScreen$CreateScreen}/>
            <div style={styles.cardWraper}>
                <Card  rightHeaderStyle={styles.rightHeaderStyle} level={5} righHeadertText={TEXT.Created} containerStyle={styles.card} mainImage={SearchBox} mainImageStyle={styles.box} isBtnShow='true' btnStyle={styles.btn} btnTitle={BTN.Pack}/>
                <Card containerStyle={styles.card} mainImage={FindBox} mainImageStyle={styles.find} isBtnShow='true' btnStyle={styles.btn} btnTitle={BTN.Find}/>
            </div>
        </div>
      </Col>
    </Row>
  )
}

const styles={
    card:{
      width:447,
      height:357,
      background:`${COLOR.HomeCardBackgroundColor}`,
      borderRadius:10,
      backdropFilter:'blur(15)',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      flexDirection:'column',
      marginTop:91,
    },
    rightHeaderStyle:{
      display:'flex',
      justifyContent:'end',
      width:500,
      marginTop:-36
    },
    box:{
      marginTop:60,
      width:250,
      height:200,
    },
    btn:{
      width:290,
      height:50,
      background:`${COLOR.BtnLinerColor}`,
      boxShadow:' 0px 130px 52px rgba(0, 0, 0, 0.01), 0px 73px 44px rgba(0, 0, 0, 0.03), 0px 33px 33px rgba(0, 0, 0, 0.04), 0px 8px 18px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)',
      borderRadius:5,
      marginBottom:50
    },
    find:{
      width:136,
      height:200,
      marginTop:60, 
    },
    navbarWraper:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    cardWraper:{
      display:'flex',
      justifyContent:'space-between'
    }
}
export default HomeScreenPresenter;
