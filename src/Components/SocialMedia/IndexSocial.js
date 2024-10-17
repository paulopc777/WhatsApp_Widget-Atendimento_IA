import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const File = [
  { link: "instagram", url: "/icon/Intagram.png" },
  {
    link: "Facebook",
    url: "https://i.pinimg.com/736x/67/b5/47/67b547050a572e487c5a9e57587f3377.jpg",
  },
  {
    link: "instagram",
    url: "https://img.freepik.com/vetores-premium/logotipo-linkedin_578229-227.jpg?w=740",
  },
];
export default function IndexSocial() {
  return (
    <motion.ul
      className=" w-full h-7 absolute -bottom-10 flex flex-row-reverse justify-evenly    "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {File.map((index) => (
        <motion.li key={index} className={index.link} variants={item}>
          <a className="w-7 h-7 rounded-xl" href={index.link}>
            <img src={index.url} className="w-full h-full rounded-xl" />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
