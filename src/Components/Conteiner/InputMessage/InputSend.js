import React, { useState } from "react";
import Button from "./ButtonSend/Button";
import useMessageStore from "../../../Redux/Messages";

export default function InputSend() {
  const [Input, setInput] = useState("");
  const addMessage = useMessageStore((state) => state.addMessage);

  function HendleClikc() {
    if (Input.length > 0) addMessage({ text: Input,type:'client',id: Date.now() });
    setInput("");
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita o comportamento padrão do Enter (por exemplo, em um formulário)
      HendleClikc();
    }
  }
  return (
    <div className="flex justify-evenly items-center w-full bg-[#202C33] runder_conteiner_b_l p-2 ">
      <Button Micbtn></Button>
      <input
        type="text"
        placeholder="Digite uma mensagem"
        className="bg-[#26333A] p-2 outline-none border-none w-3/4 text-white rounded-lg"
        value={Input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleKeyDown} 
      />

      <Button Sendbtn click={HendleClikc}></Button>
    </div>
  );
}
