import { useState } from "react";
import "./App.css";
import DefaltWhatzapp from "./Components/Button/DefaltWhatzapp";
import Conversation from "./Components/Conversation";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [Visile, setVisible] = useState(false);

  function HandleClick() {
    setVisible(!Visile);
  }

  const genAI = new GoogleGenerativeAI(
    "AIzaSyC-ohVwJYGf8SQNJHaZSMB-PTS0FJ0FSPk"
  );

  const BotContextSuporte =
    "Você e um atendente da vipphone da plataforma monichat, uma plataforma que utilizada a WhatsApp API para gerar conversar e Helpdesk, etc..., você devera tirar dúvidas, e se necessário explicar a plataforma, utiliza respostar de simples intendimento e não muito grandes, casso o usuário queira comprar ou saber valores peça o número de WhatsApp e diga que vai redirecioná-lo para um atendente, não responsa questão que não estão relacionadas com a empresa ou plataforma de terceiros";
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: BotContextSuporte,
  });

  return (
    <div>
      <DefaltWhatzapp
        img={"/icon/WhatsApp.svg"}
        classStyle={"w-15"}
        Clikc={HandleClick}
      ></DefaltWhatzapp>

      <Conversation Visible={Visile} model={model}></Conversation>
    </div>
  );
}

export default App;
