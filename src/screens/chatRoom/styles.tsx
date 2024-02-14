import styled from "styled-components";

export const ChatroomPageWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: -8px;
`;
export const ChatroomSection = styled.div`

  width: 40vw;
  height: 80vh;
  margin: auto;
  border: 1px solid var(--color-primary);
  position: relative;
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
  grid-template-columns: 1fr 72px;
  grid-gap: 1rem;
  border-top: .5px solid var(--color-light-pink);

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
    align-items:center;
    position: absolute;
    top: -1rem;
    left: -0.75rem;
    gap:16px;
`
  
  
export const ChatroomActionsButton = styled.button`
  height: 100%;
  width: 100%;
  color:#fff ;
  border: none;
border-radius: 8px;
  background-color:var(--color-primary);

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
   border: 1px solid #101010;
   border-radius: 8px ;
`;