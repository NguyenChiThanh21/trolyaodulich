import React from "react";
import styled from "styled-components";
import { FaCar } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaWalking } from "react-icons/fa";
import SearchLocation from "./SearchLocationMaps";
import { FaWindowClose } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { ImLocation2 } from "react-icons/im";
import { FaHotel } from "react-icons/fa6";
import { PiForkKnifeFill } from "react-icons/pi";
import { BiSolidDish, BiSolidBank } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";
import { FaCamera } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import {
  REACT_APP_GOONG_API_KEY,
  REACT_APP_GOONG_MAP_KEY,
} from "../../store/api";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";

const GoiYDacSan = (showGoiYDacSan) => {
  const [rating, setRating] = useState(5);
  
  const [showComponent, setShowComponent] = useState(true);

  const handleCloseClick = () => {
    setShowComponent(false);
  };

  if (!showComponent) {
    return null; // Đóng component khi showComponent là false
  }
  return (
    <Goiydacsan>
      <div className="container-dacsanchinh" style={{display: "flex", flexDirection: "row"}}>
         <div className="navSearch">
        <BsSearch className="iconSearch" />
        <input className="navInput" type="text" placeholder="Tìm kiếm..." />
      </div>
      <FaWindowClose
            style={{
              fontSize: "1.5em",
              color: "rgb(129 177 255)",
              marginLeft: "40px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            onClick={handleCloseClick}
          />
      </div>
     
      <div className="container-dacsan">
        <div className="content-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmQsDbUT75XmOQLz4-8u1dFpNzs5enVOhjtL9XJ0Z_JhTjo0xMHsOiite48NGGmhMstU&usqp=CAU"
            alt="Your Image"
            style={{ maxWidth: "90%" , borderRadius:"10px" }}
          />
        </div>
        <div className="content-title">
          <h2>Chả lụi Cô Yến</h2>
          <div className="start-evaluate">
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                style={{fontSize: "120%"}}
                key={index}
                className={`star-icon ${index <= rating ? "filled" : ""}`}
                onClick={() => setRating(index)}
              >
                &#9733;
              </span>
            ))}
          </div>
          
          <p>9/8 Huỳnh Văn Nghệ, Bửu Long</p>
          <p>Đang mở cửa - Đóng cửa 23:00</p>
          <p>Ăn tại chỗ - mua về</p>
        </div>
      </div>

      
     
      <div className="container-dacsan">
        <div className="content-image">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMIV56K5ElzvpOYqYGnwyfb2PiWZoT8xlm-uKkR=s680-w680-h510"
            alt="Your Image"
            style={{ maxWidth: "90%" , borderRadius:"10px" }}
          />
        </div>
        <div className="content-title">
          <h2>Chả lụi Anh Thy</h2>
          <div className="start-evaluate">
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                style={{fontSize: "120%"}}
                key={index}
                className={`star-icon ${index <= rating ? "filled" : ""}`}
                onClick={() => setRating(index)}
              >
                &#9733;
              </span>
            ))}
          </div>
          
          <p>2 Huỳnh Văn Nghệ, Bửu Long</p>
          <p>Đang mở cửa - Đóng cửa 23:00</p>
          <p>Ăn tại chỗ - mua về</p>
        </div>
      </div>


    
      <div className="container-dacsan">
        <div className="content-image">
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipOP9UK3Zkzp8gTKR_ybd337hm7ETLJWSCdRaYbe=w408-h306-k-no"
            alt="Your Image"
            style={{ maxWidth: "90%" , borderRadius:"10px" }}
          />
        </div>
        <div className="content-title">
          <h2>Chả lụi Minh Ánh</h2>
          <div className="start-evaluate">
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                style={{fontSize: "120%"}}
                key={index}
                className={`star-icon ${index <= rating ? "filled" : ""}`}
                onClick={() => setRating(index)}
              >
                &#9733;
              </span>
            ))}
          </div>
          
          <p>9/8 Huỳnh Văn Nghệ, Bửu Long</p>
          <p>Đang mở cửa - Đóng cửa 23:00</p>
          <p>Ăn tại chỗ - mua về</p>
        </div>
      </div>

      
     
      <div className="container-dacsan">
        <div className="content-image">
          <img
            src="https://nguoidongnai.com.vn/wp-content/uploads/2022/09/1e8aa528a61862463b09-Sao-chep.jpg"
            alt="Your Image"
            style={{ maxWidth: "90%" , borderRadius:"10px" }}
          />
        </div>
        <div className="content-title">
          <h2>Chả lụi Tèo Em</h2>
          <div className="start-evaluate">
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                style={{fontSize: "120%"}}
                key={index}
                className={`star-icon ${index <= rating ? "filled" : ""}`}
                onClick={() => setRating(index)}
              >
                &#9733;
              </span>
            ))}
          </div>
          
          <p>769 Huỳnh Văn Nghệ, Bửu Long</p>
          <p>Đang mở cửa - Đóng cửa 23:00</p>
          <p>Ăn tại chỗ - mua về</p>
        </div>
      </div>
    </Goiydacsan>
  );
};

export default GoiYDacSan;
const Goiydacsan = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: #eef4ee;
  z-index: 9999999999;
  position: absolute;
  transform: translateX(-525px) translateY(415px);
  .navSearch input {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 50px;
    padding: 0 10px;
    height: 40px;
  }
  .navSearch {
    width: 400px;
    height: 60px;
    display: flex;
    margin-top: 15px;
  }
  .iconSearch {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #000;
    transform: translateX(280px) translateY(10px);
  }
  .star-icon.filled {
    color: #FF7020;
  }
  .container-dacsan {
    display: flex;
    flex-direction: row;
   
  }
  .content-image{
    width: 30%;
    boder-radius: 10px;
    margin-left: 10px;
    margin-top: 5px;
  }
  .start-evaluate{
    width: 120%;
  }
  p {
    margin: 10px 0;
  }
`;
