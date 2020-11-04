import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import SignInBackground from '../../assets/backgroundSignIn.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const appearFromLeft = keyframes`
from{
  opacity:0;
  transform: translateX(-50px);
}
to{
  opacity:1;
  transform: translateX(0);
}`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  animation: ${appearFromLeft} 0.8s;

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
  background: url(${SignInBackground}) no-repeat;
  background-size: cover;
`;
