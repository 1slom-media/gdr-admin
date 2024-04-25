import React, { useRef, useState } from "react";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { useDispatch } from "react-redux";
import { adminAdd, adminGet } from "../../../redux/admin_add";
import { Wrapper } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Input } from "antd";
import "./styles.css";
import InputCommon from "../../common/input";
import { useSelector } from "react-redux";
function AdminAddForm({ Open, HandleClose }) {
  const dispatch = useDispatch();
  const [emails, setEmails] = useState();
  const [passwords, setPasswords] = useState()
  const [names, setNames] = useState()
  const addAdmin = useSelector((state) => state.adminadd);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const email = emails;
    const password = passwords;
    const name = names;
    await dispatch(adminAdd({ email, password, name }));
    dispatch(adminGet());
    HandleClose();
    window.location.reload()
  };
  // if (addAdmin.AddPost.Success == true) {
  //   window.location.reload();
  // }
  return (
    <ModalCommon width={500} height={350} open={Open} handleClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <div>
            <h3>Админ добавить</h3>
            <div className="input_wrap">
              <Row className="row">
                <Col className="col" lg={12}>
                  <InputCommon
                    type="name"
                    placeholder="имя"
                    required
                    onChange={(e) => setNames(e.currentTarget.value)}
                  />
                </Col>
                <Col className="col" lg={12}>
                  <InputCommon
                    type="email"
                    placeholder="эл. почта.."
                    required
                    onChange={(e) => setEmails(e.currentTarget.value)}
                  />
                </Col>
                <Col className="col" lg={12}>
                  <Input.Password
                    style={{ padding: "0" }}
                    onChange={(e) => setPasswords(e.currentTarget.value)}
                    required
                    placeholder="Пароль"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Col>
              </Row>
              {addAdmin.AddPost.Error == true ? (
                <p style={{ color: "red" }}>Должно быть 8 или более 16 чисел</p>
              ) : null}
            </div>
          </div>
          <CommonBtn
            type={"submit"}
            style={{
              padding: "12px 40px",
              border: "2px solid #fff",
            }}
          >
            Добавить
          </CommonBtn>
        </Wrapper>
      </>
    </ModalCommon>
  );
}

export default AdminAddForm;
