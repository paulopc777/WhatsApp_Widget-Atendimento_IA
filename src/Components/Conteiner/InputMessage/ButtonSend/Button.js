import React from "react";
import Send from "./Send";
import Mic from "./Mic";

export default function Button({ Sendbtn, Micbtn ,click}) {
  let styleColor = "";

  if (Sendbtn) {
    styleColor = "hover:text-green-500";
  }

  if (Micbtn) {
    styleColor = "hover:text-blue-500";
  }

  return (
    <div
      className={`py-2 pl-2 text-[#404e57] ${styleColor} transition-all cursor-pointer`}
      onClick={click}
    >
      {Sendbtn ? <Send></Send> : " "}
      {Micbtn ? <Mic></Mic> : " "}
    </div>
  );
}
