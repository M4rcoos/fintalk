import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import * as C from "./styles";

type InputProps= {
  type: HTMLInputTypeAttribute ;
  placeholder: string;
  value: string;
  onChange:(e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};


