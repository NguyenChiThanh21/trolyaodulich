import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { format } from "date-fns";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";


const ViewDiaDiem = () => {
  const handle = () => {
    if (IsEdit) {
      handldUpdate();
    } else {
      handleAddData();
    }
  };

  const [title, setTitle] = useState([
    "STT",
    "Tên địa điểm",
    "Vị trí",
    // "Mô",
    // "Tỉnh",
    // "Loại hình",
    // "Tọa độ",
    // "Ảnh",
    "Hành động",
  ]);
  const LayAPI = () => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3005/location?limit=10&page=1', {
    headers: {
      "Authorization": `Bearer ${token}`,
      
    }
  })
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error(error));
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    LayAPI();
  }, []);

  const [anh, setAnh] = useState();
  const [danhMuc, setDanhMuc] = useState("");
  const [diaDiem, setDiaDiem] = useState("");
  const [dacSan, setDacSan] = useState("");
  const [IsEdit, setIsEdit] = useState(false);

  //popup
  const [show, setShow] = useState(false);
  //add data

  const [editing, setEditing] = useState("");

  const HandleEdit = (id) => {
    setEditing(id);
    fetch(
      `https://653b56c92e42fd0d54d4ef90.mockapi.io/travel/diadiemgoiy/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi tải thông tin danh mục");
        }
        return response.json();
      })
      .then((data) => {
        setDiaDiem(data.diaDiem);
        setDacSan(data.dacSan);
        setDanhMuc(data.danhMuc);
        setAnh(data.anh);
        setShow(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handldUpdate = () => {
    fetch(
      `https://653b56c92e42fd0d54d4ef90.mockapi.io/travel/diadiemgoiy/${editing}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "token": 'Bearer ' 
        },
        body: JSON.stringify({
          diaDiem,
          dacSan,
          danhMuc,
          anh,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi cập nhật thông tin địa điểm");
        }
        alert("Thông tin địa điểm đã được cập nhật thành công");
        return response.json();
      })
      .then(() => {
        handleExit();
        LayAPI();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddData = async () => {
    try {
      const response = await fetch(
        "https://653b56c92e42fd0d54d4ef90.mockapi.io/travel/diadiemgoiy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            diaDiem,
            dacSan,
            danhMuc,
            anh,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Lỗi khi thê thông tin địa điểm");
      }

      alert("Thông tin địa điểm đã được thêm thành công");

      const result = await response.json();
      setData([...data, result]);
      handleExit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    fetch(`https://653b56c92e42fd0d54d4ef90.mockapi.io/travel/diadiemgoiy/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          throw new Error("Lỗi khi xóa địa điểm gợi ý");
        }
        alert("Xóa địa điểm thành công")
        return response.json();
      })
      .then(() => {
        LayAPI();
      })
      .catch((error) => {
        console.error(error);
      });
      const newDiaDiem = data.filter((DiaDiem) => DiaDiem.DiaDiem !== DiaDiem);
      setData(newDiaDiem);
  };
  //nút thoát
  const handleExitAndShow = () => {
    handleExit();
    setShow(!show);
    //  tắt chế  độ mờ
    setOverlayIsOpen(false);
    // setHideEditImage(true);

  };

  const handleExit = () => {
    setDiaDiem("");
    setDacSan("");
    setDanhMuc("");
    setAnh();
    setEditing("");
  };

  //xem trước ảnh
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setAnh(fileUrl);
  };

   // làm mờ khi ấn thêm
   const [overlayIsOpen, setOverlayIsOpen] = useState(false);
   const Overlay = ({ isOpen }) => {
     if (!isOpen) {
       return <div></div>;
     }
   
     return (
       <div style={{
         position: 'fixed',
         top: 0,
         right: 0,
         bottom: 0,
         left: 0,
         background: 'rgba(0, 0, 0, 0.5)',
         pointerEvents: 'none',
       }}>
       </div>
     );
   };
  return (
    <div>
    <Overlay isOpen={overlayIsOpen} />
    <ViewC>
      <div className="navContainer">
        <button
          className="navButtonAdd"
          onClick={() => {
            setIsEdit(false);
            setShow(!show);
            //  bật chế  độ mờ
            setOverlayIsOpen(true);
          }}
        >
           <IoIosAddCircleOutline 
            style={{ marginRight: "5",strokeWidth: "20"}}
          />
          Thêm địa điểm
        </button>
      </div>

      <div className="viewContainer">
        <table className="tbl">
          <tr className="title-data">
            {title.map((t) => {
              return <th key={t}>{t}</th>;
            })}
          </tr>

          {data.map((u, index) => (
            <tr
              id="listViewData"
              className={`user-item-${index} ${
                index % 2 === 1 ? "even-row" : ""
              }`}
            >
              <td data-lable="STT" key={index}>
                {index + 1}
              </td>

              <td data-lable="Tên địa điểm " key={u.name}>
                {u.name}
              </td>
              <td data-lable="Vị trí" key={u.address}>
                {u.address}
              </td>
              {/* <td data-lable="Mô tả" key={u.description}>
                {u.description}
              </td> */}
              {/* <td data-lable="Tỉnh" key={u.province}>
                {u.province}
              </td>
              <td data-lable="Loại hình" key={u.category}>
                {u.category}
              </td> */}
               {/* tọa độ */}
{/* 
              <td data-lable="Tọa độ" key={u.coordinates}>
                {u.coordinates}
              </td> */}
              {/* <td className="avt-data" data-lable="Hình ảnh" key={u.img}>
                {u.img && (
                  <img
                    className="avt"
                    src={u.img}
                    alt={"ảnh " + (index + 1)}
                    style={{ width: "60px", height: "40px" }}
                  />
                )}
              </td> */}
              <td data-lable="Chỉnh sửa">
                {" "}
                <LiaUserEditSolid
                  style={{ color: "#ffab00", marginRight: "10" }}
                  className="iconEdit"
                  onClick={() => {
                    HandleEdit(u.id);
                    setIsEdit(true);
                    setShow(!show);
                  }}
                />{" "}
                <MdDelete 
                onClick={() => handleDelete(u.id)} 
                style={{ color: "#fc424a" }} 
                className="iconDelete" 
                />{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>

      {show && (
        <div className="addContainer">
          <div className="addContainer-Btn_Close" > 
            <FaWindowClose
             style={{ fontSize: "2em" , color: "#535353"}} 
             onClick={handleExitAndShow}
            />
               </div>
            {editing ? (

              <h1 style={{ marginBottom: "30px", fontSize: "1.5em" }}>{}</h1>
            ) : (
              

              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1
                  style={{
                    marginBottom: "30px",
                    fontSize: "2.5em",
                    fontWeight: "bold",
                    color: "#000",
                    marginTop: "0",
                    marginRight: "10px",
                  }}
                >
                  Thông tin
                </h1>
               
              </div>
            )}
          <div className="addItemInput">
            <label> Tên địa điểm: </label>
            <input
              id="inputTen"
              onChange={(e) => setDiaDiem(e.target.value)}
              value={diaDiem}
              type="text"
              name="DiaDiem"
              placeholder="Nhập địa điểm"
            />
          </div>
          <div className="addItemInput">
            <label> Tên đặc sản: </label>
            <input
              id="inputTen"
              onChange={(e) => setDacSan(e.target.value)}
              value={dacSan}
              type="text"
              name="DacSan"
              placeholder="Nhập đặc sản"
            />
          </div>
          <div className="addItemInput">
            <label> Tên danh mục: </label>
            <input
              id="inputTen"
              onChange={(e) => setDanhMuc(e.target.value)}
              value={danhMuc}
              type="text"
              name="DanhMuc"
              placeholder="Nhập danh mục"
            />
          </div>
          <div className="inputAvt">
            <div
              className="addItemInput"
              style={{ justifyContent: "space-between" }}
            >
              <label>Hình ảnh:</label>

              <div className="iteamInputImage" style={{ width: "100" }}>
                <input
                  id="anhInput"
                  type="file"
                  onChange={handlePreviewAvatar}
                  accept="image/*"
                  // onChange={handlePreviewAvatar}
                  style={{
                    marginTop: 8,
                    right: 0,
                    width: 93,
                    left: 0,
                    padding: 0,
                    border: "none",
                    borderRadius: "unset",
                  }}
                />

                <div className="imputImage">
                  {anh && <img src={anh} alt="Preview Avatar" width="20%" />}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="addItemInput">
            <label> Loại hình: </label>
            <input
              id="inputNgaySinh"
              onChange={(e) => setLoaiHinh(e.target.value)}
              value={loaiHinh}
              type="text"
              name="LoaiHinh"
              placeholder="Nhập loại hình"
            />
          </div> */}

          <div className="buttonPopup">
            <button className="addButtonAdd cancel" onClick={handleExitAndShow}>
              Hủy
            </button>

            <button onClick={handle} className="addButtonAdd add">
              Xác nhận
            </button>
          </div>
        </div>
      )}
    </ViewC>
    </div>

  );
};
export default ViewDiaDiem;
const ViewC = styled.div`
  margin-left: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70vw;
  margin-top: 12vh;

  .viewContainer {
    padding: 0 2vw;
    border-radius: 20px;

    width: 100%;
    display: flex;
    justify-content: center;
  }
  .title-data {
    background-color: #f4f4f4;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .tbl {
    border-radius: 20px;
    width: 100%;
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
    // white-space: nowrap;
  }

  .navContainer {
    display: flex;
    width: 100%;
    justify-content: right;
    margin: 5px 60px;
    margin-bottom: 10px;

    padding: 12px 0;
    border-radius: 20px;
  }
  .navSearch {
    margin-right: 5vw;
    display: flex;
    justify-content: flex-end;
  }
  // css nút thêm
  .navButtonAdd {
    margin-right: 5vw;
    display: flex;
    justify-content: space-around;
    font-size: 1em;
    font-weight: bold;
    min-width: fit-content; //kích thước nút tùy thuộc vào nội dung
    padding: 8px 10px;
    color: #fff;
    background-color: #368E4F;
    border-color: #0090e7;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    overflow: hidden; // ôm sát thành phần con bên trong không hiển thị thừa

    // hiệu ứng khi chạm nào nút thêm
    &:hover {
      color: #fff;
      background-color: #3da159; 
      border-color: ##2f7d45;
    }
  }
  .iconSearch {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #000;
    transform: translateX(34px) translateY(10px);
  }
  .navContainer input {
    font-size: 18px;
    width: 20vw;
    border: 2px solid black;
    border-radius: 20px;
    padding-left: 40px;
    &:focus {
      padding-left: 40px;
      cursor: text;
    }
  }

  // màn hình thêm dữ liệu
  .addContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 60px;
    background-color: #fff;
    z-index: 999999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: 2px solid #fff;
    color: #000;
  }
  // nút đóng màn hình thêm dữ liệu
  .addContainer-Btn_Close{
    width : 100%;
    display: flex; 
    justify-content: flex-end;
    cursor: pointer;
    margin-bottom: 10px;
    transform: translateX(30px) translateY(-6px);
  }

  .addInput {
    display: flex;
    justify-content: center;
    margin: 5px 80px;
    flex-direction: column;
  }
  .addContainer input {
    font-size: 19px;
    width: 30vw;
    height: 40px;
    border: 1px solid #ccd9;
    border-radius: 10px;
    padding-left: 10px;
    cursor: text;
    margin-bottom: 20px;
  }
  .addContainer label {
    text-align: left !important;
    width: 5vw;
    font-weight: bold;
  }

  .addItemInput {
    display: flex;
    align-items: flex-start;

    flex-direction: column;
  }
  .addItemInput label {
    width: 20vw;
  }

  .addButtonAdd {
    font-size: 18px;
    font-weight: bold;
    padding: 14px 20px;
    // background-color: #D9D9D9;
    // min-width: fit-content
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    margin-right: 80px;
    margin-top: 20px;
  }
  // nút thêm
  .add {
    background-color: #fff;
    color: #3277D8;
    border: solid 1px #D9D9D9;
    &:hover {
      background-color: #f3f3f3;
      
    }
  }
  // nút đóng
  .cancel {
    background-color: #D9D9D9;
    border-color: #0d0d0d;
    color: #dd2828;
    padding: 14px 39px;
    &:hover {
      background-color: #e3e3e3;
    
    }
  }
  .addButtonAdd:last-of-type {
    margin-right: 0;
  }

  .inputAvt {
    display: flex;

    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .imputImage {
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid;
    margin-left: 5vw;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .iteamInputImage {
    width: 30vw;
    display: flex;
  }
  .iteamInputImage input {
    margintop: 8;
    right: 0;
    width: 93;
    left: 0;
    padding: 0;
  }
`;
