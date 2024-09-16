import "./App.css";
import Tabela from "./Tabela";

function App() {
  let produtos = [
    {
      nome: "Disco de Vinil",
      preco: 20,
      disponivel: true,
      id: 1,
    },
    {
      nome: "Bolsa de couro",
      preco: 30,
      disponivel: false,
      id: 2,
    },
    {
      nome: "Caneca do homem-aranha",
      preco: 15,
      disponivel: false,
      id: 3,
    },
  ];

  return <Tabela dados={produtos} />;
}

export default App;
