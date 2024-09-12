import { useState } from "react";
import "./App.css";

function App() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  const addItem = () => {
    setItens([...itens, novoItem]);
    setNovoItem("");
  };

  return (
    <>
      <div className="container">
        <h1>Lista dinâmicas</h1>
        <input
          type="text"
          placeholder="Digite o item"
          onChange={(e) => setNovoItem(e.target.value)}
        />
        <button onClick={addItem}>Enviar</button>
        <div>
          <ul>
            {itens.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
