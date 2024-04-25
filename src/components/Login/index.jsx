import React, { useState } from "react";
import { GlobalStyleLogin, Wrapper } from "./styled-index";
import { useDispatch } from "react-redux";
import { adminAuth } from "../../redux/login/authSlice";
import { useSelector } from "react-redux";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./styles.css";
import CommonButton from "../../components/common/button/index";
import logo from "../../assets/image/logo-gerb-white.svg";
import InputCommon from "../common/input";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const LoginComponent = () => {
  const [passwordRef, setPasswordRef] = useState();
  const [emailRef, setEmailRef] = useState();
  const dispatch = useDispatch();
  const token=cookies.get("token")
  const admin = useSelector((state) => state);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef;
    const password = passwordRef;
    window.localStorage.setItem("emails", email);
    window.localStorage.setItem("pass", password);
    await dispatch(adminAuth({ email, password }));
  };
  if (token) {
    window.location.href = "/adminadd"
  }

  return (
    <>
      <GlobalStyleLogin />
      <div className="login_section">
        <Wrapper>
          <div className="login_wrapper">
            <div className="login_left_wrap">
              <div className="logo_box">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="login_right_wrap">
              <div className="login-box">
                <div className="titles_box">
                  <h2>Вход в систему</h2>
                </div>
                <form onSubmit={HandleSubmit}>
                  <div className="user-box">
                    <label htmlFor="email">Эл. почта</label>
                    <InputCommon
                      placeholder="example@gmail.com"
                      type="email"
                      required
                      onChange={(e) => setEmailRef(e.currentTarget.value)}
                    />
                  </div>
                  <div className="user-box">
                    <label htmlFor="password">Пароль</label>
                    <Input.Password
                      onChange={(e) => setPasswordRef(e.currentTarget.value)}
                      required
                      style={{ padding: "0" }}
                      placeholder="Пароль"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </div>
                  {admin.admin?.Error === true ? (
                    <p style={{ color: "red" }}>
                      Электронная почта или пароль неверны
                    </p>
                  ) : null}
                  <div className="btnss">
                    <CommonButton
                      style={{ color: "#fff", width: "100%" }}
                      type="submit"
                    >
                      Вход
                    </CommonButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default LoginComponent;
