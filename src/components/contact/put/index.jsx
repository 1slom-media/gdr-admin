import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPartner,
  PutPartner,
  UploadImage,
} from "../../../redux/partner/index";
import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";

function Put({ openPut, handleClosePut, HandlePut }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.partner);
  const dataPartner = useSelector((state) => state.partner.uploadPartner);
  const HandleChange = async (e) => {
    await dispatch(UploadImage(e));
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      partners_img: dataPartner.data,
    };
    await dispatch(PutPartner({ body, id: HandlePut }));
    dispatch(GetPartner());
    handleClosePut();
  };
  return (
    <>
      <ModalCommon width={340} open={openPut} handleClose={handleClosePut}>
        <Wrapper>
          <h3>изменить</h3>
          <form onSubmit={HandleSubmit}>
            {data.getPartner?.Data.map((elem) =>
              elem.partners_id == HandlePut ? (
                <>
                  {dataPartner.Loading == true ? (
                    <span className="loading">loading...</span>
                  ) : (
                    <>
                      <input type="file" id="file" onChange={HandleChange} />
                      <label for="file" class="custom-file-upload">
                        <span className="span-download">
                          <ion-icon name="cloud-download-outline"></ion-icon>
                        </span>
                        загрузить изображение
                      </label>
                    </>
                  )}
                  <button type="submit" value={elem.tube_id}>
                    изменить
                  </button>
                </>
              ) : null
            )}
          </form>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default Put;
