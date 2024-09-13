import "./App.css";
import Perfil from "./Perfil";

function App() {
  const usuario = {
    nome: "Bruno",
    email: "bruno@gmail.com",
    endereco: "rua nascimento silva 107",
  };

  return (
    <>
      <h1>Informações do usuário</h1>
      <Perfil usuario={usuario} />
    </>
  );
}

export default App;
