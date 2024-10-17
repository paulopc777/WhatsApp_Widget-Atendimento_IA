import React from "react";
import { ZapLink } from "../../Button/LinkZap/ZapLink";

function formatPhoneNumber(phoneNumber) {
  // Remove todos os caracteres que não sejam números
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");

  // Verifique o comprimento do número para decidir o formato
  if (cleaned.length === 9) {
    // Formato para números de 10 dígitos: XXXXX-XXXX
    return cleaned.replace(/(\d{5})(\d{4})/, "$1-$2");
  } else if (cleaned.length === 12) {
    // Formato para números de 11 dígitos com DDD: (DDD)XXXXX-XXXX
    return cleaned.replace(/(\d{3})(\d{5})(\d{4})/, "($1)$2-$3");
  } else {
    // Retorna o número original se ele não tiver 10 ou 11 dígitos
    return phoneNumber;
  }
}

export default function Header({ Nome, Img, Number }) {
  let FormtNumber = "";

  if (Number) {
    FormtNumber = formatPhoneNumber(Number);
  }

  return (
    <div className="w-full h_15  bg-[#202C33]  border_black rounded-t-lg flex items-center p-7 justify-between">
      <div className="flex">
        <div className="bg-slate-200 rounded-full w-12 h-12">
          <img src={Img} alt={Nome} className="rounded-full" />
        </div>

        <div className="text-white font-bold translate-x-4">
          <p className="translate-y-1">{Nome}</p>
          <a
            href={`https://wa.me/${Number}`}
            className="text-[#9CA9AF] text-sm font-light"
          >
            {FormtNumber}
          </a>
        </div>
      </div>

      <ZapLink Number={Number} ></ZapLink>
    </div>
  );
}
