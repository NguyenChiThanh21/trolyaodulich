import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import bachgroundLog from "../../assets/img/bachgroundLog.png";
import { ImMobile } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import VanHoa from "../../assets/img/vanhoa.jpg";
import LeoNui from "../../assets/img/leonui.jpg";
import TamBien from "../../assets/img/tambien.png";
import CamTrai from "../../assets/img/camtrai.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

import logo from "../../assets/img/logo.jpg";

import HeaderLog from "../../components/log/HeaderLog";
// import logoItem from "../../assets/img/logoItem.png";

const SurveyScreen = () => {
  const navigate = useNavigate();
  const [isDarkened, setIsDarkened] = useState(false);
  const [isDarkened2, setIsDarkened2] = useState(false);
  const [isDarkened3, setIsDarkened3] = useState(false);
  const [isDarkened4, setIsDarkened4] = useState(false);

  const handleClick = () => {
    setIsDarkened(!isDarkened);
  };
  const handleClick2 = () => {
    setIsDarkened2(!isDarkened2);
  };

  const handleClick3 = () => {
    setIsDarkened3(!isDarkened3);
  };

  const handleClick4 = () => {
    setIsDarkened4(!isDarkened4);
  };

  const handleStart = () => {
    navigate("/trangchu");
  };
  return (
    <Survey>
        <div className="logo">
        <img
                src={logo}
                alt="Cắm trại"
               
              />
        </div>
      <div className="Container-survey">
        <div className="Container-change">
          <h1 style={{fontSize: "48px", fontWeight: "bold"}}>Bạn muốn đi đâu?</h1>
          <div className="image-change">
            <div
              className={`item-change ${isDarkened ? "darkened" : ""}`}
              onClick={handleClick}
            >
              <img
                src={CamTrai}
                alt="Cắm trại"
                className={isDarkened ? "darkened-image" : ""}
              />
              <h3 className="title-image">Cắm trại</h3>
              {isDarkened && <span className="check-mark">&#10004;</span>}

            </div>
            <div
              className={`item-change ${isDarkened2 ? "darkened" : ""}`}
              onClick={handleClick2}
            >
              <img
                src={TamBien}
                alt="Tắm biển"
                className={isDarkened2 ? "darkened-image" : ""}
              />
              <h3  className="title-image">Tắm biển</h3>
              {isDarkened2 && <span className="check-mark">&#10004;</span>}

            </div>
            <div
              className={`item-change ${isDarkened3 ? "darkened" : ""}`}
              onClick={handleClick3}
            >
              <img
                src={LeoNui}
                alt="Leo núi"
                className={isDarkened3 ? "darkened-image" : ""}
              />
              <h3  className="title-image">Leo núi</h3>
              {isDarkened3 && <span className="check-mark">&#10004;</span>}

            </div>
            <div
              className={`item-change ${isDarkened4 ? "darkened" : ""}`}
              onClick={handleClick4}
            >
              <img
                src={VanHoa}
                alt="Văn hoa"
                className={isDarkened4 ? "darkened-image" : ""}
              />
              <h3  className="title-image">Văn hóa</h3>
              {isDarkened4 && <span className="check-mark">&#10004;</span>}
            </div>
          </div>

          <Link style={{ justifyContent: "center" }} to="/home">
           
            <div className="navButtonAdd">Bắt đầu</div>
          </Link>
        </div>
        <div className="background">
          <img
            src={bachgroundLog}
            className="Image-background"
            alt="bachground"
          />
        </div>
      </div>
    </Survey>
  );
};

export default SurveyScreen;
const Survey = styled.div`
  height: 100vh;
  .background {
    bottom: 0;
    width: 100vw;
    position: fixed;
  }
  .Image-background {
    position: absolute;
    opacity: 0.9;
    width: 100vw;
    bottom: 0px;
    left: 0;
  }
  h1 {
    margin-bottom: 4vh;
    color: black;
  }
  h3 {
    text-align: center;
    width: 73%;
  }
  .Container-survey {
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  }
  .Container-change {
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999;
    transform: translateY(-20%);
  }
  .Container-change img {
    width: 200px;
    height: 150px;
    border-radius: 10px;
    filter: brightness(60%);
    cursor: pointer;
  }
 
  
  .image-change {
    display: flex;
    flex-wrap: wrap;
  }

  .item-change {
    flex-basis: 50%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    
  }

  .item-change img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Màu đen với độ mờ 0.5 */
    opacity: 0; /* Mặc định là không hiển thị */
    transition: opacity 0.3s ease;
    borderwidth: 10;
    bordercolor: "red";
  }

  .item-change.darkened::before {
    opacity: 1; /* Hiển thị bảng màu đen với độ mờ */
  }

  .darkened-image {
    filter: brightness(50%); /* Áp dụng hiệu ứng làm tối ảnh */
  }
  .navButtonAdd {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-weight: bold;
    width: 168px;
    height: 72px;
    padding: 18px 8px 18px 8px;
    color: #fff;
    background-color: #368E4F;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    margin-top: 10px;
  }
 
  .item-change {
    position: relative;
    
  }
  
  .title-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    z-index: 1;
    font-Weight: bold;
    color: #fff;
    font-size: 24px;
  }
  
  .title-image::after {
   
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(-50%);
    z-index: -1;
  }
  .check-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -10%);
    color: #14FF00;
    font-size: 50px;
  
  }
  .logo img{
    width: 9%;
    margin-left: 40px;
  }
`;
