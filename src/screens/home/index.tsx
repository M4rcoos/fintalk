import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./styles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button text="Sair" onClick={() =>  navigate("/")}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
