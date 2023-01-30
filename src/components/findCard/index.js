/* eslint-disable jsx-a11y/alt-text */
import './index.css';
import React from 'react';
////////Images////////////
import DropdownImage from '../../assets/images/DropdownImage.png';
import ArrowIcon from '../../assets/images/arrowIcon.png';
import { TEXT } from "../../constants";

function index({productImage}) {
  return (
    <div className='find-card-main-div'>
        <div className='category-dropdown-img-main-div'>
            <div className='category-dropdown-img-div'>
                <p>{TEXT.Category}</p>
                <img
                    src={DropdownImage}
                    className='dropdownImage'
                    alt='DropdownImage'
                />
            </div>
        </div>
        <div className='product-main-img-div'>
            <img
                src={productImage}
                className='productImage'
            />
        </div>
        <div>
            <p className='find-box-no'>{TEXT.BoxNo}</p>
        </div>
        <div className='find-view-all-div'>
            <p className='find-view-all'>{TEXT.ViewAll}</p>
            <img
                src={ArrowIcon}
                className='ArrowIcon'
            />
        </div>
    </div>
  )
};

export default index;