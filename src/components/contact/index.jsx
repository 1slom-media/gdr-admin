import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DeleteContact, GetContact } from "../../redux/contact/index";
import Delete from "./delete";
import TableAdd from "./table";
import { useSelector } from "react-redux";
function ContactComponent() {
  const contactdelete = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const [contactId, setContactId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setContactId(e.currentTarget.id);
    setOpenDelete(true);
  };

  useEffect(() => {
    dispatch(GetContact());
  }, []);

  const HandleDelete = async (e) => {
    await dispatch(DeleteContact(e.currentTarget.id));
    dispatch(GetContact());
  };
  if (contactdelete.deleteContact.Success == true) {
    window.location.reload();
  }

  return (
    <>
      <TableAdd onClickDelete={handleDeleteModal} HandleDelete={HandleDelete} />
      <Delete
        contactId={contactId}
        HandleDelete={HandleDelete}
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
      />
    </>
  );
}

export default ContactComponent;
