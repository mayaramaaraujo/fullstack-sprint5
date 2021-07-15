import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 70vh;
`;

const Number = styled.h2`
  font-size: 3rem;
  padding: 1rem;
`;

const ErrorPage = () => {
  return (
    <Container>
      <Number>404</Number>
      <p>Página não encontrada :( </p>
    </Container>
  );
};

export default ErrorPage;
