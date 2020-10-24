import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 3px;
  background-color: #232129;
  border: 2px solid #232129;
  height: 56px;
  padding: 16px;
  width: 100%;
  place-content: center;
  display: flex;

  & + div {
    margin-top: 8px;
  }
  input {
    color: #f4ede8;
    border: 0;
    width: 100%;
    background-color: transparent;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
