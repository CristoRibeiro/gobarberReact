import React from 'react';
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface PropsInput {
  isFocussed: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<PropsInput>`
  border-radius: 3px;
  background-color: #232129;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  align-items: center;
  display: flex;
  color: #666360;

  & + div {
    margin-top: 8px;
  }
  input {
    color: #f4ede8;
    border: 0;
    flex: 1;
    background-color: transparent;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
  ${props =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;
    `};
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `};
  ${props =>
    props.isFocussed &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `};
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 20px;
  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
