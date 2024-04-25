import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostContact, GetContact } from "../../../redux/contact";
import TableCommon from "../../common/table";
import { Popover, Space } from 'antd';

import './styles.css'

export default function TableAdd({ onClickDelete, HandleDelete }) {

  const ContactGetState = useSelector(
    (state) => state.contact.getContact?.Data
  );

  const contactPostState = useSelector(
    (state) => state.contact
  );
  const dispatch = useDispatch();
  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  };

  const data = [];
  ContactGetState.map((elem, index) => {
    data.push({
      data: index + 1,
      key: elem.id,
      Имя: elem.name,
      Телефонныйномер: elem.phone_number,
      Сообщение:elem.message,
      Времяденьмесяцгод: (
        <div className="date_wrap">
          <span className='time_span'>{elem.createdAt.slice(11, 16)}</span>
          <span className="date_span">{DateFormat(elem.createdAt)}</span>
        </div>
      ),
      Удалить: (
        <Space wrap>
          <Popover
            trigger="click"
            placement="rightBottom"
            content={
              <div className="content_delete_box">
                <p>Вы уверены, что хотите удалить эту заявка?</p>
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
                <span>Удалите заявка <span>{elem.phone_number}</span></span>
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

      ),
    });
  });

  React.useEffect(() => {
    dispatch(GetContact());
  }, []);

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
      fixed: "left",
    },
    {
      title: "Телефонный номер",
      dataIndex: "Телефонныйномер",
      key: "Телефонныйномер",
    },
    {
      title: "Сообщение",
      dataIndex: "Сообщение",
      key: "Сообщение",
    },
    {
      title: "Время/день/месяц/год",
      dataIndex: "Времяденьмесяцгод",
      key: "Времяденьмесяцгод",
    },
    {
      title: "Удалить",
      dataIndex: "Удалить",
      key: "Удалить",
      fixed: "right",
      align: 'center'
    },
  ];
  return (
    <>
      <TableCommon
        bordered
        columns={columns}
        data={data}
        pagination={false}
        scroll={{
          y: 330,
        }}
      />
    </>
  );
}
