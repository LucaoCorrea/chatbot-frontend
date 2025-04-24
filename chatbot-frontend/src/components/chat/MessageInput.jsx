import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

const InputContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

const StyledInput = styled(TextField)`
  width: 100%;
  
  & .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 20px;
    
    & fieldset {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    
    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const MessageInput = ({ value, onChange, onKeyPress }) => (
  <InputContainer>
    <form>
      <StyledInput
        placeholder="Digite aqui..."
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        variant="outlined"
        fullWidth
      />
    </form>
  </InputContainer>
);