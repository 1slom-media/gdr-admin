import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { BlogGet } from "../../redux/blog/index";
import { useDispatch } from "react-redux";
import BlogComponent from "../../components/blog";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";

function Blog() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BlogGet());
  }, []);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    window.localStorage.getItem("checked") == 'false' ? <HorizontalSidebar>
      <WrapperContainer style={{ marginTop: "112px" }}>
        <HeaderTopCommon
          title={"Блог"}
          onClick={handleOpen}
          textBtn={"Добавить Блог"}
        />
        <BlogComponent handleClose={handleClose} open={open} />
      </WrapperContainer>

    </HorizontalSidebar> : <VerticalSidebar>
      <WrapperContainer>
        <HeaderTopCommon
          title={"Блог"}
          onClick={handleOpen}
          textBtn={"Добавить Блог"}
        />
        <BlogComponent handleClose={handleClose} open={open} />
      </WrapperContainer>

    </VerticalSidebar>
  );
}
export default Blog;
