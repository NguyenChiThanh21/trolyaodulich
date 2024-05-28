import logo from "../../../assets/img/logo.jpg";
import user from "../../../assets/img/user.png";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import ItemSearch from "../../ui/ItemSearch";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderRow = ({ searchKeyword, setSearchKeyword }) => {
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
    <HeadRow>
      <div className="main-header">
        <div className="item-left">
          <div className="logo-container">
            <img src={logo} atl="logo" className="image" />
          </div>
        </div>
        <div className="item-right">
          <div className="right">
            <ItemSearch
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
            <div>
               <div className="user-info-container" style={{cursor:"pointer"}} onClick={handleAvatarClick}>
              <span className="user-info image">Admin</span>
              <img src={user} />
            </div>
            <div className="headContentLogin" style={{ display: showDropdown ? 'flex' : 'none' }}>
                        {showDropdown && (
                            <div className="headDropdown">
                            <div className="headDropdownItem"><h3>Admin</h3></div>
                            <div className="headDropdownItem" onClick={handleLogoutClick} style={{marginTop: "15px"}}>
                                Đăng xuất
                            </div>
                            </div>
                        )}
                        </div>
            </div>
           
          </div>
        </div>
      </div>
    </HeadRow>
  );
};

export default HeaderRow;

const HeadRow = styled.div`
  top: 0;
  position: fixed;
  img {
    width: 60px;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 72px;
    align-items: center;
    background-color: #fff;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .item-left {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
  }

  .logo-container {
    margin-right: 16px;
  }

  .image {
    width: 80px;
  }

  .item-right {
    display: flex;
    flex: 4;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
  }
  .right {
    display: flex;
    width: 30vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .user-info-container {
    display: flex;
    align-items: center;
  }

  .user-info {
    margin-right: 8px;
  }

  .user-image {
    width: 30px;
    border-radius: 50%;
  }
  .headContentLogin{
    position: absolute;
    bottom: 0;
    top: 10vh;
    
    cursor: pointer;
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
    transform: translateX(-56px);

}
@keyframes Tippy-module_fadeIn__2LeID{
  0%{
      opacity: 0;
      transform: translateY(-8px);
      transform: translateX(-56px);
  }
  100%{
      opacity: 1;
      transform: translateY(0);
      transform: translateX(-56px);
  }
}
`;
