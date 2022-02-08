import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas.js";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle.js";
import { BtnTema } from "./Components/UI/index.js";
import SwitcherTemas from "./Components/SwitcherTemas/index.jsx";

function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema) => !tema);
  };
  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <BtnTema onClick={toggleTema}>
          <SwitcherTemas tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
