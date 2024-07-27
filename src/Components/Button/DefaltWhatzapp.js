import React from "react";
import { motion } from "framer-motion";

export default function DefaltWhatzapp({ img, classStyle, Clikc }) {
  return (
    <div
      whileTap={{ scale: 0.9 }}
      className={`rounded-full shadow-cotent absolute right-5 bottom-7 bg-[#1ebb58] hover:bg-[#25D366] transition-smoot cursor-pointer w-16  ${classStyle}`}
      onClick={Clikc}
    >
      <motion.div className="p-3 h-full w-full" whileTap={{ scale: 0.9 }}>
        <img src={`${img}`} alt="img" className="h-full w-full" />
      </motion.div>
    </div>
  );
}
