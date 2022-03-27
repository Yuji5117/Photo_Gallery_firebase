import React from "react";
import { motion } from "framer-motion";

const Modal = ({
  selectedImg,
  setSelectedImg,
}: {
  selectedImg: any;
  setSelectedImg: any;
}) => {
  const handleCheck = (e: any) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleCheck}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt=""
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};

export default Modal;
