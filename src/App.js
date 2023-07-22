import React, { useState } from "react";
import { Top, ResultText } from "./components/content-page";
import Player from "./components/player";
import HeaderLogin from "./components/header";
import { Form } from "./components/form";
import { ApiService } from "./services/apiService";

export default function Page() {
  const [text, setText] = useState("");
  const [voiceBase64, setvoiceBase64] = useState("");

  const handleCallback = async (message) => {
    try {
      const apiService = new ApiService();
      const resultData = await apiService.gptTextRequest(message);
      setvoiceBase64(resultData.voice);
      setText(resultData.text);
    } catch (error) {
      throw Error(error.message);
    }
  };

  return (
    <div className="bg-slate-100 h-screen">
      <HeaderLogin></HeaderLogin>
      <Top></Top>
      <Form resultData={handleCallback}></Form>
      <hr></hr>
      <ResultText
        setMessage={text}
        result="A resposta do que o chat falou, qualquer coisa aleatória"
      ></ResultText>
      <Player voice={voiceBase64}></Player>
    </div>
  );
}
