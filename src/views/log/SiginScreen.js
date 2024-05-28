import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../../contans/styles/log.scss";
import bachgroundLog from "../../assets/img/bachgroundLog.png";
import { ImMobile } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/img/logo.jpg";
import HeaderLog from "../../components/log/HeaderLog";
import ItemLeft from "../../components/log/ItemLeft";
import ItemRight from "../../components/log/ItemRight";

import Button from "../../components/ui/Button";
// import logoItem from "../../assets/img/logoItem.png";
import ReactSelect from "react-select";
const SiginScreen = () => {
  function onClickForgotPass() {}
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handlePhoneChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  
  const handleDangNhapAdmin = () => {
    //đăng nhập liên kết với backend
    fetch("http://localhost:3005/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (username === "0333615016" && password === "123456") {
          const token = data.token;
          localStorage.setItem("token", token);
          window.location.href = "/homeAccount";
        } else {
          console.log("Đăng nhập không thành công");
        }
      })
      .catch((error) => {
        // Xử lý lỗi trong quá trình gọi API
        console.error("Lỗi gọi API:", error);
      });
  };

  
const handleSubmit = async (event) => {
 
    //đăng nhập liên kết với backend
    // fetch('http://localhost:3005/user/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     phone: phone,
    //     password: password,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (phone === '0333615016' && password === '123456') {
    //       const token = data.token;
    //       localStorage.setItem('token', token);
    //       window.location.href = '/homeAccount';

    //     } else {
    //       console.log('Đăng nhập không thành công');
    //     }
    //   })
    //   .catch((error) => {
    //     // Xử lý lỗi trong quá trình gọi API
    //     console.error('Lỗi gọi API:', error);
    //   });



  if (!username || !password) {
    // Kiểm tra xem trường username và password có được nhập hay không
    setLoginError("Vui lòng nhập tên đăng nhập và mật khẩu.");
    alert("Vui lòng nhập đầy đủ thông tin.")
    return;
  }

  if (username === "admin" && password === "admin") {
    window.location.href = "/homeAccount";
    return;
  }

  if (username === "chithanh" && password === "chithanh") {
    window.location.href = "/surveyScreen";
    return;
  }

  const response = await fetch(
    "https://64f195d50e1e60602d23f89d.mockapi.io/qlailap/thietbi"
  );
  const users = await response.json();

  // Kiểm tra thông tin đăng nhập với danh sách người dùng
  const foundUser = users.find(
    (user) => user.TaiKhoan === username && user.MatKhau === password
  );

  if (!foundUser) {
    // Đăng nhập thành công
    setLoginError("");
    window.location.href = "/surveyScreen";
    // Tiếp tục xử lý sau khi đăng nhập thành công
  } else {
    // Đăng nhập không thành công
    setLoginError("Thông tin đăng nhập không chính xác. Vui lòng thử lại.");
    alert("Thông tin đăng nhập không chính xác. Vui lòng thử lại.");
  }
};

  return (
    <Sigin>
      <div className="container">
        <HeaderLog logo={logo} />
        <div className="body">
          <img src={bachgroundLog} className="image" alt="bachground" />
          <div className="body-item">
            <ItemLeft title="Du Lịch Thông Minh" />
            <ItemRight title="Đăng nhập">
              {/* <LoginForm isLogin onClick={onClickForgotPass} /> */}
              <div>
                <input
                  type="text"
                  placeholder="Điền thông tin"
                  onChange={handleUsernameChange}
                  id="username"
                  name="username"
                  value={username}
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="Container_LuuMK">
                <div className="LuuMK">
                <input type="checkbox" />
                <p style={{minWidth:"fit-content"}}>Lưu mật khẩu</p>
              </div>
                <div className="QuenMK">
                  <p style={{fontWeight:"bold", cursor:"pointer"}}>Quên mật khẩu</p>
                </div>
              </div>
              

              <div
                className="Button-Log"
                onClick={() => {
                  handleSubmit();
                  handleDangNhapAdmin();
                }}
              >
                Đăng nhập
              </div>

              <p
                style={{
                  marginTop: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Đăng ký
              </p>
             
              <div className="register">
                <div className="register_button">
                  <Link to="/siginPhoneScreen">
                    <ImMobile size={30} />
                  </Link>
                </div>
                <div className="register_button">
                  <Link to="/signupEmailScreen">
                    <FcGoogle size={30} />
                  </Link>
                </div>
              </div>
              <div className="line"></div>
            </ItemRight>
          </div>
        </div>
      </div>{" "}
    </Sigin>
  );
};

export default SiginScreen;
const Sigin = styled.div`
  input {
    width: 367px;
    height: 60px;
    margin-bottom: 20px;
    padding: 1.5vh 0;
    border-radius: 8px;
    border: 1px solid #f0efff;
    overflow: hidden;
    background-color: #f0efff;
    padding-left: 20px;
  }
  p {
    fontweight: "bold";
    textalign: "right";
    width: "100%";
    margin: 0;
    margintop: -8;
  }
  .Button-Log {
    display: flex;
    width: 367px;
    height: 60px;
    color: #fff;
    background-color: #368e4f;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .Container_LuuMK{
    display: flex;
    flex-direction: row;
    width: 367px;
    height: 40px;
    margin: 20px 0px;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
  }
  .LuuMK{
    display: flex;
    flex-direction: row;
    width: 43%;
    align-items: center;
    margin-left: -14px;
    
  }
  input[type="checkbox"] {
    transform: scale(0.4); /* Tăng kích thước nút checkbox lên 1.5 lần */
    width: 100%;
    overflow: hidden;
    margin-bottom: 0;
    border-radius: 8px;
  }
`;
