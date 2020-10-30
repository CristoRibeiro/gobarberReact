import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: #ff9000;
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 87%;
    opacity: 0;
    transition: opacity 0.4s;
    transform: translateX(-87%);
    color: #312e38;
    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 87%;
      transform: translateX(-87%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
