import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  h1 {
    flex: 1;
    width: 100px;
  }
  button {
    position: absolute;
    width: 100px;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
