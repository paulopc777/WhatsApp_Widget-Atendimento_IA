import React, { useEffect, useRef } from "react";
import Header from "./Conteiner/Header/Header";
import MessageConteiner from "./Conteiner/MessageConteiner";
import InputSend from "./Conteiner/InputMessage/InputSend";
import { motion } from "framer-motion";
import useMessageStore from "../Redux/Messages";
import IndexSocial from "./SocialMedia/IndexSocial";

export default function Conversation({ Visible, model }) {
  const Messages = useMessageStore((state) => state.Messages);
  const addMessage = useMessageStore((state) => state.addMessage);
  const prevMessagesRef = useRef();
  const chat = model.startChat({ history: [] });

  useEffect(() => {
    if (prevMessagesRef.current !== undefined) {
      // Se os valores não forem iguais, significa que houve uma mudança
      if (prevMessagesRef.current !== Messages) {
        const L = Messages.length;
        console.log(L);
        const Data = Messages[L - 1];

        console.log(Data);

        if (Data.type === "comp") {
        } else {
          chat.sendMessage(`${Data.text}`).then((res) => {
            const Mensagem = res.response.text();
            addMessage({ text: Mensagem, type: "comp" });
          });
        }
      }
    }
    // Atualiza a referência para o próximo render
    prevMessagesRef.current = Messages;
  }, [Messages]); // O efeito será executado sempre que `Messages` mudar

  return (
    <>
      {Visible ? (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="Conversation_call_h Conversation_call_w bg-slate-900 absolute right-16 bottom-28 runder_conteiner "
        >
          <Header
            Nome={process.env.REACT_APP_COMPANY_NAME}
            Img={process.env.REACT_APP_COMPANY_IMAGE}
            Number={process.env.REACT_APP_COMPANY_PHONE_NUMBER}
          ></Header>

          <div className="h_73  overflow-y-scroll overflow-x-hidden ">
            {/* Backgrund */}
            <div className="opacity-20 h-full w-full absolute">
              <img
                src="/img/back.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <MessageConteiner Messages={Messages}></MessageConteiner>
          </div>

          <div className="bottom-0 absolute w-full">
            <InputSend></InputSend>
          </div>
          {/* {process.env.REACT_APP_OTHER_MEDIA ?? <IndexSocial />} */}
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}
