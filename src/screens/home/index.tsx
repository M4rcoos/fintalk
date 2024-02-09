import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { chatRoom } from "../../services/auth";

import * as C from "./styles";
import Button from "../../components/Button";

interface Chatroom {
  _id: string;
  name: string;
  // Adicione outros campos conforme necessário
}

export const Home = () => {
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);

  const getChatrooms = async () => {
    try {
      const response = await chatRoom.get<Chatroom[]>("/");
      setChatrooms(response.data);
    } catch (error) {
      console.error("Error fetching chatrooms:", error);
    }
  };

  useEffect(() => {
    getChatrooms();
  }, [chatrooms]);

  const createChatroom = async () => {
    const chatroomName = chatroomNameRef.current?.value;
  
    try {
      const response = await chatRoom.post("/", { name: chatroomName });
  
      if (response.status === 200) {
        getChatrooms();
        chatroomNameRef.current && (chatroomNameRef.current.value = "");
      } else {
        console.error("Erro ao criar chatroom. Status:", response.status);
      }
    } catch (error) {
      console.error("Erro ao criar chatroom:", error);
  
      if (error instanceof Error) {
        if (error.message.includes("Network Error")) {
        } else {
        }
      } else {
        console.error("Erro desconhecido:", error);
      }
    }
  };
  
  

  const chatroomNameRef = useRef<HTMLInputElement>(null);

  return (
    <C.Container>
      <C.Card>
        <C.CardHeader>Grupos de Chat</C.CardHeader>
        <C.CardBody>
          <C.InputGroup>
            <C.Label htmlFor="chatroomName">Nome do Grupo</C.Label>
            <C.Input
              type="text"
              name="chatroomName"
              id="chatroomName"
              ref={chatroomNameRef}
              placeholder="Nome do Grupo"
            />
          </C.InputGroup>
        </C.CardBody>
        <Button text="Criar Grupo" onClick={createChatroom} />
        <C.ChatroomsContainer>
          {chatrooms.map((chatroom) => (
            <C.ChatroomItem key={chatroom._id}>
              <div>{chatroom.name}</div>
              <C.StyledLink to={`/chatroom/${chatroom._id}`}>
                <C.JoinButton>Entrar</C.JoinButton>
              </C.StyledLink>
            </C.ChatroomItem>
          ))}
        </C.ChatroomsContainer>
      </C.Card>
    </C.Container>
  );
};
