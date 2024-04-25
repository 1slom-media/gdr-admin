import React from "react";
import { Button } from "./styled-index";
import { motion } from "framer-motion";
import './style.css'

const CommonBtn = ({ children, type, onClick, style }) => {
  return (
    <>
      <motion.button
        className="common_btn"
        type={type} style={style} onClick={onClick}>
        {children}
      </motion.button>
    </>
  );
};

export default CommonBtn;
