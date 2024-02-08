import React, { useState, ChangeEvent, ReactElement, useContext} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import logo from "../../assets/logo.png"
import {AuthContext } from "../../context/auth"


function Signin(): ReactElement {


  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  

  const {handleLogin,error,setError}=useContext(AuthContext)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    setError("");
  };

  return (
    <C.Container>
      <Header imagePath={logo}/>
      <C.Content>
      <C.Label> LOGIN</C.Label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={handleSenhaChange}
        />
        <C.labelError>{error}</C.labelError>
        <Button text="Entrar" onClick={()=>handleLogin(email,senha)} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
}

export default Signin;
