import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "../screens/home";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
const messages = [
  { user: 'user1', text: 'Olá, como você está?' },
  { user: 'user2', text: 'Oi! Estou bem, obrigado!' },
  // Adicione mais mensagens conforme necessário
];
const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home messages={messages}/>}>
          <Route index element={<Home messages={messages}/>} />
        </Route>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};



export default RoutesApp;
