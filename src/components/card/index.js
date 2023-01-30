/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import "./index.css";
import React, { useRef,useState } from "react";
import Button from "../../components/button";
import { Typography, Input } from "antd";
import { useNavigate } from "react-router-dom";

import Webcam from '../../components/webcam';
import { ROUTES,BTN,COLOR } from "../../constants";
import { useDispatch } from 'react-redux';
import {addData} from '../../redux/dataSlice';
import { addKeyword } from "../../redux/keywordSlice";
const { Title, Paragraph } = Typography;

function index({
  isKeyword,
  miniCardImageStyle,
  miniCardImage,
  miniCard,
  BoxNoHeader,
  rightHeaderImageStyle,
  foterSocailImagesContainer,
  foterRightImageStyle,
  foterLeftImageStyle,
  foterRightImage,
  foterLeftImage,
  footerBoxNo,
  btnStyle,
  btnTitle,
  level,
  isBtnShow,
  mainImage,
  mainImageStyle,
  BoxNo,
  containerStyle,
  righHeadertText,
  rightHeaderStyle,
  rightHeaderImage,
  leftHedaerSocialImage,
  rightHeaderSocialImage,
  leftHedaerSocialImageStyle,
  rightHeaderSocialImageStyle,
  isBtnGroupShown
}) {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const[url,SetUrl]=useState([]);
  const [getKeyword,SetGetKeyword]=useState('');
  const[keyword,SetKeyword]=useState([]);
  const[itemNo,SetItemNo]=useState(0);
  const hiddenFileInput = useRef(null);
 
  const handleClick = (event) => {
    hiddenFileInput.current.click();
    console.log(event,'event');
  };
  const onSelectFile = async (e) => {
    const file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    console.log(objectUrl,'image Url');
    console.log(e,'e');
    SetItemNo(prevState=>prevState+1);
    SetUrl(prevState=>( [objectUrl,...prevState]))
    console.log(itemNo);
  };
  const addKeywordd=()=>{
    SetKeyword(prevState=>([getKeyword,...prevState]))
    SetGetKeyword('');
  }
  const handleData=()=>{
    dispatch(
      addData(
        {
          setNewImage:url,
        }
        ),
        SetUrl([])
    )
    dispatch(
      addKeyword
      (
        {
          setNewKeyword:keyword,
        }
      ),
      SetKeyword([]),
      )
  }
  return (
    <>  
    <div style={containerStyle}>
      <div className="hederitem-wraper">
        <div>
          <Title level={level}>{BoxNo}</Title>
        </div>
        <div style={rightHeaderStyle}>
          <Title level={level}>{righHeadertText}</Title>
          <img src={rightHeaderImage} style={rightHeaderImageStyle} />
        </div>
        <div className="header-social-images">
          <div style={{ marginTop: 20 }}>
            <Title level={level}>{BoxNoHeader}</Title>
          </div>
          <div style={{ marginTop: 40,cursor:'pointer' }} >
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={onSelectFile}
              style={{ display: "none" }}
            />           
            <img
              src={leftHedaerSocialImage}
              style={leftHedaerSocialImageStyle}
              onClick={handleClick}
            />
            <img
              src={rightHeaderSocialImage}
              style={rightHeaderSocialImageStyle}
            />
          </div>
        </div>
      </div>
      <div className="mainImage">
        <img src={mainImage} style={mainImageStyle} />
        <div style={miniCard} className='cardMini'>
          {url.map(img=>(
              <img src={img} style={miniCardImageStyle} />
          ))}
        </div>
      </div>
      {isBtnShow && (
        <div className="btn">
          <Button title={btnTitle} style={btnStyle} onClick={()=>navigate(ROUTES.Create)} />
        </div>
      )}
      <div className="footer">
        <div className="footer-boxNo">
          <Title level={4}>{footerBoxNo}</Title>
        </div>
        <div
          className="footer-social-images"
          style={foterSocailImagesContainer}
        >
          <img src={foterLeftImage} style={foterLeftImageStyle} />
          <img src={foterRightImage} style={foterRightImageStyle} />
        </div>
        {isKeyword && (
          <div className="Input&Button">
            <div
              style={{
                display: "flex",
                marginRight: 0,
                marginTop: 20,
                background: "rgba(255, 154, 13, 0.5",
                borderRadius: 5,
              }}
            >
              <Input
                placeholder="Enter Keyword"
                style={{ background: "transparent", width: 455 }}
                value={getKeyword}
                onChange={(e)=>SetGetKeyword(e.target.value)}
              />
              <Button
                title="ADD"
                style={{
                  width: 200,
                  height: 65,
                  background: "#FF9A0D",
                  borderRadius: "0 5 5 0",
                }}
                onClick={addKeywordd}
              />
            </div>
          </div>
        )}
            <div className="keyword-wraper">
              {keyword.map(keyword=>(
                  <div className="keyword">
                    <Paragraph style={{ paddingTop: 10 }}>{keyword}</Paragraph>
                  </div>
              ))}
            </div>
      </div>
    </div>
    {isBtnGroupShown &&
    <div className='btn-group'>
      <Button title={BTN.AddItems} style={styles.btn} onClick={()=>handleData()}/>
    </div>
    }
    </>
  );
}

export default index;
const styles={
  btn:
  {
    width:362.5,
    height:50,
    background:`${COLOR.BtnLinerColor}`,
    boxShadow:' 0px 130px 52px rgba(0, 0, 0, 0.01), 0px 73px 44px rgba(0, 0, 0, 0.03), 0px 33px 33px rgba(0, 0, 0, 0.04), 0px 8px 18px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)',
    borderRadius:5,
    marginLeft: 150,
  },
}
