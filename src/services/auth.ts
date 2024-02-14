import axios from "axios";

export const signin = axios.create({
  baseURL: "http://localhost:3000/auth/login",
  timeout: 100000,
})

export const signup = axios.create({
    baseURL: "http://localhost:3000/auth/register",
    timeout: 100000,
  })
  
  
export const chatRoom = axios.create({
  baseURL: "http://localhost:3000/chatroom",
  timeout: 100000,
})

export const update = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 100000,
})