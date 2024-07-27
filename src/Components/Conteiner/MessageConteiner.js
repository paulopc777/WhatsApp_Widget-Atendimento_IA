import React from "react";
import MessageComp from "../MessageBox/MessageComp";
import MessageClient from "../MessageBox/MessageClient";

export default function MessageConteiner({ InitalMessage, Messages }) {
  return (
    <div className="relative">
      <div className="flex flex-col">
        {Messages.map((message, index) => {
          if (message.type === "comp") {
            return <MessageComp Text={message.text} key={index}></MessageComp>;
          } else {
            return (
              <MessageClient Text={message.text} key={index}></MessageClient>
            );
          }
        })}
      </div>
    </div>
  );
}
