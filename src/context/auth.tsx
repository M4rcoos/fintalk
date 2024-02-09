import React, { createContext, ReactNode, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../services/auth";

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
  
  const handleLogin = async (email: string, senha: string) => {
     
      if (!email || !senha) {
          setError("Preencha todos os campos");
        return;
      }
      
      signin.post<ApiResponse>("/", {
        email: email,
        password: senha,
      }).then(response => {
        setUser(response.data.token);
        localStorage.setItem('token', response.data.user)
        navigate('/home')
      }).catch(error => {
        if (error.response && error.response.data && error.response.data.msg) {
          setError(error.response.data.msg);
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
