import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme";
import { Chat } from "./components/chat";
import { Container } from "@mui/material";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, { text: inputValue, sender: "user" }]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: getBotResponse(inputValue),
            sender: "bot",
          },
        ]);
      }, 800);

      setInputValue("");
    }
  };

  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("jogador") || lowerMsg.includes("elenco")) {
      return "Nosso elenco atual de CS:GO é formado por...";
    } else if (lowerMsg.includes("jogo") || lowerMsg.includes("partida")) {
      return "Próximo jogo: FURIA vs Team Liquid - 15/05 - 19h";
    } else if (lowerMsg.includes("loja") || lowerMsg.includes("merch")) {
      return "Confira nossa loja oficial: https://furiagg.gg/loja";
    } else {
      return "Obrigado pela mensagem! Como posso te ajudar?";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Chat
        messages={messages}
        inputValue={inputValue}
        onInputChange={(e) => setInputValue(e.target.value)}
        onSend={handleSend}
      />
    </ThemeProvider>
  );
}

export default App;
