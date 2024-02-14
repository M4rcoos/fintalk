import React, { useEffect, useRef, useState, useContext } from 'react';
import { Input } from '../../components/Input';
import { useNavigate, useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import Modal from 'react-modal';
import { AuthContext } from '../../context/auth';

import * as C from './styles';
import Button from '../../components/Button';
import { api } from '../../services/auth';

interface ChatMessage {
  message: string;
  name?: string;
  userId?: string | null;
}

interface ApiResponse {
  name: string;
  msg: string;
}

Modal.setAppElement('#root');

export const ChatRoom = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const { _id, name } = useParams();
  const socketRef = useRef<Socket | null>(null);
  const navigate = useNavigate();

  const { setError } = useContext(AuthContext);

  useEffect(() => {
    const newSocket = io('http://localhost:3000/', {
      query: {
        token: localStorage.getItem('token'),
      },
    });

    newSocket.on('newMessage', (newMessage: ChatMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    socketRef.current = newSocket;

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setNewName(name || '');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveNewName = async () => {
    await api.put<ApiResponse>(`/Chatroom/${_id}`, {
      name: newName,
    }).then(response => {
      setNewName(response.data.name);
  
    }).catch(error => {
      if (error.response && error.response.data && error.response.data.msg) {
        setError(error.response.data.msg);
      } else {
        setError("Erro na requisição");
      }
    });
 navigate('/home')
    closeModal();
  };

  const sendMessage = () => {
    if (socketRef.current && messageInput.trim().length > 0) {
      const userId = localStorage.getItem('userId');

      socketRef.current.emit('chatroomMessage', {
        _id,
        message: messageInput,
        userId,
      });

      setMessageInput('');
    }
  };

  return (
    <C.ChatroomPageWrapper>
      <C.ChatroomSection>
        <C.CardHeader>
          {name}
          
        </C.CardHeader>
        <C.Edit onClick={openModal} style={{ cursor: 'pointer' }}>
            📝Editar
          </C.Edit>
        <C.ChatroomContent>
          {messages.map((message, index) => (
            <C.Message key={index}>
              {message.userId === localStorage.getItem('userId') ? (
                <C.MyMessage>Você: {message.message}</C.MyMessage>
              ) : (
                <C.OtherMessage>
                  {message.name}: {message.message}
                </C.OtherMessage>
              )}
            </C.Message>
          ))}
        </C.ChatroomContent>
        <C.ChatroomActions>
          <Input
            placeholder="Digite sua mensagem"
            value={messageInput}
            type="text"
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <C.ChatroomActionsButton onClick={sendMessage}>
            Enviar
          </C.ChatroomActionsButton>
        </C.ChatroomActions>
      </C.ChatroomSection>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2 style={{ textAlign: 'center', marginBottom: 12 }}>Editar nome da sala</h2>
        <Input
          placeholder="Novo Nome"
          value={newName}
          type="text"
          onChange={(e) => setNewName(e.target.value)}
        />
        <div style={{ display: 'flex', gap: 18, marginTop: 12 }}>
          <Button  text="Salvar" onClick={saveNewName} />
          <Button text="Cancelar" onClick={closeModal}  />
        </div>
      </Modal>
    </C.ChatroomPageWrapper>
  );
};
