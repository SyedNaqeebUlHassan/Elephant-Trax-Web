/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import './index.css';
import React,{useState,useEffect} from 'react';
import { TEXT } from '../../constants';
///////Images/////
import EditIcon from '../../assets/images/EditIcon.png';

import { useSelector } from 'react-redux';

function index({productImage,keyword}) {
  const data=useSelector((state)=>state.keywordSlice);
  console.log(data.slice(-1));
  console.log(data,'keyword');

  return (
    <div className='card-item-main-div'>
        <div className='product-image-div'>
            <img
                src={productImage}
                className='productImage'
            />
        </div>
        <div className='seceond-div'>
            <div className='item-editimage-div'>
                <p className='itemno-text'>{TEXT.ItemNO}</p>
                <img
                    src={EditIcon}
                    className='editImage'
                />
            </div>
            {/* ///////Nested Map for Keywordd//////////////// */}
            {/* {data && data.map(keyword=>(
                <div style={{display:'flex'}} >
                    {keyword.kewword.map(keyw=>(
                        <div className='keyword-div'>
                            <p className='keyword-text'>{keyw}</p>
                        </div>
                    ))}
                </div>
            ))} */}
            <div style={{display:'flex'}}>
                <div className='keyword-div'>
                    <p className='keyword-text'>{keyword}</p>
                </div>
            </div>
            </div>
    </div>
  )
};

export default index;