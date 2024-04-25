import React, { useEffect, useState } from "react";
import CommonBtn from "../../common/CommonBtn";
import ModalCommon from "../../common/Modal/Modal";
import { useDispatch } from "react-redux";
import {
  BlogPost,
  BlogGet,
  UploadImage,
} from "../../../redux/blog";
import { Wrapper } from "./styled-index";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";
import { Spin, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import InputCommon from "../../common/input";
import "./styles.css";

function CategoryAddForm({ Open, HandleClose }) {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 20,
        color: "#fff",
      }}
      spin
    />
  );
  const dispatch = useDispatch();
  const [titleUz, setTitleUz] = useState();
  const [titleRu, setTitleRu] = useState();
  const [titleEn, setTitleEn] = useState();
  const [descriptionUz, setDescriptionUz] = useState();
  const [descriptionRu, setDescriptionRu] = useState();
  const [descriptionEn, setDescriptionEn] = useState();
  const [link, setLink] = useState();
  const [type, setType] = useState();
  const dataProject = useSelector(
    (state) => state.blog?.uploadProjects
  );
  useEffect(() => {
    dispatch(BlogGet());
  }, [dispatch]);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      BlogPost({
        title_uz: titleUz,
        title_ru: titleRu,
        title_en: titleEn,
        description_uz: descriptionUz,
        description_ru: descriptionRu,
        description_en: descriptionEn,
        link:link,
        type:type,
        image: dataProject?.data
      })
    );
    dispatch(BlogGet());
    HandleClose();
    // window.location.reload();
  };

  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
      <>
        <Wrapper onSubmit={HandleSubmit}>
          <h3>Добавить блог</h3>
          <div className="input_wrap">
            <div className="scrool">
              <Row className="row">
                <Col className="col" lg={6}>
                  {dataProject.Loading === true ? (
                    <div className="spinss">
                      <Spin indicator={antIcon} />
                    </div>
                  ) : dataProject.Success === true ? (
                    <Image
                      // width="100%"
                      height="187.54px"
                      style={{
                        aspectRatio: "16 / 9",
                        borderRadius: "20px",
                        zIndex: "99999999",
                      }}
                      src={dataProject.data}
                    />
                  ) : (
                    <div className="none_img">
                      <i class="bx bxs-image"></i>
                    </div>
                  )}
                  <hr />

                  <div className="infor_box">
                    <p style={{ color: "#fff" }}>
                      <span>Формат: </span>PNG, JPEG, JPG, SVG. Рекомендуемое
                      разрешение <span>1920×1080</span> или{" "}
                      <span>1280×720</span>
                    </p>
                    <p style={{ color: "#fff" }}>
                      {" "}
                      <span>Размер: </span>размер файла не должен превышать 5 MB
                    </p>
                  </div>
                  <select defaultValue={"recipe"} onChange={(e)=>setType(e.target.value)}>
                    <option value="recipe">Recipe</option>
                    <option value="blog">Blog</option>
                  </select>
                </Col>
                <Col className="col" lg={6}>
                  {dataProject.Loading === true ? (
                    <div className="spins">
                      <Spin indicator={antIcon} />
                    </div>
                  ) : (
                    <>
                      <input type="file" id="file" onChange={HandleChange} />
                      <label for="file" class="custom-file-upload">
                        <span className="span-download">
                          <ion-icon name="cloud-download-outline"></ion-icon>
                          <span>Загрузить фото</span>
                        </span>
                      </label>
                    </>
                  )}
                  <InputCommon
                    type="text"
                    placeholder="новости узб..."
                    required
                    onChange={(e) => setTitleUz(e.currentTarget.value)}
                  />
                  <InputCommon
                    type="text"
                    placeholder="новости русский..."
                    required
                    onChange={(e) => setTitleRu(e.currentTarget.value)}
                  />
                  <InputCommon
                    type="text"
                    placeholder="новости aнглийский..."
                    required
                    onChange={(e) => setTitleEn(e.currentTarget.value)}
                  />
                  <InputCommon
                    type="text"
                    placeholder="описание узб..."
                    required
                    onChange={(e) => setDescriptionUz(e.currentTarget.value)}
                  />
                  <InputCommon
                    type="text"
                    placeholder="описание русский..."
                    required
                    onChange={(e) => setDescriptionRu(e.currentTarget.value)}
                  />
                  <InputCommon
                    type="text"
                    placeholder="описание aнглийский..."
                    required
                    onChange={(e) => setDescriptionEn(e.currentTarget.value)}
                  />
                  
                  <InputCommon
                    type="text"
                    placeholder="ссылки..."
                    onChange={(e) => setLink(e.currentTarget.value)}
                  /> 
                  <CommonBtn
                    type="submit"
                    style={{
                      margin: "20px auto 0 auto",
                      padding: "12px 40px",
                      border: "2px solid #fff",
                      background: "#03544c",
                    }}
                  >
                    Добавить
                  </CommonBtn>
                </Col>
              </Row>
            </div>
          </div>
        </Wrapper>
      </>
    </ModalCommon>
  );
}

export default CategoryAddForm;
