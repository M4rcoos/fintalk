import React from "react";
import * as C from "./styles";

type ButtonProps = {
  text: string;
  onClick: () => void;
  children?: React.ReactNode
};

const Button = ({ text, onClick}:ButtonProps) => {
  return (
    <C.Button onClick={onClick}>
      {text}
    </C.Button>
  );
};

export default Button;
