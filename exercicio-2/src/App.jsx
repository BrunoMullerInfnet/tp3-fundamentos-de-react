import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("steelblue");

  const changeButtonColor = () => {
    if (buttonColor === "steelblue") {
      setButtonColor("red");
    } else {
      setButtonColor("steelblue");
    }
  };

  return (
    <>
      <h1>Botão Estilizado</h1>
      <button
        style={{
          color: buttonColor,
          backgroundColor: "pink",
          borderRadius: "50%",
          height: "100px",
          width: "100px",
        }}
        onClick={changeButtonColor}
      >
        Botão
      </button>
    </>
  );
}

export default App;
