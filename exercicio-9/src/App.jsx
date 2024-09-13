import { useState } from "react";
import "./App.css";
import Imagem from "./Imagem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>O melhor do rio!</h1>
      <div className="galeria">
        <Imagem imagem="src/assets/rio.jpeg" />
        <Imagem imagem="src/assets/rio-de-cima.jpeg" />
        <Imagem imagem="src/assets/musica.jpeg" />
        <Imagem imagem="src/assets/lobo-motivador.jpeg" />
      </div>
    </>
  );
}

export default App;
