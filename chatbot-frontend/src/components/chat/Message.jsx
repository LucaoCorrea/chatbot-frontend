import styled from 'styled-components';

export const MessageBubble = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ sender, theme }) => 
    sender === 'user' ? theme.colors.primary : theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 80%;
  align-self: ${({ sender }) => sender === 'user' ? 'flex-end' : 'flex-start'};
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const Message = ({ sender, children }) => (
  <MessageBubble sender={sender}>
    {children}
  </MessageBubble>
);