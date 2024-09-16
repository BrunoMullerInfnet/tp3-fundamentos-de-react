import { useState } from "react";
import "./App.css";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

function App() {
  return (
    <div className="content">
      <Cabecalho />
      <Menu />
      <Conteudo /> <Rodape />
    </div>
  );
}

export default App;
