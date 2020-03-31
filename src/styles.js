import styled, { keyframes, createGlobalStyle } from "styled-components";
import { slideInDown, slideInUp, bounce } from "react-animations";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const animation = keyframes`${bounce}`;

export const Bounce = styled.div`
  animation: 2s ${animation};
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  background-color: lightcyan;
  height: 100vh;
`;
