import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { adminGet } from "../../redux/admin_add/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar";
import AdminAddComponent from "../../components/admin_add";
import { motion } from "framer-motion";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";
function AddAdmin() {
  const adminGetState = useSelector((state) => state.adminadd);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminGet());
  }, []);

  if (adminGetState.AdminDelete.Success === true) {
    window.location.reload();
  }
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    window.localStorage.getItem("checked") == 'false' ? <HorizontalSidebar>
      <WrapperContainer style={{ marginTop: "112px" }}>
        <HeaderTopCommon
          title={"Админ"}
          onClick={handleOpen}
          textBtn={"Админ добавить"}
        />
        <AdminAddComponent handleClose={handleClose} open={open} />
      </WrapperContainer>

    </HorizontalSidebar> : <VerticalSidebar>
      <WrapperContainer>
        <HeaderTopCommon
          title={"Админ"}
          onClick={handleOpen}
          textBtn={"Админ добавить"}
        />

        <AdminAddComponent handleClose={handleClose} open={open} />
      
      </WrapperContainer>

    </VerticalSidebar>
  );
}
export default AddAdmin;
