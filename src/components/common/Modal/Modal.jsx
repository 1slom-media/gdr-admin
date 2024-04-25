import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";



function ModalCommon({ open, handleClose, children , width, height, styles }){
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width,
    bgcolor: "rgba(40, 40, 40, 0.6)",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.05)",
    borderRadius : "20px",
    // overflowY: 'auto',
    height: height ,
    p: 2,
    backdropFilter: "blur(5px)",
    zIndex: "1"
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={styles}>{children}</Box>
      </Modal>
    </>
  );
};

export default ModalCommon;
