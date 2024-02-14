import React, { useState, useEffect, useRef } from "react";

import { chatRoom } from "../../services/auth";

import * as C from "./styles";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface Chatroom {
  _id: string;
  name: string;
  
}

export const Home = () => {
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);
  const navigate = useNavigate();

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
        console.error("Erro ao criar grupo. Status:", response.status);
      }
    } catch (error) {
      console.error("Erro ao criar grupo:", error);
  
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
              <C.StyledLink onClick={()=>navigate(`/chatroom/${chatroom._id}/${chatroom.name}`)}>
                <C.JoinButton>Entrar</C.JoinButton>
              </C.StyledLink>
            </C.ChatroomItem>
          ))}
        </C.ChatroomsContainer>
      </C.Card>
    </C.Container>
  );
};
