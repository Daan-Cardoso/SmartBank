import React from "react";
import { Botao, Box } from "../UI/index.js";
import { extratoLista } from "../../info.js";
import Items from "../items/index.jsx";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => (
        <Items key={id} type={type} from={from} value={value} date={date} />
      ))}
      <Botao>Veja Mais</Botao>
    </Box>
  );
};

export default Extrato;
