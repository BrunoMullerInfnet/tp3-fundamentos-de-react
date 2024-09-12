import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Cabeçalho da página</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <h2 />
        <p>Área principal do conteúdo da página</p>
      </main>

      <footer className="footer">
        <p>Área do rodapé</p>
      </footer>
    </div>
  );
}

export default App;
