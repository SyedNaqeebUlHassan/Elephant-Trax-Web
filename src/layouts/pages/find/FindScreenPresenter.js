import './index.css';
import React,{useState} from 'react';
import { Col, Row } from 'antd';
import Header from '../../../components/header';
import Navbar from '../../../components/navbar';
import ItemCard from '../../../components/itemCard';
import FindCard from '../../../components/findCard';
///////Images////////////
import SearchImage from '../../../assets/images/Search.png';
import FilterIcon from '../../../assets/images/filterIcon.png';
import ProductImage1 from '../../../assets/images/ProductImage1.png';
import ProductImage2 from '../../../assets/images/ProductImage2.png';
import ProductImage3 from '../../../assets/images/ProductImage3.png';
import ProductImage4 from '../../../assets/images/ProductImage4.png';
import ProductImage5 from '../../../assets/images/ProductImage5.png';
import ProductImage6 from '../../../assets/images/ProductImage6.png';
import ProductImage7 from '../../../assets/images/ProductImage7.png';
import ProductImage8 from '../../../assets/images/ProductImage8.png';
import ProductImage9 from '../../../assets/images/ProductImage9.png';
import ProductImage10 from '../../../assets/images/ProductImage10.png';


import { ROUTES,PLACEHOLDERS, TEXT} from "../../../constants";
import {Input,Radio } from 'antd';
import { useSelector } from 'react-redux';



function FindScreenPresenter() {
  const [display,SetDisplay]=useState(false);
  const handleBoxComponent=()=>{
    SetDisplay(false);
  }
  const handleKeywordComponent=()=>{
    SetDisplay(true)
  }
  const images=[
    ProductImage5,
    ProductImage6,
    ProductImage7,
    ProductImage8,
    ProductImage9,
    ProductImage10,
  ]
  const data=useSelector((state)=>state.dataSlice);
  
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
        <div className='radio-group-btn'>
            <Radio.Group defaultValue={1} >
                <Radio onClick={handleBoxComponent} value={1}>{TEXT.ByBoxNO}</Radio>
                <Radio onClick={handleKeywordComponent} value={2}>{TEXT.ByKeyword}</Radio>
            </Radio.Group>
            <div className='filter-category-div'>
                <p>{TEXT.Category}</p>
                <img
                  src={FilterIcon}
                  className='filterImage'
                  alt='filter'
                />
            </div>
        </div>
        {!display &&
            <div className='by-boxNo-main-div'>
              {images.map(img=>(
                  <FindCard productImage={img}/>
                  ))}
                </div>
        }
        {display &&
          <div className='by-keyword-main-div'>
            {data.map(data=>(
              <ItemCard productImage={data.img}/>
            ))}
          </div>       
        }
    </Col>
</Row>
  );
};

export default FindScreenPresenter;
const styles={
    inputSearch:{
      background:'transparent',
      width:'70%',
      border:'none',
    }
  };