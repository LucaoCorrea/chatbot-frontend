import React from "react";
import styled from "styled-components";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.h1`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  font-size: 1.5rem;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.medium};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Chat = ({ messages, inputValue, onInputChange, onSend }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSend(e);
    }
  };

  return (
    <ChatContainer>
      <Header>Furia</Header>

      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender}>
            {message.text}
          </Message>
        ))}
      </MessagesContainer>

      <MessageInput
        value={inputValue}
        onChange={onInputChange}
        onKeyPress={handleKeyPress}
      />
    </ChatContainer>
  );
};
