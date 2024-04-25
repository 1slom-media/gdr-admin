import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Tooltip, Dropdown, Space, Switch } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { Layout, Menu} from "antd";
import "./styles.css";
import logo from "../../assets/image/logo-gerb-white.svg";
import { adminGet } from "../../redux/admin_add/index";
const { Header, Sider, Footer, Content } = Layout;

const VerticalSidebar = ({ children, setIsChecked }) => {
  const emailSave = window.localStorage.getItem("emails");
  const text = <span>Выйти</span>;
  const dispatch = useDispatch();
  const adminGetState = useSelector((state) => state.adminadd);
  const rows = adminGetState.userGet?.data;
  const filterData = rows.filter((elem) => elem.email === emailSave);
  useEffect(() => {
    dispatch(adminGet());
  }, [dispatch]);
  const [collapsed, setCollapsed] = useState(false);
  const cookies = new Cookies();
  const pathname = useLocation();
  const navigate = useNavigate();
  const HandleLogout = () => {
    cookies.remove("token");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, "500");
  };

  const onChange = () => {
    window.localStorage.setItem("checked", "false");
    window.location.reload();
  };

  const items = [
    {
      label: (
        <Tooltip title={text}>
          <button className="tool_btns" onClick={HandleLogout}>
            <span>Выйти</span>
            <LoginOutlined />
          </button>
        </Tooltip>
      ),
      key: "0",
    },
    {
      label: (
        <div className="switch_wrapp">
          {" "}
          <span>Боковая панель</span>{" "}
          <Switch defaultChecked onChange={onChange} />
        </div>
      ),
      key: "1",
    },
  ];

  return (
    <Layout style={{ height: "100vh", position: "relative" }}>
      <Sider
        style={{ backgroundColor: "#5A79E5" }}
        width={240}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserAddOutlined />,
              label: (
                <NavLink
                  to={"/adminadd"}
                  className={pathname === "/adminadd" ? "active" : ""}
                >
                  <span class="title">Админ</span>
                </NavLink>
              ),
            },
            {
              key: "2",
              icon: <UsergroupAddOutlined />,
              label: (
                <NavLink to={"/contact"}>
                  <span class="title">Заявки</span>
                </NavLink>
              ),
            },
            {
              key: "3",
              icon: <ShoppingCartOutlined />,
              label: (
                <NavLink
                  to={"/blog"}
                  className={pathname === "/blog" ? "active" : ""}
                >
                  <span class="title">Блог</span>
                </NavLink>
              ),
            }
          ]}
          style={{ backgroundColor: "#eb3000" }}
        />
        <div className="logo_wrapp">
          <img src={logo} alt="" />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: "#eb3000",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="logos">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <div className="left">
            <div className="icons"></div>
            <div className="profile">
              <Dropdown
                style={{ marginLeft: "10px" }}
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <button onClick={(e) => e.preventDefault()}>
                  <Space>
                    <SettingOutlined />
                    <span className="drop_span">Настройки</span>
                  </Space>
                </button>
              </Dropdown>
              <UserOutlined className="user-icon" />
              <div className="profile-right">
                {filterData.map((elem) => (
                  <>
                    <p className="profile_name">{elem.name}</p>
                    <p className="profile_email">{elem.email}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#EEEFF5",
            overflowY: "auto",
            height: "85vh",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: "transparent",
            color: "#eb3000",
            fontWeight: "500",
            padding: "10px 20px",
          }}
        >
          ©2023 Created by Islombek
        </Footer>
      </Layout>
    </Layout>
  );
};
export default VerticalSidebar;
