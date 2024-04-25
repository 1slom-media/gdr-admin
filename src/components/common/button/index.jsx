import React from "react";
import { Btn } from "./styled-index";
import "./style.css";
import { motion } from "framer-motion";
import { style } from "@mui/system";

function CommonButton({ children, href, style, onClick }) {
  const buttonAnime = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5 },
    }),
  };
  return (
    <motion.button
      custom={5}
      variants={buttonAnime}
      className="btn-anime"
      style={style}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default CommonButton;
