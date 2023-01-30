/* eslint-disable react-hooks/rules-of-hooks */
import './index.css';
import React,{useState} from 'react';
//////Images/////////////
import Logo from '../../assets/images/Logo.png';
import LogoutImage from '../../assets/images/LogoutImage.png';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES,NAVBAR } from "../../constants";
import {
  MenuUnfoldOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

function index() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(<Link to={ROUTES.Home}>{NAVBAR.Home}</Link>, '1',),
    getItem(<Link to={ROUTES.Create}>{NAVBAR.Create}</Link>, '2',),
    getItem(<Link to={ROUTES.Additems}>{NAVBAR.AddItems}</Link>, '3',),
    getItem(<Link to={ROUTES.Search}>{NAVBAR.Search}</Link>, '4',),
    getItem(<Link to={ROUTES.Find}>{NAVBAR.Find}</Link>, '5',),
    getItem(<Link to={ROUTES.Profile}>{NAVBAR.Profile}</Link>, '6',),

  ];
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
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
                <NavLink to={ROUTES.Home} className={({isActive})=>(isActive?'active':'not-active')}><p>{NAVBAR.Home}</p></NavLink>
                <NavLink to={ROUTES.Create} className='not-active' ><p>{NAVBAR.Create}</p></NavLink>
                <NavLink to={ROUTES.Additems} className='not-active' ><p>{NAVBAR.AddItems}</p></NavLink>
                <NavLink to={ROUTES.Search} className='not-active' ><p>{NAVBAR.Search}</p></NavLink>
                <NavLink to={ROUTES.Find} className='not-active' ><p>{NAVBAR.Find}</p></NavLink> 
                <NavLink to={ROUTES.Profile} className='not-active' ><p>{NAVBAR.Profile}</p></NavLink>
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
      </>
  );
};

export default index;