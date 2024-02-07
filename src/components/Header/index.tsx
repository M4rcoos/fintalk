import React from 'react';
import * as C from './styles'

interface HeaderProps {
    imagePath: string;
  }
export const Header = ({ imagePath }:HeaderProps) => {
    return (
      <C.HeaderContainer>
        <C.LogoImage src={imagePath} alt="Logo" />
      </C.HeaderContainer>
    );
  };