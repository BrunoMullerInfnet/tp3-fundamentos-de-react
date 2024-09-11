import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <h1>Meus cards</h1>
      <Card
        name="Cor favorita"
        description="Para minha a melhor cor do mundo é a cor laranja"
      />
      <Card name="Melhor esporte" description="O melhor esporte é o futebol" />
      <Card
        name="Matéria preferida"
        description="Minha matéria preferida é ciência de dados"
      />
    </>
  );
}

export default App;
