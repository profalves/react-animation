import React from "react";
import "./styles.css";

import { GlobalStyle, Bounce, Container } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Bounce>
          <h1>animated</h1>
        </Bounce>
      </Container>
    </>
  );
}
