import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";
import { Row, Col } from "react-grid-system";
import CommonBtn from "../../common/CommonBtn";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminPut, adminGet } from "../../../redux/admin_add/index";
import { Input } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import InputCommon from "../../common/input";

function Put({ openPut, handleClosePut, put_id }) {
  const ids = put_id;
  const dispatch = useDispatch();
  const [emails, setEmails] = useState();
  const [passwords, setPasswords] = useState()
  const [names, setNames] = useState()
  const addAdmin = useSelector((state) => state.adminadd);
  const getAdmin = useSelector((state) => state.adminadd.userGet.data);
  const HandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: emails,
      password: passwords,
      name: names,
    };
    dispatch(adminPut({ body, id: ids }));
    handleClosePut()
  };
  // if (addAdmin.AddPut.Success == true) {
  //   window.location.reload();
  // }
  return (
    <>
      <ModalCommon
        width={500}
        height={350}
        open={openPut}
        handleClose={handleClosePut}
      >
        <Wrapper onSubmit={HandleSubmit}>
          <h3> Админ изменить</h3>
          <div className="input_wrap">
            <Row className="row">
              {getAdmin.map((elem) =>
                elem.id == ids ? (
                  <>
                    <Col className="col" lg={12}>
                      <InputCommon
                        type="name"
                        placeholder={elem.name}
                        onChange={(e) => setNames(e.currentTarget.value)}
                      />
                    </Col>
                    <Col className="col" lg={12}>
                      <InputCommon
                        type="email"
                        placeholder={elem.email}
                        onChange={(e) => setEmails(e.currentTarget.value)}
                      />
                    </Col>
                    <Col className="col" lg={12}>
                      <Input.Password
                        onChange={(e) => setPasswords(e.currentTarget.value)}
                        placeholder={elem.password}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      />
                    </Col>
                  </>
                ) : null
              )}
            </Row>
            {addAdmin.AddPut.Error == true ? (
              <p style={{ color: "red" }}>Должно быть 8 или более 16 чисел</p>
            ) : null}
          </div>
          <CommonBtn
            type="submit"
            style={{
              padding: "12px 40px",
              border: "2px solid #fff",
            }}
          >
            Изменить
          </CommonBtn>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default Put;
