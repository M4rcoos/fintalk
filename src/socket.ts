import { io } from "socket.io-client";

export const socket = () => io('http://localhost:3000/', {
    query: {
      token: localStorage.getItem('token'),
    },
  })