import React, { useState } from "react";
import {Input} from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { Header } from "../../components/Header";
import { api } from "../../services/auth";


interface ApiResponse {
  msg:string
}
const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [passConf, setPassConf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSignup =  () => {
    
      if (!email || !senha || !user || !passConf) {
        setError("Preencha todos os campos");
        return;
      }
      if (senha != passConf) {
        setError("As senhas devem ser iguais");
        return;
      }
  
  
      api.post<ApiResponse>('/auth/register', {
        name:user,
        email: email,
        password: senha,
        confirmPassword:passConf
      }).then(
        response=>{
          alert("Usuário cadatrado com sucesso!");
          console.log(response.data.msg)
      
          navigate("/");
        }

      ).catch(error=>{
        const msgApi = JSON.parse(error.request.response)
        if (error.response && error.response.data && error.response.data.msg) {
          setError(msgApi.msg);
        } else {
          setError("Erro na requisição");
        }
      })
  
     
  };

  return (
    <C.Container>
      <Header imagePath={logo}/>
      <C.Content>
      <C.Label>CRIE SUA CONTA</C.Label>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={user}
          onChange={(e) => [setUser(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
         <Input
          type="password"
          placeholder="Confirme sua senha"
          value={passConf}
          onChange={(e) => [setPassConf(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
