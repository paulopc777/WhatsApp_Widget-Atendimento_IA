import React from "react";

export default function MessageComp({ Text }) {
  function formatTextToParagraph(text) {
    // Substitui **texto** por <strong>texto</strong>
    let formattedText = text.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
  
    // Substitui * texto * por - texto com <br> antes se não for uma lista
    formattedText = formattedText.replace(/\* ([^\*]+) \*/g, '<br>• $1');
  
    // Substitui * texto * por - texto se for uma lista específica
    formattedText = formattedText.replace(/^\* ([^\*]+):/gm, '✅ $1:');
  
    // Substitui quebras de linha por <br>
    formattedText = formattedText.replace(/(?:\r\n|\r|\n)/g, '<br>');
  
    return formattedText;
  }

  const formattedText = formatTextToParagraph(Text);

  return (
    <div className="flex animation_Message pl-2 pr-4 pt-4 ">
      <div className="text-[#313C42]">
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
          <title>tail-in</title>
          <path
            opacity="0.13"
            fill="#0000000"
            d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
          ></path>
          <path
            fill="currentColor"
            d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
          ></path>
        </svg>
      </div>
      <div className="bg-[#313C42] w-fit px-6 py-2 BoxMiniRunded text-white">
        <p
          className="-translate-x-2"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        ></p>
      </div>
    </div>
  );
}
