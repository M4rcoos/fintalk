import { Link } from "react-router-dom";
import styled from "styled-components";

const breakpointMobile = "375px";

export const Container = styled.div`
  font-family: 'Montserrat';
  box-sizing: border-box;
  color: #333;
`;

export const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  padding: 1rem;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 90%; /* Alterado para 90% para se ajustar melhor em telas menores */
  max-width: 400px; /* Adicionado uma largura máxima */
  transform: translate(-50%, -50%);
`;

export const CardHeader = styled.div`
  background: var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 2px;
  text-transform: uppercase;
  transform: skewY(-4deg);
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
  position: absolute;
  top: -1rem;
  left: -0.75rem;
  color: #fff;
`;

export const CardBody = styled.div`
  margin-top: 2rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
`;

export const Input = styled.input`
  border: none;
  padding: 0.5rem 0.1rem;
  width: 100%;
  border-radius: 2px;
  border-bottom: 1px solid #eee;
  transition: all 0.5s;

  &:focus {
    border-bottom: 1px solid #ccc;
  }
`;

export const StyledButton = styled.button`
  background: var(--color-primary);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 2px;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
`;

export const ChatroomsContainer = styled.div`
  margin-top: 1rem;
`;

export const ChatroomItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const JoinButton = styled.div`
  background: var(--color-primary);
  padding: 0.25rem 1rem;
  border-radius: 4px;
  color: #fff;
  border: none;

`;

export const StyledLink = styled.button`
  text-decoration: none;
  color: #333;
  border: none;
`;

// Media Query para dispositivos móveis
export const MobileMediaQuery = styled.div`
  @media only screen and (max-width: ${breakpointMobile}) {
    width: 90%;
    max-width: 375px;
  }
`;
