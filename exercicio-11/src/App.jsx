import { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Resumo from './Resumo';

function App() {
  const [formData, setFormData] = useState({});

  const handleFormularioSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <div>
        <h1>Formulário e Resumo</h1>
        <Formulario onSubmit={handleFormularioSubmit} />
        <Resumo dados={formData} />
      </div>
    </>
  );
}

export default App;
