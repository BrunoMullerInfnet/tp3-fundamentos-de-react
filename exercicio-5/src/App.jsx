import "./App.css";
import Produto from "./Produto";

function App() {
  const produto = {
    nome: "Tênis",
    preco: 10.3,
    descricao: "Tênis fashion da moda",
  };

  return (
    <div>
      <h1>Informações sobre o produto</h1>
      <Produto produto={produto} />
    </div>
  );
}

export default App;
