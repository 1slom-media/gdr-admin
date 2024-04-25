import * as React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import TableCommon from "../../common/table";
import { Image, Popover, Space } from "antd";

export default function TableAdd({ HandleDelete, onClickPut, selectId }) {
  const blogGetState = useSelector((state) => state.blog.blogGet?.data);

  const data = blogGetState?.map((elem, index) => ({
    key: elem.id,
    data: index + 1,
    Имяблогрус: <span className="curson">{elem.title_ru}</span>,
    Имяблогуз: <span className="curson">{elem.title_uz}</span>,
    Имяблоганг: <span className="curson">{elem.title_en}</span>,
    Фото: (
      <Image
        width={60}
        height="100%"
        style={{
          aspectRatio: "1 / 1",
          borderRadius: "20px",
          objectFit: "cover",
        }}
        src={elem.image}
      />
    ),
    блогописаниеуз: <span className="curson">{elem.description_uz}</span>,
    блогописаниерус: <span className="curson">{elem.description_ru}</span>,
    блогописаниеанг: <span className="curson">{elem.description_en}</span>,
    ссылки: <span className="curson">{elem.link}</span>,
    тип: <span className="curson">{elem.type}</span>,
    Действие: (
      <div className="boxx">
        <div className="btn-wraps">
          <button onClick={onClickPut} id={elem.id}>
            <i className="bx bx-message-square-edit"></i>
          </button>
        </div>

        <Space wrap>
          <Popover
            trigger="click"
            placement="rightBottom"
            content={
              <div className="content_delete_box">
                <p>Вы уверены, что хотите удалить эту категория?</p>
                <p>
                  При удалении категорий вся информация, принадлежащая <br />{" "}
                  данной категории, будет удалена безвозвратно
                </p>
                <div className="btn_wrap_delete">
                  <button
                    onClick={HandleDelete}
                    id={elem.id}
                    className="yes_btn"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            }
            title={
              <div className="delete_box">
                <i className="bx bxs-error-circle"></i>
                <span>
                  Удалить категорию <span>{elem.title_ru}</span>
                </span>
              </div>
            }
          >
            <div className="btn-wrap">
              <button id={elem.id}>
                <i className="bx bxs-trash"></i>
              </button>
            </div>
          </Popover>
        </Space>
      </div>
    ),
  }));

  const columns = [
    {
      title: "№",
      dataIndex: "data",
      key: "data",
      fixed: "left",
      align: "center",
      width: "50px",
    },
    {
      title: "Имя ру",
      dataIndex: "Имяблогрус",
      key: "Имяблогрус",
      // fixed: "left",
      width: "auto",
      align: "center",
    },
    {
      title: "Имя уз",
      dataIndex: "Имяблогуз",
      key: "Имяблогуз",
      // fixed: "left",
      width: "auto",
      align: "center",
    },
    {
      title: "Имя анг",
      dataIndex: "Имяблоганг",
      key: "Имяблоганг",
      // fixed: "left",
      width: "auto",
      align: "center",
    },
    {
      title: "описание рус",
      dataIndex: "блогописаниерус",
      key: "блогописаниерус",
      // fixed: "left",
      width: "auto",
      align: "center",
    },
    {
      title: "описание уз",
      dataIndex: "блогописаниеуз",
      key: "блогописаниеуз",
      // fixed: "left",
      width: "auto",
      align: "center",
    },
    {
      title: "описание анг",
      dataIndex: "блогописаниеанг",
      key: "блогописаниеанг",
      // fixed: "left",
      width: "auto",
      align: "center",
    },
    {
      title: "тип",
      dataIndex: "тип",
      key: "тип",
      // fixed: "left",
      width: "auto",
      align: "center",
    },
    {
      title: "ссылки",
      dataIndex: "ссылки",
      key: "ссылки",
      // fixed: "left",
      align: "center",
      width: 100,
    },
    {
      title: "Фото",
      dataIndex: "Фото",
      key: "Фото",
      // fixed: "left",
      align: "center",
    },
    {
      title: "Действие",
      dataIndex: "Действие",
      key: "Действие",
      fixed: "right",
      align: "center",
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
          x: 1500,
          y: 320,
        }}
      />
    </>
  );
}
