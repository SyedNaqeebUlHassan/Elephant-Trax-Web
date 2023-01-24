/* eslint-disable react-hooks/rules-of-hooks */
import './index.css';
import React,{useState} from 'react';
//////Images/////////////
import Logo from '../../assets/images/Logo.png';
import LogoutImage from '../../assets/images/LogoutImage.png';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { ROUTES } from "../../constants";
function index() {
  const navigate = useNavigate();
  return (
        <div className='navbar-container'>
            <div className='img-container'>
              <img
                src={Logo}
                className='logo'
                alt='Logo'
              />
            </div>
            <div className='ul-container'>
              <ul className='ul'>
                <NavLink to={ROUTES.Home} className={({isActive})=>(isActive?'active':'not-active')}><p>Home</p></NavLink>
                <NavLink to={ROUTES.Create} className='not-active' ><p>Create</p></NavLink>
                <NavLink to={ROUTES.Additems} className='not-active' ><p>Add Items</p></NavLink>
                {/* <NavLink className='not-active' >Search</NavLink>
                <NavLink className='not-active' >Find</NavLink> */}
                <NavLink to={ROUTES.Profile} className='not-active' ><p>Profile</p></NavLink>
              </ul>
            </div>
            <div className='logout-container'>
              <img
                src={LogoutImage}
                className='logout'
                alt='logout'
              />
            </div>
        </div>
  );
};

export default index;