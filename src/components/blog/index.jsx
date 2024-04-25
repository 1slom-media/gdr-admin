import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogDelete} from "../../redux/blog/index";
import Delete from "./delete";
import CategoryAddForm from "./post";
import Put from "./put";
import TableAdd from "./table";
function BlogComponent({ open, handleClose }) {
  const blogdelete = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [blogId, setBlogId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setBlogId(e.target.id);
    setOpenDelete(true);
  };
  const [openPut, setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false);
  const handlePutModal = (e) => {
    setBlogId(e.currentTarget.id);
    setOpenPut(true);
  };
  const HandleDelete = (e) => {
    dispatch(BlogDelete(e.currentTarget.id));
  };
  if (blogdelete.blogDelete?.Success === true) {
    window.location.reload();
  }
  return (
    <>
      <CategoryAddForm Open={open} HandleClose={handleClose} />
      <TableAdd onClickDelete={handleDeleteModal} HandleDelete={HandleDelete} onClickPut={handlePutModal} />
      <Delete
        HandleDelete={HandleDelete}
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
      />
      <Put
        put_id={blogId}
        openPut={openPut}
        handleClosePut={handleClosePut}
      />
    </>
  );
}

export default BlogComponent;
