// import styled from "styled-components";
// import TimKiem from "../../components/ui/ItemSearch";
// import React, { useState, useEffect } from "react";
// import { BsSearch } from "react-icons/bs";
// import { BsBookmark } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";

// const ItineraryTips = ({ location }) => {
//   const [title, setTitle] = useState([
//     "STT",
//     "Địa điểm",
//     "Số Km",
//     "Số giờ",
//     "Lưu",
//     "Hành động",
//   ]);
//   const LayAPI = () => {
//     const token = localStorage.getItem("token");
//     fetch("http://localhost:3000/location?limit=10&page=1", {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmU0OWE3NDk4NTVjNzgzMTNjYjFiNiIsInJvbGUiOiJST09UIiwiaWF0IjoxNjk5ODU5OTgwLCJleHAiOjE3MzE0MTc1ODB9.Y-cf5pyVrcxoyXaqP4R3jepwwhSJoH9_neRFillsEMw`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data.data);
//       })
//       .catch((error) => console.error(error));
//   };
//   const [showList, setShowList] = useState(false);
//   const [hiddenItems, setHiddenItems] = useState([]);

//   //ẩn item
//   const handleHide = (index) => {
//     setHiddenItems([...hiddenItems, index]);
//   };
//   const handleAdd = () => {
//     setShowList(true);
//   };
//   const handleThoat = () => {
//     setShowList(false);
//   };
//   const handleLuu = () => {
//     setShowList(false);
//   };
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     LayAPI();
//   }, []);
//   return (
//     <Itinerary>
//       <div className="container">
//         <div className="navContainer">
//           <button className="navButtonAdd" onClick={handleAdd}>
//             Thêm
//           </button>
//         </div>

//         <div className="viewContainer">
//           <table className="tbl">
//             <tr className="title-data">
//               {title.map((t) => {
//                 return <th key={t}>{t}</th>;
//               })}
//             </tr>

//             {data.map((u, index) => (
//               <tr
//                 id="listViewData"
//                 className={`user-item-${index} ${
//                   index % 2 === 1 ? "even-row" : ""
//                 }`}
//               >
//                 <td data-lable="STT" key={index}>
//                   {index + 1}
//                 </td>

//                 <td data-lable="Địa điểm" key={u.diaDiem}>
//                   {u.diaDiem}
//                 </td>

//                 <td data-lable="Số Km" key={u.km}>
//                   {u.km}
//                 </td>
//                 <td data-lable="Số giờ" key={u.soGio}>
//                   {u.soGio}
//                 </td>

//                 <td data-lable="Lưu">
//                   {" "}
//                   <BsBookmark
//                     style={{ color: "#ffab00", marginRight: "10" }}
//                     className="iconEdit"
//                     onClick={() => {
//                       // HandleEdit(u.id);
//                       // setShow(!show)
//                     }}
//                   />
//                 </td>
//                 <td data-lable="Xóa">
//                   {" "}
//                   <AiOutlineClose
//                     style={{ color: "#fc424a" }}
//                     className="iconDelete"
//                   />{" "}
//                 </td>
//               </tr>
//             ))}
//           </table>

//           {showList && (
//             <div className="listContainer">
//               <div className="vien"></div>
//               <h2 style={{ marginTop: "10px" }}>Gợi ý lịch trình mới</h2>
//               <table className="tbl">
//                 {data.map((u, index) => (
//                   <tr
//                     id="listViewData"
//                     className={`user-item-${index} ${
//                       index % 2 === 1 ? "even-row" : ""
//                     } ${hiddenItems.includes(index) ? "hidden-row" : ""}`}
//                     key={index}
//                   >
//                     <td>
//                       <input
//                         type="checkbox"
//                         // checked={checkedItems[u.id]}
//                         // onChange={() => handleCheckboxChange(u.id)}
//                       />
//                     </td>
//                     <td data-lable="STT" key={index}>
//                       {index + 1}
//                     </td>

//                     <td data-lable="Địa điểm" key={u.diaDiem}>
//                       {u.diaDiem}
//                     </td>

//                     <td data-lable="Số Km" key={u.km}>
//                       {u.km}
//                     </td>
//                     <td data-lable="Số giờ" key={u.soGio}>
//                       {u.soGio}
//                     </td>

//                     <td data-lable="Xóa">
//                       {" "}
//                       <AiOutlineClose
//                         onClick={() => handleHide(index)}
//                         style={{ color: "#fc424a" }}
//                         className="iconDelete"
//                       />{" "}
//                     </td>
//                   </tr>
//                 ))}
//               </table>
//               <div className="navButton">
//                 <button onClick={handleThoat} className="navButtonExit">
//                   Hủy
//                 </button>
//                 <button onClick={handleLuu} className="navButtonAdd">
//                   Lưu
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </Itinerary>
//   );
// };

// export default ItineraryTips;

// const Itinerary = styled.div`
//   margin-left: 80px;
//   padding-right: 10px;
//   width: 47vw;
//   transform: translateX(0px) translateY(0px);
//   display: flex;
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   transition: margin 0.25s ease-out;
//   max-height: 100vh;
//   box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

//   transition: width 0.25s ease;
//   transition: width 0.25s ease-in;
//   background-color: #ffffff;
//   .navButtonAdd {
//     display: inline-block;
//     font-size: 1em;
//     font-weight: bold;
//     width: 10vw;
//     height: 40px;
//     padding: 8px 10px;
//     color: #fff;
//     background-color: #0090e7;
//     border-color: #0090e7;
//     border-radius: 6px;
//     cursor: pointer;
//     text-align: center;
//     overflow: hidden;

//     &:hover {
//       color: #fff;
//       background-color: #0078c1;
//       border-color: #0070b4;
//     }
//   }
//   .navButtonExit {
//     display: inline-block;
//     font-size: 1em;
//     font-weight: bold;
//     width: 10vw;
//     height: 40px;
//     padding: 8px 10px;
//     color: #000;
//     background-color: #fff;
//     border-color: #000;
//     border-radius: 6px;
//     cursor: pointer;
//     text-align: center;
//     overflow: hidden;

//     &:hover {
//       color: #000;
//       background-color: #f4f2f2;
//       border-color: #000;
//     }
//   }
//   .navContainer {
//     margin-top: 20px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: flex-end;
//   }
//   input {
//     border-radius: 10px;
//   }

//   .iconSearch {
//     width: 20px;
//     height: 20px;
//     cursor: pointer;
//     color: #000;
//     transform: translateX(280px) translateY(-10px);
//   }
//   .tbl {
//     margin-top: 40px;
//     border-radius: 20px;
//     width: 100%;
//   }
//   tr {
//     border-bottom: 1px solid #ccc;
//   }
//   table {
//     border-collapse: collapse;
//   }
//   tr,
//   th,
//   td {
//     text-align: center;
//     padding: 15px;
//   }

//   td {
//     vertical-align: middle;
//     font-size: 0.875rem;
//     line-height: 1.5;
//     white-space: nowrap;
//   }
//   .viewContainer {
//     height: 100vh;
//     overflow-y: auto;
//   }
//   .vien {
//     height: 1px;
//     background-color: #000;
//     width: 90%;
//     margin: 0 auto;
//   }
//   input[type="checkbox"] {
//     transform: scale(1.5); /* Tăng kích thước nút checkbox lên 1.5 lần */
//     vertical-align: middle;
//     margin-top: 20px;
//   }
//   .navButton {
//     height: 10vh;
//     width: 100%;
//     margin-bottom: 10vh;
//     display: flex;
//     justify-content: space-around;
//     flex-direction: row;
//   }
//   .hidden-row {
//     display: none; /* Ẩn hàng */
//   }
// `;

import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";

import ThongBaoOnMap from "../../components/ui/ThongBaoOnMap";

import ReactSelect from "react-select";
// import ItemSearch from "../../components/ui/ItemSearch";
// import SearchItineraryTips from "../../components/ui/SearchItineraryTips";
// import { Link } from "react-router-dom";
// import mapboxgl from "mapbox-gl";
// import {
//   REACT_APP_GOONG_API_KEY,
//   REACT_APP_GOONG_MAP_KEY,
// } from "../../store/api";

// import polyline from "@mapbox/polyline";
// import goongjs from "@goongmaps/goong-js";
// const goongClient = require("@goongmaps/goong-sdk");
// const goongDirections = require("@goongmaps/goong-sdk/services/directions");
// const baseClient = goongClient({ accessToken: REACT_APP_GOONG_API_KEY });
// const directionService = goongDirections(baseClient);
import goongjs from "@goongmaps/goong-js";
import {
  REACT_APP_GOONG_API_KEY,
  REACT_APP_GOONG_MAP_KEY,
} from "../../store/api";
import polyline from "@mapbox/polyline";

const ItineraryTips = ({
  onClick,
  receivedData,
  locations,
  onScheduleUpdate,
  setLocationSchedule,
  LocationSchedule,
  setHide,
}) => {
  const goongClient = require("@goongmaps/goong-sdk");
  const goongDirections = require("@goongmaps/goong-sdk/services/directions");
  const baseClient = goongClient({
    accessToken: "sDekCNyRZ4dBdw2yNnCVcCikGe425efoHCCiJmbb",
  });
  const directionService = goongDirections(baseClient);

  const [newlocations, setNewlocations] = useState([
    {
      diaDiem: "Thác Giang Điền",
      address: "Dinh Bảo Đại",
      lat: 12.0695816,
      lng: 108.1622121,
      km: 62,
      soGio: 4,
      dacSan: "dacSan 3",
      danhMuc: "danhMuc 3",
      anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/123.jpg",
      id: "3",
    },
    {
      diaDiem: "Bò sữa Long Thành",
      address: "Thác Datanla",
      lat: 11.9039905,
      lng: 108.4494419,
      km: 64,
      soGio: 3,
      dacSan: "dacSan 4",
      danhMuc: "danhMuc 4",
      anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
      id: "4",
    },
    {
      diaDiem: "Vườn quốc gia Nam Cát Tiên",
      address: "Hồ Than Thở",
      lat: 11.9571296,
      lng: 108.4757362,
      km: 60,
      soGio: 5,
      dacSan: "dacSan 5",
      danhMuc: "danhMuc 5",
      anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/9.jpg",
      id: "5",
    },
    {
      diaDiem: "Bò Cạp Vàng",
      address: "Chùa Linh Phước",
      lat: 11.9437698,
      lng: 108.4959425,
      km: 55,
      soGio: 5,
      dacSan: "dacSan 6",
      danhMuc: "danhMuc 6",
      anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1095.jpg",
      id: "6",
    },
    {
      diaDiem: "Làng du lịch Tre Việt",
      address: "Vườn hoa Đà Lạt",
      lat: 11.9437696,
      lng: 108.4904496,
      km: 10,
      soGio: 2,
      dacSan: "dacSan 7",
      danhMuc: "danhMuc 7",
      anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/340.jpg",
      id: "7",
    },
  ]);
  // const initializedMap = useRef(null);
  //  const [selectedLocation, setSelectedLocation] = useState(LocationSchedule[0]);

  const [title, setTitle] = useState([
    "Chọn",
    "Địa điểm",
    "Số Km",
    "Số giờ",
    "Lưu",
    "Hành động",
  ]);
  const [title2, setTitle2] = useState([
    "Chọn",
    "Địa điểm",
    "Số Km",
    "Số giờ",

    "Hành động",
  ]);
  const LayAPI = () => {
    fetch("https://653b56c92e42fd0d54d4ef90.mockapi.io/travel/diadiemgoiy")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };
  const [options, setOptions] = useState([]);
  useEffect(() => {
    // Gọi API endpoint để lấy danh sách tùy chọn
    fetch("https://653b56c92e42fd0d54d4ef90.mockapi.io/travel/diadiemgoiy")
      .then((response) => response.json())
      .then((data) => {
        // Tạo mảng options từ dữ liệu API
        const apiOptions = data.map((item) => ({
          value: item.diaDiem,
          label: item.diaDiem,
        }));
        // Gán mảng options vào state options
        setOptions(apiOptions);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  }, []);

  //hàm exit
  const handleExit = () => {
    setDiaDiem("");
    setSoGio("");
  };
  //hàm sửa
  const HandleEdit = (id) => {
    fetch(
      `https://653b56c92e42fd0d54d4ef90.mockapi.io/travel/diadiemgoiy/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi tải thông tin người dùng");
        }
        return response.json();
      })
      .then((data) => {
        setDiaDiem(data.diaDiem);
        setSoGio(data.soGio);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (selectedOption) => {
    // Xử lý sự kiện thay đổi giá trị
    setDiaDiem(selectedOption.value);
  };
  const [showList, setShowList] = useState(true);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [hideButton, setHideButton] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(false); //hiển thị lịch trình chi tiết
  const [check, setCheck] = useState(true); //hiển thị lịch trình chi tiết

  const [diaDiem, setDiaDiem] = useState("");
  const [soGio, setSoGio] = useState("");

  //ẩn item
  const handleHide = (index) => {
    setHiddenItems([...hiddenItems, index]);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    LayAPI();
  }, []);
  // Add this at the beginning of your component
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const handleAdd = () => {
    setHideButton(false);
    setShowList(true);
    setSuggestions([]); // Clear suggestions when opening the list
    setIsShow(true);
  };

  const handleThoat = () => {
    setShowList(false);
    setHideButton(true);
    setSearchTerm(""); // Clear search term when closing the list
  };
  const handleLuu = () => {
    setShowList(false);
    setHideButton(true);
    const newData = selectedItems.map((index) => newlocations[index]);
    setData([...data, ...newData]);
  };
  const handleCheckboxChange = (index) => {
    const isSelected = selectedItems.includes(index);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const handleStart = () => {
    setIsTabOpen(true);
  };
  console.log(locations);
  console.log(data);

  const [inputValue, setInputValue] = useState("");
  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      LayAPI();
      setInputValue("");
      setIsShow(true); // Hiển thị data.map khi Enter được nhấn
    }
  };

  const handleStartClick = () => {
    const newData = selectedItems.map((index) => newlocations[index]);
    setData([...data, ...newData]);
    setLocationSchedule([
      {
        diaDiem: "Thác Giang Điền",
        address: "Dinh Bảo Đại",
        lat: 12.0695816,
        lng: 108.1622121,
        km: 62,
        soGio: 4,
        dacSan: "dacSan 3",
        danhMuc: "danhMuc 3",
        anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/123.jpg",
        id: "3",
        thoitiet:
          "https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg",
      },
      {
        diaDiem: "Bò sữa Long Thành",
        address: "Thác Datanla",
        lat: 11.9039905,
        lng: 108.4494419,
        km: 64,
        soGio: 3,
        dacSan: "dacSan 4",
        danhMuc: "danhMuc 4",
        anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
        id: "4",
        thoitiet:
          "https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg",
      },
      {
        diaDiem: "Vườn quốc gia Nam Cát Tiên",
        address: "Hồ Than Thở",
        lat: 11.9571296,
        lng: 108.4757362,
        km: 60,
        soGio: 5,
        dacSan: "dacSan 5",
        danhMuc: "danhMuc 5",
        anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/9.jpg",
        id: "5",
        thoitiet:
          "https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg",
      },
      {
        diaDiem: "Bò Cạp Vàng",
        address: "Chùa Linh Phước",
        lat: 11.9437698,
        lng: 108.4959425,
        km: 55,
        soGio: 5,
        dacSan: "dacSan 6",
        danhMuc: "danhMuc 6",
        anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1095.jpg",
        id: "6",
        thoitiet:
          "https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg",
      },
      {
        diaDiem: "Làng du lịch Tre Việt",
        address: "Vườn hoa Đà Lạt",
        lat: 11.9437696,
        lng: 108.4904496,
        km: 10,
        soGio: 2,
        dacSan: "dacSan 7",
        danhMuc: "danhMuc 7",
        anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/340.jpg",
        id: "7",
        thoitiet:
          "https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg",
      },
    ]);

    setHide(false);

    // Logic để tạo dữ liệu mới ở đây
    // const newData = [
    //   {
    //     diaDiem: "Thác Giang Điền",
    //     address: "Dinh Bảo Đại mùa hè",
    //     lat: 12.0695816,
    //     lng: 108.1622121,
    //     km: 62,
    //     soGio: 4,
    //     dacSan: "dacSan 3",
    //     danhMuc: "danhMuc 3",
    //     anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/123.jpg",
    //     id: "3",
    //   },
    //   {
    //     diaDiem: "Bò sữa Long Thành",
    //     address: "Thác Datanla",
    //     lat: 11.9039905,
    //     lng: 108.4494419,
    //     km: 64,
    //     soGio: 3,
    //     dacSan: "dacSan 4",
    //     danhMuc: "danhMuc 4",
    //     anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
    //     id: "4",
    //   },
    //   {
    //     diaDiem: "Vườn quốc gia Nam Cát Tiên",
    //     address: "Hồ Than Thở",
    //     lat: 11.9571296,
    //     lng: 108.4757362,
    //     km: 60,
    //     soGio: 5,
    //     dacSan: "dacSan 5",
    //     danhMuc: "danhMuc 5",
    //     anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/9.jpg",
    //     id: "5",
    //   },
    //   {
    //     diaDiem: "Bò Cạp Vàng",
    //     address: "Chùa Linh Phước",
    //     lat: 11.9437698,
    //     lng: 108.4959425,
    //     km: 55,
    //     soGio: 5,
    //     dacSan: "dacSan 6",
    //     danhMuc: "danhMuc 6",
    //     anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1095.jpg",
    //     id: "6",
    //   },
    //   {
    //     diaDiem: "Làng du lịch Tre Việt",
    //     address: "Vườn hoa Đà Lạt",
    //     lat: 11.9437696,
    //     lng: 108.4904496,
    //     km: 10,
    //     soGio: 2,
    //     dacSan: "dacSan 7",
    //     danhMuc: "danhMuc 7",
    //     anh: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/340.jpg",
    //     id: "7",
    //   },
    // ];
    // goongjs.accessToken = 'wnicbAmnNkoMHNYUKWnlFHezV189FjmMwkNJ7hKW';
    // const map = new goongjs.Map({
    //   container: 'map',
    //   style: 'https://tiles.goong.io/assets/goong_map_web.json',
    //   center: [105.80278, 20.99245],
    //   zoom: 11.5
    // });

    // map.on('load', function () {
    //   const layers = map.getStyle().layers;
    //   let firstSymbolId;
    //   for (let i = 0; i < layers.length; i++) {
    //     if (layers[i].type === 'symbol') {
    //       firstSymbolId = layers[i].id;
    //       break;
    //     }
    //   }

    //   // const goongClient = goongSdk({
    //   //   accessToken: 'sDekCNyRZ4dBdw2yNnCVcCikGe425efoHCCiJmbb'
    //   // });

    //   directionService
    //     .getDirections({
    //       origin: '20.981971,105.864323',
    //       destination: '21.031011,105.783206',
    //       vehicle: 'car'
    //     })
    //     .send()
    //     .then(function (response) {
    //       const directions = response.body;
    //       const route = directions.routes[0];

    //       const geometry_string = route.overview_polyline.points;
    //       const geoJSON = polyline.toGeoJSON(geometry_string);
    //       map.addSource('route', {
    //         'type': 'geojson',
    //         'data': geoJSON
    //       });

    //       map.addLayer(
    //         {
    //           'id': 'route',
    //           'type': 'line',
    //           'source': 'route',
    //           'layout': {
    //             'line-join': 'round',
    //             'line-cap': 'round'
    //           },
    //           'paint': {
    //             'line-color': '#1e88e5',
    //             'line-width': 8
    //           }
    //         },
    //         firstSymbolId
    //       );
    //     });
    // });

    // onScheduleUpdate(newData);

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     function (position) {

    //       const storedMap = localStorage.getItem("map");
    //       const initializedMap = JSON.parse(storedMap);

    //       var userLocation = {
    //         address: "Vị trí của tôi",
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //       };

    //       initializedMap.current.flyTo({
    //         center: [userLocation.lng, userLocation.lat],
    //         essential: true,
    //       });

    //       var layers = initializedMap.current.getStyle().layers;

    //       var firstSymbolId;
    //       for (var i = 0; i < layers.length; i++) {
    //         if (layers[i].type === "symbol") {
    //           firstSymbolId = layers[i].id;
    //           break;
    //         }
    //       }
    //       for (let i = 0; i < LocationSchedule.length - 1; i++) {
    //         const startPoint = i === 0 ? userLocation : LocationSchedule[i];
    //         const endPoint = LocationSchedule[i + 1];

    //         if (startPoint) {
    //           var el = document.createElement("div");
    //           el.style.backgroundColor = "red";
    //           el.style.width = "20px";
    //           el.style.height = "20px";
    //           el.style.borderRadius = "50%";

    //           // Điều chỉnh vị trí của đánh dấu
    //           // var marker = new goongjs.Marker()
    //           //   .setLngLat([startPoint.lng, startPoint.lat])
    //           //   .addTo(initializedMap.current);
    //           new goongjs.Popup()
    //             .setLngLat([startPoint.lng, startPoint.lat])
    //             .setHTML(`<p> ${startPoint.address} </p>`)
    //             .setOffset(39)
    //             .addTo(initializedMap.current);
    //         }
    //         if (endPoint) {
    //           var marker = new goongjs.Marker()
    //             .setLngLat([endPoint.lng, endPoint.lat])
    //             .addTo(initializedMap.current);
    //           new goongjs.Popup()
    //             .setLngLat([endPoint.lng, endPoint.lat])
    //             .setHTML(`<p> ${endPoint.address} </p>`)
    //             .setOffset(39)
    //             .addTo(initializedMap.current);
    //         }

    //         // Use startPoint.lat, startPoint.lng as the origin in the directions service
    //         directionService
    //           .getDirections({
    //             origin: `${startPoint.lat},${startPoint.lng}`,
    //             destination: `${endPoint.lat},${endPoint.lng}`,
    //             vehicle: "car",
    //           })
    //           .send()
    //           .then(function (response) {
    //             var directions = response.body;
    //             var route = directions.routes[0];

    //             var geometry_string = route.overview_polyline.points;
    //             var geoJSON = polyline.toGeoJSON(geometry_string);
    //             initializedMap.current.addSource(`route${i}`, {
    //               type: "geojson",
    //               data: geoJSON,
    //             });
    //             initializedMap.current.addLayer(
    //               {
    //                 id: `route${i}`,
    //                 type: "line",
    //                 source: `route${i}`,
    //                 layout: {
    //                   "line-join": "round",
    //                   "line-cap": "round",
    //                 },
    //                 paint: {
    //                   "line-color": "rgb(0, 153, 255)",
    //                   "line-width": 8,
    //                 },
    //               },
    //               firstSymbolId
    //             );
    //           });
    //         }
    //     },
    //     function (error) {
    //       // Handle geolocation error
    //       console.error("Error getting user's location:", error.message);
    //     }
    //   );
    // } else {
    //   // Geolocation is not supported
    //   console.error("Geolocation is not supported by this browser.");
    // }

    // var layers = initializedMap.current.getStyle().layers;

    // var firstSymbolId;
    // for (var i = 0; i < layers.length; i++) {
    //   if (layers[i].type === "symbol") {
    //     firstSymbolId = layers[i].id;
    //     break;
    //   }
    // }

    // for (let i = 0; i < LocationSchedule.length - 1; i++) {
    //   const startPoint = i === 0 ? userLocation : LocationSchedule[i];
    //   const endPoint = LocationSchedule[i + 1];

    //   if (startPoint) {
    //     new goongjs.Popup()
    //       .setLngLat([startPoint.lng, startPoint.lat])
    //       .setHTML(`<p> ${startPoint.address} </p>`)
    //       .setOffset(39)
    //       .addTo(initializedMap.current);
    //   }

    //   if (endPoint) {
    //     var marker = new goongjs.Marker()
    //       .setLngLat([endPoint.lng, endPoint.lat])
    //       .addTo(initializedMap.current);
    //     new goongjs.Popup()
    //       .setLngLat([endPoint.lng, endPoint.lat])
    //       .setHTML(`<p> ${endPoint.address} </p>`)
    //       .setOffset(39)
    //       .addTo(initializedMap.current);
    //   }

    //   directionService
    //     .getDirections({
    //       origin: `${startPoint.lat},${startPoint.lng}`,
    //       destination: `${endPoint.lat},${endPoint.lng}`,
    //       vehicle: "car",
    //     })
    //     .send()
    //     .then(function (response) {
    //       var directions = response.body;
    //       var route = directions.routes[0];

    //       var geometry_string = route.overview_polyline.points;
    //       var geoJSON = polyline.toGeoJSON(geometry_string);
    //       initializedMap.current.addSource(`route${i}`, {
    //         type: "geojson",
    //         data: geoJSON,
    //       });
    //       initializedMap.current.addLayer(
    //         {
    //           id: `route${i}`,
    //           type: "line",
    //           source: `route${i}`,
    //           layout: {
    //             "line-join": "round",
    //             "line-cap": "round",
    //           },
    //           paint: {
    //             "line-color": "rgb(0, 153, 255)",
    //             "line-width": 8,
    //           },
    //         },
    //         firstSymbolId
    //       );
    //     });
    // }
  };
  const [checkList2, setCheckList2] = useState([]);

  useEffect(() => {
    setCheckList2(Array(data.length).fill(true));
  }, [data]);
  
  const handleCheckboxChange2 = (index) => {
    const updatedCheckList = [...checkList2];
    updatedCheckList[index] = !updatedCheckList[index];
    setCheckList2(updatedCheckList);
  };
  return (
    <LichTrinh>
      <div className="container">
        <div className="navContainer">
          <div className="navSearch">
            <BsSearch className="iconSearch" />
            <input
              className="navInput"
              type="text"
              placeholder="Tìm kiếm..."
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleEnterKey}
            />
          </div>
          <button className="navButtonAdd" onClick={handleAdd}>
            Thêm
          </button>
        </div>

        <div className="viewContainer">
          {isShow && (
            <table className="tbl">
              <tr className="title-data">
                {title.map((t) => {
                  return <th key={t}>{t}</th>;
                })}
              </tr>

              {data.map((u, index) => (
                <tr
                  // id="listViewData"
                  // className={`user-item-${index} ${
                  //   index % 2 === 1 ? "even-row" : ""
                  // }`}
                  id="listViewData"
                  className={`user-item-${index} ${
                    index % 2 === 1 ? "even-row" : ""
                  } ${hiddenItems.includes(index) ? "hidden-row" : ""}`}
                  key={index}
                >
                  <td data-lable="STT" key={index}>
                    <input
                      type="checkbox"
                      checked={checkList2[index]}
                      onChange={() => handleCheckboxChange2(index)}
                    />
                  </td>

                  <td data-lable="Địa điểm" key={u.diaDiem}>
                    {u.diaDiem}
                  </td>

                  <td data-lable="Số Km" key={u.km}>
                    {u.km}
                  </td>
                  <td data-lable="Số giờ" key={u.soGio}>
                    {u.soGio}
                  </td>

                  <td data-lable="Lưu">
                    {" "}
                    <BsBookmark
                      style={{ color: "#ffab00", marginRight: "10" }}
                      className="iconEdit"
                      onClick={() => {
                        // HandleEdit(u.id);
                        // setShow(!show)
                      }}
                    />
                  </td>
                  <td data-lable="Xóa">
                    {" "}
                    {/* <AiOutlineClose
                      style={{ color: "#fc424a" }}
                      className="iconDelete"
                    /> */}
                    <AiOutlineClose
                      onClick={() => handleHide(index)}
                      style={{ color: "#fc424a" }}
                      className="iconDelete"
                    />{" "}
                  </td>
                </tr>
              ))}
              {newlocations.map((u, index) => (
                <tr
                  id="listViewData"
                  className={`user-item-${index} ${
                    index % 2 === 1 ? "even-row" : ""
                  } ${hiddenItems.includes(index) ? "hidden-row" : ""}`}
                  key={index}
                >
                  <td>
                    <input
                      type="checkbox"
                      // checked={checkedItems[u.id]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  {/* <td data-lable="STT" key={index}>
                      {index + 1}
                    </td> */}

                  <td data-lable="Địa điểm" key={u.diaDiem}>
                    {u.diaDiem}
                  </td>

                  <td data-lable="Số Km" key={u.km}>
                    {u.km}
                  </td>
                  <td data-lable="Số giờ" key={u.soGio}>
                    {u.soGio}
                  </td>
                  <td data-lable="Lưu">
                    {" "}
                    <BsBookmark
                      style={{ color: "#ffab00", marginRight: "10" }}
                      className="iconEdit"
                      onClick={() => {
                        // HandleEdit(u.id);
                        // setShow(!show)
                      }}
                    />
                  </td>
                  <td data-lable="Xóa">
                    {" "}
                    <AiOutlineClose
                      onClick={() => handleHide(index)}
                      style={{ color: "#fc424a" }}
                      className="iconDelete"
                    />
                  </td>
                </tr>
              ))}
            </table>
          )}

          {hideButton && (
            <div className="buttonBatDau">
              <button onClick={handleStart} className="navButtonAdd navStart">
                Bắt đầu
              </button>
            </div>
          )}

          {/* {showList && (
            <div className="listContainer">
              {/* <div className="vien"></div>
              <h2 style={{ marginTop: "10px", textAlign:"center"}}>Gợi ý lịch trình mới</h2>
              <table className="tbl">
              <tr className="title-data">
                {title2.map((t) => {
                  return <th key={t}>{t}</th>;
                })}
              </tr> 
              <table className="tbl">
                {newlocations.map((u, index) => (
                  <tr
                    id="listViewData"
                    className={`user-item-${index} ${
                      index % 2 === 1 ? "even-row" : ""
                    } ${hiddenItems.includes(index) ? "hidden-row" : ""}`}
                    key={index}
                  >
                    <td>
                      <input
                        type="checkbox"
                        // checked={checkedItems[u.id]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                    {/* <td data-lable="STT" key={index}>
                      {index + 1}
                    </td> 

                    <td data-lable="Địa điểm" key={u.diaDiem}>
                      {u.diaDiem}
                    </td>

                    <td data-lable="Số Km" key={u.km}>
                      {u.km}
                    </td>
                    <td data-lable="Số giờ" key={u.soGio}>
                      {u.soGio}
                    </td>

                    <td data-lable="Xóa">
                      {" "}
                      <AiOutlineClose
                        onClick={() => handleHide(index)}
                        style={{ color: "#fc424a" }}
                        className="iconDelete"
                      />
                    </td>
                  </tr>
                ))}
              </table>
              {/* // <div className="navButton">
              //   <button onClick={handleThoat}  className="navButtonExit">
              //     Hủy
              //   </button>
              //   <button onClick={handleLuu} style={{backgroundColor: "#681DFE" }} className="navButtonAdd">
              //     Lưu
              //   </button>
              // </div> 
            </div>
          )} */}
        </div>
      </div>
      {isTabOpen && (
        <div className="containerLichTrinhChiTiet">
          <div className="navContainerChiTiet">
            <div
              className="buttonExit"
              onClick={() => {
                setIsTabOpen(false);
              }}
            >
              <FaWindowClose
                style={{
                  fontSize: "1.2em",
                  color: "#656CEE",
                  marginLeft: "40px",
                  marginTop: "15px",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="titleChiTiet" style={{ marginBottom: "25px" }}>
              <h1 style={{ color: "#000", fontWeight: "bold" }}>
                Lịch trình du lịch Đồng Nai
              </h1>
            </div>
            <div className="navButtonChiTiet">
              <button
                className="navButton-edit"
                onClick={() => {
                  setIsTabOpen(false);
                }}
              >
                Chỉnh sửa
              </button>
              <button
                className="navButton-edit"
                onClick={() => {
                  // setShowInput(false);
                  setIsTabOpen(false);
                  // DrawLine();
                  handleStartClick();
                }}
              >
                Thêm
              </button>
            </div>

            <div className="containerLichTrinhItem">
              <div className="itemLichTrinh">
                {data.map((u, index) => (
                  <div
                    id="listViewDataLichTrinh"
                    className={`user-item-${index} ${
                      index % 2 === 1 ? "even-row" : ""
                    }`}
                  >
                    <h4 style={{ fontWeight: "bold" }}>{u.diaDiem}</h4>
                    <p>{u.km} km</p>
                    <p>{u.soGio} giờ</p>
                    <p>{u.dacSan}</p>
                  </div>
                ))}
              </div>
              <div>
                <button
                  className="navButtonStart"
                  onClick={() => {
                    // setShowInput(false);
                    setIsTabOpen(false);
                    // DrawLine();
                    handleStartClick();
                  }}
                >
                  Bắt đầu di chuyển
                </button>
              </div>
            </div>

            {showInput && (
              <div className="containerInputAdd">
                <div
                  className="buttonExitInput"
                  onClick={() => {
                    setShowInput(false);
                  }}
                >
                  <AiOutlineCloseCircle
                    onClick={() => {
                      handleExit();
                    }}
                  />
                </div>
                <div className="titleChiTiet" style={{ marginBottom: 15 }}>
                  <h3>Thông tin lịch trình du lịch</h3>
                </div>
                <div className="containerInput">
                  <div className="addItemInput">
                    <label>Chọn địa điểm: </label>
                    <ReactSelect
                      className="cbQuyen"
                      options={options}
                      value={{ value: diaDiem, label: diaDiem }}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="addItemInput">
                    <label>Thời gian ngày đi: </label>
                    <input
                      id="inputThoiGian"
                      onChange={(e) => setSoGio(e.target.value)}
                      value={soGio}
                      type="text"
                      name="ThoiGian"
                      placeholder="Thời gian ngày đi"
                    />
                  </div>
                  <div className="addItemInput">
                    <label>Giờ lịch trình: </label>
                    <input
                      id="inputSoGio"
                      onChange={(e) => setSoGio(e.target.value)}
                      value={soGio}
                      type="text"
                      name="SoGio"
                      placeholder="Giờ lịch trình"
                    />
                  </div>
                </div>

                <div className="navButton">
                  <button className="navButtonAdd">Lưu lịch trình</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </LichTrinh>
  );
};

export default ItineraryTips;

const LichTrinh = styled.div`
  .navSearch input {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 50px;
    padding: 0 10px;
    height: 40px;
  }
  padding-right: 10px;
  width: 47vw;
  transform: translateX(0px) translateY(0px);
  display: flex;
  top: 0;
  bottom: 0;
  transition: margin 0.25s ease-out;
  max-height: 100vh;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

  transition: width 0.25s ease;
  transition: width 0.25s ease-in;

  .navButtonAdd {
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    margin-right: 10px;
    width: 120px;
    height: 50px;
    padding: 8px 10px;
    color: #fff;
    background-color: #368e4f;
    border-color: #368e4f;
    border-radius: 12px;
    cursor: pointer;
    text-align: center;
    overflow: hidden;

    &:hover {
      color: #fff;
      background-color: #3ca159;
      border-color: #3ca159;
    }
  }
  .navButton-edit {
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    margin-right: 10px;
    width: 120px;
    height: 50px;
    padding: 8px 10px;
    color: #fff;
    background-color: #368e4f;
    border-color: #368e4f;
    border-radius: 12px;
    cursor: pointer;
    text-align: center;
    overflow: hidden;

    &:hover {
      color: #fff;
      background-color: #3ca159;
      border-color: #3ca159;
    }
  }
  .navStart {
    margin-top: 20px;
  }
  .navButtonStart {
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    margin-right: 10px;
    width: 208px;
    height: 80px;
    padding: 8px 10px;
    color: #fff;
    background-color: #368e4f;
    border-color: #368e4f;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    overflow: hidden;

    &:hover {
      color: #fff;
      background-color: #3ca159;
      border-color: #3ca159;
    }
  }
  .navSearch {
    width: 400px;
    height: 60px;
    display: flex;
    margin-top: 15px;
  }
  .navButtonExit {
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
    width: 10vw;
    height: 40px;
    padding: 8px 10px;
    color: #000;
    background-color: #fff;
    border: solid 1px #000;

    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    overflow: hidden;

    &:hover {
      color: #000;
      background-color: #f4f2f2;
      border-color: #000;
    }
  }
  .navContainer {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .iconSearch {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #000;
    transform: translateX(280px) translateY(10px);
  }
  .tbl {
    border-radius: 20px;
    width: 100%;
    margin-bottom: 2vh;
  }
  tr {
    border-bottom: 1px solid #ccc;
  }
  table {
    border-collapse: collapse;
  }
  tr,
  th,
  td {
    text-align: center;
    padding: 15px;
  }

  td {
    vertical-align: middle;
    font-size: 0.875rem;
    line-height: 1.5;
    white-space: nowrap;
  }
  .viewContainer {
    height: 100vh;
    overflow-y: auto;
  }
  .vien {
    height: 1px;
    background-color: #000;
    width: 90%;
    margin: 0 auto;
  }
  input[type="checkbox"] {
    transform: scale(1.5); /* Tăng kích thước nút checkbox lên 1.5 lần */
    vertical-align: middle;
    margin-top: 20px;
  }
  .navButton {
    height: 10vh;
    width: 100%;
    margin-bottom: 10vh;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  .buttonBatDau {
    display: flex;
    justify-content: center;
    margin-bottom: 20vh;
  }
  .hidden-row {
    display: none; /* Ẩn hàng */
  }
  .containerLichTrinhChiTiet {
    position: absolute;
    width: calc(100vw - 100px);
    z-index: 9999999;
    top: 0;
    background-color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  .navContainerChiTiet {
    position: absolute;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-top: 20px;
  }
  .buttonExit {
    font-size: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-bottom: 15px;
    margin-right: 10px;
    margin-top: 10px;
  }
  .buttonExitInput {
    font-size: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-bottom: 15px;
    margin-right: 20px;
    margin-top: 10px;
  }
  .navButtonChiTiet {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
  }
  .itemLichTrinh {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: #f2f2f2;
    margin: 20px;
    border-radius: 20px;
    justify-content: center;
  }
  .itemLichTrinh p {
    font-size: 13px;
  }
  .itemLichTrinh h1 {
    font-size: 14px;
    margintop: 20px;
  }
  .containerLichTrinhItem {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 10px;
  }
  #listViewDataLichTrinh {
    width: 20%;
    box-sizing: border-box;
    padding: 10px;
    margin: 20px 15px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }
  .containerInputAdd {
    width: 55vw;
    height: 50vh;
    z-index: 999999999;
    position: absolute;

    background-color: #ccc;
    margin-top: 15vh;
  }
  .containerInput .cbQuyen {
    font-size: 19px;
    width: 30vw;
    border: 1px solid #ccd9;
    border-radius: 10px;

    cursor: text;
    margin-bottom: 20px;
  }
  .containerInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .containerInput input {
    font-size: 19px;
    width: 30vw;
    border: 1px solid #ccd9;
    border-radius: 50px;
    padding-left: 10px;
    cursor: text;
    margin-bottom: 20px;
  }
  .addItemInput {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .addItemInput label {
    width: 10vw;
    margin-bottom: 23px;
    margin-right: 20px;
    left: 0;
    text-align: left !important;
    font-weight: bold;
  }
  .buttonLichTrinhItem {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
`;
