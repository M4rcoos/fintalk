import React from "react";
import * as C from "./styles";

type InputProps= {
  type: string;
  placeholder: string;
  value: string;
  onChange:() => void;
}

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
