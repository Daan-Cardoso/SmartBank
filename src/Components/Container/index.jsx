import React from "react";
import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <ContainerWrapper>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </ContainerWrapper>
  );
};

export default Container;
