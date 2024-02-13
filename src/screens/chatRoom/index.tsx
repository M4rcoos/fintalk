import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../components/Input";
import { useParams } from "react-router-dom";
import { Socket } from 'socket.io-client';
import io from 'socket.io-client';

import {
  CardHeader,
  ChatroomActions,
  ChatroomActionsButton,
  ChatroomContent,
  ChatroomPageWrapper,
  ChatroomSection,
  Message,
  OtherMessage,
} from "./styles";

interface Chatroom {
  _id: string;
  name: string;
  // Adicione outros campos conforme necessário
}

interface ChatMessage {
  message: string;
}

export const ChatRoom = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");
  const { _id, name } = useParams();

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000/", {
      query: {
        token: localStorage.getItem("token"),
      },
    });

    newSocket.on("newMessage", (newMessage: ChatMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.emit("chatroomMessage", {
        _id,
        message: messageInput,
      });

      setMessageInput(""); // Limpar a mensagem após o envio
    }
  };

  return (
    <ChatroomPageWrapper>
      <ChatroomSection>
        <CardHeader>{name}</CardHeader>
        <ChatroomContent>
          {messages.map((message, index) => (
            <Message key={index}>
              <OtherMessage>{message.message}</OtherMessage>
            </Message>
          ))}
        </ChatroomContent>
        <ChatroomActions>
          <Input
            placeholder={"Escreva a Mensagem"}
            value={messageInput}
            type=""
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <ChatroomActionsButton className="join" onClick={sendMessage}>
            Send
          </ChatroomActionsButton>
        </ChatroomActions>
      </ChatroomSection>
    </ChatroomPageWrapper>
  );
};
