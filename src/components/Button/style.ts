import React from 'react';
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 56px;
  color: #312e38;
  margin-top: 24px;
  background-color: #ff9000;
  border: 0;
  padding: 0 16px;
  border-radius: 3px;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
