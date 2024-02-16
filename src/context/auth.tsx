import React, { createContext, ReactNode, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { api } from "../services/auth";

interface AuthContextProps {
  user: string;
  error:string
  handleLogin: (email: string, senha: string) => void;
  setError: React.Dispatch<React.SetStateAction<string>>
  setUser: React.Dispatch<React.SetStateAction<string>>
}

interface ApiResponse {
  msg: string;
  token: string;
  id:string;
  user: string;
}

export const AuthContext = createContext<AuthContextProps>({
    user: "",
    handleLogin: () => {},
    error:"",
    setError: () => {},
    setUser:()=>{}
});

function AuthProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const [user, setUser] = useState<string>('');
  const [error, setError] = useState<string>("");
  
  const handleLogin =  (email: string, senha: string) => {
     
      if (!email || !senha) {
          setError("Preencha todos os campos");
        return;
      }
      
      api.post<ApiResponse>("/auth/login", {
        email: email,
        password: senha,
      }).then(response => {
        setUser(response.data.token);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userId', response.data.id);
        navigate('/home')
      }).catch(error => {


        const msgApi = JSON.parse(error.request.response)
        if (error.response && error.response.data && error.response.data.msg) {
          setError(msgApi.msg);
        } else {
          setError("Erro na requisição");
        }
      });
      
    
  };

  return (
    <AuthContext.Provider value={{ setUser ,user, handleLogin ,error,setError}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
