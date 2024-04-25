import * as React from "react";
import { useSelector } from "react-redux";
import TableCommon from "../../common/table";
import "./styles.css"
import { Popover, Space } from 'antd';

export default function TableAdd({ HandleDelete, onClickPut }) {
  const adminGetState = useSelector((state) => state.adminadd);
  const rows = adminGetState.userGet?.data;

  const data = [];
  rows.map((elem, index) => {
    data.push({
      data: index + 1,
      key: elem.id,
      Имя: elem.name,
      Элпочта: elem.email,
      // Пароль: elem.password,
      Удалить: (
        <div className="boxx">
          <Space wrap>
            <Popover
              trigger="click"
              placement="rightBottom"
              content={
                <div className="content_delete_box">
                  <p>Вы уверены, что хотите удалить эту админ?</p>
                  <div className="btn_wrap_delete">
                    <button onClick={HandleDelete} id={elem.id} className="yes_btn">
                      Удалить
                    </button>
                  </div>
                </div>
              }
              title={
                <div className="delete_box">
                  <i class='bx bxs-error-circle'></i>
                  <span>Удалите админ <span>{elem.name}</span></span>
                </div>
              }
            >
              <div className="btn-wrap">
                <button id={elem.id}>
                  <i class="bx bxs-trash"></i>
                </button>
              </div>
            </Popover>
          </Space>
        </div>


      ),
    });
  });

  const columns = [
    {
      title: "№",
      dataIndex: "data",
      key: "data",
      width: 50,
      align: "center",
    },
    {
      title: "Имя",
      dataIndex: "Имя",
      key: "Имя",
    },
    {
      title: "Эл. почта",
      dataIndex: "Элпочта",
      key: "Элпочта",
    },
    // {
    //   title: "Пароль",
    //   dataIndex: "Пароль",
    //   key: "Пароль",
    // },
    {
      title: "Удалить",
      dataIndex: "Удалить",
      key: "Удалить",
      align: "center",
    },
  ];
  return (
    <TableCommon
      bordered
      columns={columns}
      data={data}
      pagination={false}
      scroll={{
        y: 330,
      }}
    />
  );
}
