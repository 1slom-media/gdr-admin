import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminDelete, adminGet } from "../../redux/admin_add";
import Delete from "./delete";
import AdminAddForm from "./post";
import Put from "./put";
import TableAdd from "./table";

function AdminAddComponent({ open, handleClose }) {
  const dispatch = useDispatch();
  const [adminId, setAdminId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setAdminId(e.currentTarget.id);
    setOpenDelete(true);
  };
  const [openPut, setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false);
  const handlePutModal = (e) => {
    setAdminId(e.currentTarget.id);
    setOpenPut(true);
  };
  const HandleDelete = async (e) => {
    await dispatch(adminDelete(e.currentTarget.id));
    dispatch(adminGet());
    handleCloseDelete();
  };
  return (
    <>
      <AdminAddForm Open={open} HandleClose={handleClose} />
      <TableAdd onClickDelete={handleDeleteModal} HandleDelete={HandleDelete} onClickPut={handlePutModal} />
      <Delete
        // HandleDelete={HandleDelete}
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
      />
      <Put
        // HandlePut={HandlePut}
        put_id={adminId}
        openPut={openPut}
        handleClosePut={handleClosePut}
      />
    </>
  );
}

export default AdminAddComponent;
