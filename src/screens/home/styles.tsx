import styled from "styled-components";

interface MessageContainerProps {
  isUserMessage: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;

export const Title = styled.h2``;

export const ChatContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
`;

export const RoomList = styled.div`
  margin-bottom: 10px;
`;

export const RoomListTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const RoomListItem = styled.div`
  font-size: 14px;
  margin-bottom: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CreateRoomContainer = styled.div`
  margin-bottom: 10px;
`;

export const CreateRoomInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const CreateRoomButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const MessageContainer = styled.div<MessageContainerProps>`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${(props) => (props.isUserMessage ? '#e1f7d5' : '#fff')};
`;

export const UserLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap:20px;
`;

export const MessageInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

export const SendButton = styled.button`
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const SendButtonDelete = styled.button`
  padding: 8px;
  background-color: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
