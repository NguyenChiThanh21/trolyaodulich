import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function LoginForm({ isLogin }) {
  const defaultFormData = {
    gmail: "",
    taikhoan: "",
    password: "",
    repass: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.repass) {
      alert("Password does not match");
    } else {
      fetch("https://64f195d50e1e60602d23f89d.mockapi.io/qlailap/thietbi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            alert("Đăng ký thành công");
            setFormData(defaultFormData);
            window.location.href = "/";
          } else {
            throw new Error("Registration failed");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Registration failed");
        });
    }
  }
  // const handleOnDangNhap = () => {
  //   window.location.href = "/";
  // };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword2, setShowPassword2] = useState(false);
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <Login>
      {isLogin && (
        <div>
          {/* <input placeholder="Điền thông tin" />
          <input placeholder="Mật khẩu" type="password"/> */}
        </div>
      )}
      {!isLogin && (
        <div>
          <input
            placeholder="Gmail"
            type="text"
            id="gmail"
            name="gmail"
            className="form-control"
            required
            onChange={handleOnChange}
            value={formData.gmail}
          />
          <input
            placeholder="Tên tài khoản"
            type="taikhoan"
            id="taikhoan"
            name="taikhoan"
            className="form-control"
            required
            onChange={handleOnChange}
            value={formData.taikhoan}
          />
          <div className="input-ShowMK">
          <input
            placeholder="Mật khẩu"
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            className="form-control"
            required
            onChange={handleOnChange}
            value={formData.password}
          />
          <span className="eye-icon" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <FaEye />
            ) : (
              <FaEyeSlash />
            )}
          </span>
          </div>
          <div className="input-ShowMK">

          <input
            placeholder="Nhập lại mật khẩu"
            type={showPassword2 ? 'text' : 'password'}
            id="repass"
            name="repass"
            className="form-control"
            required
            onChange={handleOnChange}
            value={formData.repass}
          />
          <span className="eye-icon" onClick={togglePasswordVisibility2}>
            {showPassword2 ? (
              <FaEye />
            ) : (
              <FaEyeSlash />
            )}
          </span>
          </div>
        </div>
      )}

      <Button onClick={handleOnSubmit} style={{ backGroundColor: "#368E4F" }}>
        Đăng ký{" "}
      </Button>
    </Login>
  );
}

export default LoginForm;
const Login = styled.div`
  input {
    width: 367px;
    height: 60px;
    margin-bottom: 15px;
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
  .eye-icon {
    position: absolute;
    
    right: 10px;
    transform: translateX(-230px) translateY(25px);
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  
  .eye-icon i {
    font-size: 17px;
    width: 17px;
    color: #c0c0c0;
  }
`;
