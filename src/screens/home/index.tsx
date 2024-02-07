// ChatComponent.tsx
import React, { useState } from "react";
import * as C from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface Message {
  user: string;
  text: string;
}

export const Home = ({ messages }: { messages: Message[] }) => {
  const [newMessage, setNewMessage] = useState<Message | string> ({user:"Marcos", text: "oie"});
  const navigate = useNavigate();

  const handleSendMessage = () => {
   
    console.log(`Mensagem enviada: ${newMessage}`);
   
    setNewMessage("");
  };

  return (
    <C.Container>
      <C.Title>Home</C.Title>

      <Button text="Sair" onClick={() => navigate("/")}>
        Sair
      </Button>

      <C.ChatContainer>
        {messages.map((message, index) => (
          <C.MessageContainer
            key={index}
            isUserMessage={message.user === "user1"}
          >
            <C.UserLabel>{message.user}:</C.UserLabel> {message.text}
          </C.MessageContainer>
        ))}
         <C.MessageInputContainer>
        <C.MessageInput
          type="text"
          placeholder="Digite sua mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <C.SendButton onClick={handleSendMessage}>Enviar</C.SendButton>
      </C.MessageInputContainer>
      </C.ChatContainer>

     
    </C.Container>
  );
};
