import ModalCommon from "../../common/Modal/Modal";
import { Wrapper } from "./styled-index";
import { Row, Col } from "react-grid-system";
import "./styles.css";

function Delete({ openDelete, handleCloseDelete, HandleDelete }) {
  return (
    <>
      <ModalCommon
        width={340}
        open={openDelete}
        handleClose={handleCloseDelete}
      >
        <Wrapper>
          <h3>Вы уверены, что хотите удалить данные?</h3>
          <div className="Buttons">
            <Row className="row">
              <Col className="col" lg={6}>
                <button onClick={HandleDelete}>
                  {" "}
                  <i class="bx bx-check"></i> Да
                </button>
              </Col>
              <Col className="col" lg={6}>
                <button onClick={handleCloseDelete}>
                  {" "}
                  <i class="bx bx-x"></i> Нет
                </button>
              </Col>
            </Row>
          </div>
        </Wrapper>
      </ModalCommon>
    </>
  );
}
export default Delete;
