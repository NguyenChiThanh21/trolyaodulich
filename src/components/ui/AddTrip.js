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

import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";

const customStyles = {
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "200px",
  },
  // Add more custom styles as needed
};
const AddTrip = () => {

  const [showCalendarDi, setShowCalendarDi] = useState(false);
  const [showCalendarDen, setShowCalendarDen] = useState(false);

  const [ngayDi, setNgayDi] = useState(null);
  const [ngayDen, setNgayDen] = useState(null);

  // khi ấn vào icon sẽ hiện mục chọn ngày
  const handleIconClick = () => {
    setShowCalendarDi(!showCalendarDi);
  };

  // sau khi chọn ngày, truyền dữ liệu vào ngay đi sau đó hiển thị vào ô giao diện muốn
  const handleDateChangeDi = (dateSelect) => {
    setNgayDi(dateSelect[0]);
    setShowCalendarDi(false);
  };

  const handleDateChangeDen = (dateSelect) => {
    setNgayDen(dateSelect[0]);
    setShowCalendarDen(false);
  };
  const handleIconClickDen = () => {
    setShowCalendarDen(!showCalendarDen);
  };

  return (
    <ThemChuyenDi>
      <div className="container_AddTrip">
        <div className="header_AddTrip">
          <FaCar className="iconAddTrip" />
          <FaTrainSubway className="iconAddTrip" />
          <FaMotorcycle className="iconAddTrip" />
          <BiSolidPlaneAlt className="iconAddTrip" />
          <FaWalking className="iconAddTrip" />
          <FaWindowClose
            style={{
              fontSize: "1.5em",
              color: "rgb(129 177 255)",
              marginLeft: "40px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="input_AddTrips">
          <div className="input_AddTrip Start">
            <FaCircle style={{ marginRight: "20px" }} />
            <SearchLocation placeholder={"Nhập điểm đi..."} />
          </div>
          <div className="icon_AddTrip-Change">
            <CgArrowsExchangeAltV />
          </div>
          <div className="input_AddTrip End">
            <FaLocationDot style={{ color: "red", marginRight: "20px" }} />
            <SearchLocation placeholder={"Nhập điểm đến..."} />
          </div>
        </div>
        <div className="location_AddTrip">
          <ImLocation2
            style={{
              marginRight: "20px",
              color: "#5ca1cb",
              marginLeft: "3em",
              fontSize: "1.5em",
            }}
          />
          <p>Vị trí của bạn</p>
        </div>
        <p style={{ margin: "8px" }}>Khám phá xung quanh </p>
        <div className="icons_AddTrip">
          <FaHotel
            className="icon_AddTrip"
            style={{ backgroundColor: "#3C8F7C" }}
          />
          <PiForkKnifeFill
            className="icon_AddTrip"
            style={{ backgroundColor: "#FF8A00" }}
          />
          <BiSolidBank
            className="icon_AddTrip"
            style={{ backgroundColor: "#DA1212" }}
          />
          <IoBagAddOutline
            className="icon_AddTrip"
            style={{ backgroundColor: "#2D93EA" }}
          />
          <FaCamera
            className="icon_AddTrip"
            style={{ backgroundColor: "#041562" }}
          />
          <FaGift
            className="icon_AddTrip"
            style={{ backgroundColor: "#0EB500" }}
          />
        </div>
        <div className="time_AddTrip-container">
          <div className="button_time_AddTrip">
            <div className="time_AddTrip" onClick={handleIconClick}>
              <FaRegCalendarAlt style={{color:"#3277D8"}}/>
              <p style={{color:"#3277D8", margin:"0 8px"}}>
                {ngayDi
                  ? ngayDi.toLocaleDateString("en-GB")
                  : "Ngày đi"}
              </p>
              <FaAngleDown />
            </div>
            {showCalendarDi && (
              <Flatpickr
                value={ngayDi}
                options={{
                  dateFormat: "d-m-Y",
                  allowInput: false, // Disable manual input
                }}
                onChange={handleDateChangeDi}
                className="my-flatpickr"
              />
            )}
          </div>
          <div className="button_time_AddTrip">
            <div className="time_AddTrip" onClick={handleIconClickDen}>
              <FaRegCalendarAlt style={{color:"#3277D8"}}/>
              <p style={{color:"#3277D8", margin:"0 8px"}}>
                {ngayDen
                  ? ngayDen.toLocaleDateString("en-GB")
                  : "Ngày đến"}
              </p>
              <FaAngleDown />
            </div>
            {showCalendarDen && (
              <Flatpickr
                value={ngayDen}
                options={{
                  dateFormat: "d-m-Y",
                  allowInput: false, // Disable manual input
                }}
                onChange={handleDateChangeDen}
                className="my-flatpickr"
              />
            )}
          </div>
        </div>
        <div className="button_AddTrips">
          <p className="button_AddTrip">Đi đến map</p>
        </div>
      </div>
    </ThemChuyenDi>
  );
};

export default AddTrip;
const ThemChuyenDi = styled.div`
  width: 30vw;
  background-color: #eef4ee;
  .input_AddTrips {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header_AddTrip {
    display: flex;
    justify-content: center;
  }
  .iconAddTrip {
    width: 1.5em;
    height: 1.5em;
    margin: 15px;
    background-color: #ebebeb;
    padding: 3px 3px;
    border-radius: 5px;
    cursor: pointer;
  }
  .input_AddTrip {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .icon_AddTrip-Change {
    display: flex;
    justify-content: right;
    width: 100%;
    margin-right: 4em;
    font-size: 1.5em;
    cursor: pointer;
  }
  .location_AddTrip {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #ffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1),
      0px -6px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    align-items: center;
    margin: 20px 0;
  }
  .icon_AddTrip {
    width: 3em;
    height: 3em;
    margin: 0.5em;
    padding: 1em 1em;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
  }
  .button_AddTrip {
    width: 30%;
    padding: 12px 24px;
    background-color: #368e4f;
    border-radius: 16px;
    min-width: fit-content;
    color: #fff;

    margin-right: 18px;
  }
  .button_AddTrips {
    display: flex;
    justify-content: right;
    cursor: pointer;
    margin-top: 20px;
  }
  .time_AddTrip {
    width: 13vw;
    padding: 12px 24px;
    background-color: #F9F9FF;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid #7077F2C2;

  }
  .time_AddTrip-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

  }

`;






