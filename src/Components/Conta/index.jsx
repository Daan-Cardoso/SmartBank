import React, { useState } from "react";
import { corPrimaria } from "../UI/variaveis.js";
import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import styled from "styled-components";
import { Icone } from "../UI/";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
`;

const BtnConta = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${corPrimaria};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

const Detalhe = styled.span`
  color: ${corPrimaria};
  font-size: 24px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icone src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <BtnConta onClick={toggleHandler}>
        <Icone
          marginTop='2px'
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </BtnConta>
    </Box>
  );
};

export default Conta;
