import React from "react";

export default function MessageClient({Text}) {

  return (
    <div className="flex flex-row-reverse animation_Message pl-2 pr-4 pt-4 translate-x-3 ">

      <div className="text-[#005C4B]">
        <svg
          viewBox="0 0 8 13"
          height="13"
          width="8"
          preserveAspectRatio="xMidYMid meet"
          class=""
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 8 13"
        >
          <title>tail-out</title>
          <path
            opacity="0.13"
            d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
          ></path>
          <path
            fill="currentColor"
            d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
          ></path>
        </svg>
      </div>

      <div className="bg-[#005C4B]  w-fit max-w-full  BoxMiniRunded2 text-white ">
        <p className="-translate-x-2 px-6 py-2 text-wrap break-all">{Text}</p>
      </div>
    </div>
  );
}
