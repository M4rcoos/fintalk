import styled from 'styled-components';

export const ChatroomPageWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: -8px;
`;

export const ChatroomSection = styled.div`
  width: 90vw;
  max-width: 600px;
  height: 80vh;
  margin: auto;
  border: 1px solid var(--color-primary);
  position: relative;
`;

export const CardHeader = styled.div`
  background: var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 2px;
  text-transform: uppercase;
  transform: skewY(-4deg);
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  position: absolute;
  top: -1rem;
  left: -0.75rem;
  gap: 16px;
`;

export const ChatroomContent = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 3.5rem;
  padding: 0.5rem;
  overflow: auto;
`;

export const ChatroomActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: grid;
  grid-template-columns:  1fr;
  grid-gap: 1rem;


  @media (min-width: 600px) {
    grid-template-columns: 2fr 80px 80px;
  }
`;

export const ChatroomActionsButton = styled.button`
 
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);

  @media screen and (max-width: 600px) {
    padding: 1rem;
    text-align: center;
  }
`;

export const ChatroomDeleteButton = styled.button`
  color: #fff;
  border: none;
  border-radius: 8px;
 border:1px solid var(--color-primary);
    color: var(--color-secundary);
    @media screen and (max-width: 600px) {
    padding: 1rem;
    text-align: center;
  }

`;

export const Message = styled.div`
  margin-bottom: 0.25rem;
`;

export const OtherMessage = styled.span`
  color: #0099cc;
  font-weight: bold;
`;

export const MyMessage = styled.span`
  color: #00cc00;
  font-weight: bold;
`;

export const Edit = styled.span`
  text-transform: lowercase;
  padding: 8px;
  color: #fff;
   transform: skewY(4deg);
  background-color:var(--color-primary);
  border-radius: 8px;
  position: absolute;
  top:-20px;
  right: -20px;

  
`;

