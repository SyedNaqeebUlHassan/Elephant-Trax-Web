import './index.css';
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import Header from '../../../components/header';
import Navbar from '../../../components/navbar';
import ItemCard from '../../../components/itemCard';
///////Images///////////////
import SearchImage from '../../../assets/images/Search.png';

import { useSelector } from 'react-redux';
import { ROUTES,PLACEHOLDERS} from "../../../constants";
import {Input} from 'antd';

function SearchScreenPresenter() {
  const [data,SetData]=useState([])
  const image=useSelector((state)=>state.dataSlice);
  const keyword=useSelector((state)=>state.keywordSlice);
  SetData([{img:image},{keyword:keyword}])
  console.log(image);
  return (
    <Row>
        <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}} span={4}>
            <Navbar/>
        </Col>
        <Col span={20}>
            <div className='container'>
                <Header headerText='Search Items' text='Here you can search your items.'/>               
            </div>
            <div className='input-search-div'>
              <Input style={styles.inputSearch} placeholder={PLACEHOLDERS.Search}/>
              <img
                src={SearchImage}
                className='search-image'
                alt='search'
              />
            </div>
            <div className='item-card-wraper'>
              {data && image.map(data=>(
                <ItemCard productImage={data.img} keyword={data.keyword}/>
              ))}
            </div>
        </Col>
    </Row>
  );
};


const styles={
  inputSearch:{
    background:'transparent',
    width:'70%',
    border:'none',
  }
};

export default SearchScreenPresenter;