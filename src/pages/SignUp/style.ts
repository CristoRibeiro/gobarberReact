import React from 'react';
import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import backgroundSignUp from '../../assets/backgroundSignUp.png';

const appearFromRight = keyframes`
from{
  opacity:0;
  transform: translateX(50px);
}
to{
  opacity:1;
  transform: translateX(0);
}`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  place-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  place-content: center;
  align-items: center;
  animation: ${appearFromRight} 0.8s;

  form {
    margin: 80px;
    text-align: center;
    width: 100%;

    padding: 0 10px;
    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      margin-top: 24px;
      text-decoration: none;
      display: block;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundSignUp}) no-repeat center;
  background-size: cover;
`;

export const Bola = styled.div`
  border-radius: 50%;
  border: 2px solid #fff;
  min-width: 90px;
  min-height: 90px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    border-radius: 50%;
    border: 2px solid #fff;
    width: 40px;
    height: 40px;
    position: absolute;
    &:hover {
      border: 2px dashed #ff9000;
    }
  }
`;
