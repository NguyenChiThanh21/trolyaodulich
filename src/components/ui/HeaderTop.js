import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../../contans/styles/headerTop.scss";
import { FiSearch } from "react-icons/fi";
import { IoMdRestaurant } from "react-icons/io";
import { FaHotel } from "react-icons/fa6";
import { BiSolidDish, BiSolidBank } from "react-icons/bi";
import { FaHospital } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import GoiYDacSan from "./GoiYDacSan";
import { useNavigate } from 'react-router-dom';
import userImg from "../../assets/img/user.png";

function HeaderTop({
  location,
  locations,
  setLocation,
  handleAddMarker,
  handleEditMarker,
  handleDeleteMarker,
  selectedLocation,
 
}) {
  const [locationsData, setLocationsData] = useState([
    { place: "Đặc sản Phú Thọ", km: 50, hours: 2 },
    { place: "Bến Vũng Tàu", km: 35, hours: 3 },
  ]);
  const [saveStates, setSaveStates] = useState(locations.map(() => false));
  const handleSave = (index) => {
    // Thêm xử lý tại đây để lưu dữ liệu khi nút "Lưu" được nhấn
    // Ví dụ: console.log("Lưu dữ liệu tại vị trí " + index);
    const newSaveStates = [...saveStates];
    newSaveStates[index] = !newSaveStates[index];
    setSaveStates(newSaveStates);
  };
  const [isSearchInfoVisible, setIsSearchInfoVisible] = useState(false);

  const handleInputClick = () => {
    setIsSearchInfoVisible(true);
  };

  const handleHideDiv = () => {
    setIsSearchInfoVisible(false);
  };
  const [showGoiYDacSan, setShowGoiYDacSan] = useState(false);

  const handleGoiYDacSanClick = () => {
    setShowGoiYDacSan(!showGoiYDacSan);
  };
  const [showDropdown, setShowDropdown] = useState(null);
  const handleAvatarClick = () => {
    if (showDropdown === null) {
      setShowDropdown(true);
    } else {
      setShowDropdown(!showDropdown);
    }
  };
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate('/');
  };
  return (
    <Headerngang>

    <div className="container-headerTop">
      <div className="nofiti-container">
        <div className="nofiti-Suggest">
          <div className="item-Suggest">
            <IoMdRestaurant className="icon-search" size={20} color="black" />
            <span>Nhà Hàng</span>
          </div>
          <div className="item-Suggest">
            <FaHotel className="icon-search" size={20} color="black" />
            <span>Khách Sạn</span>
          </div>
          <div className="item-Suggest" onClick={handleGoiYDacSanClick}>
            <BiSolidDish className="icon-search" size={20} color="black" 

            />
            <span>Đặc Sản</span>
          </div>
          <div className="item-Suggest">
            <FaHospital className="icon-search" size={20} color="black" />
            <span>Bệnh Viện</span>
          </div>
          <div className="item-Suggest">
            <BiSolidBank className="icon-search" size={20} color="black" />
            <span>Bảo Tàng</span>
          </div>
        </div>
      
           <div className="user-info-container" style={{cursor:"pointer"}} onClick={handleAvatarClick}>
            
              <img src={userImg} alt="Your Image" className="image-user" />
            </div>
            <div className="headContentLogin" style={{ display: showDropdown ? 'flex' : 'none' }}>
                        {showDropdown && (
                            <div className="headDropdown">
                            <div className="headDropdownItem" onClick={handleLogoutClick} style={{marginTop: "15px"}}>
                                Đăng xuất
                            </div>
                            </div>
                        )}
                        </div>
      
      </div>
      {showGoiYDacSan && <GoiYDacSan />}
    </div>
    </Headerngang>
  );
}

export default HeaderTop;
const Headerngang = styled.div`
.item-Suggest{
  width: :100%;
}
.headDropdown{
  width: 200px;
  background-color: #fff;
  height: 7vh;
  text-align: center;
  font-size: 1.2em;
  border-radius: 10px;
  animation: Tippy-module_fadeIn__2LeID .3s ease;
  box-shadow: 0 -4px 32px rgba(0,0,0,.2);
  transition: all .3s ease-in-out;
  will-change: opacity,transform;
  overflow: hidden;
  transform: translateX(-123px) translateY(72px);
  position: absolute;
  cursor: pointer;
}
@keyframes Tippy-module_fadeIn__2LeID{
0%{
    opacity: 0;
    transform: translateX(-123px) translateY(72px);
}
100%{
    opacity: 1;
    transform: translateX(-123px) translateY(72px);
}
}

`