import { useState } from "react";

function Formulario({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input 
          type="text" 
          name="nome" 
          value={formData.nome} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Mensagem:</label>
        <input 
          type="text" 
          name="mensagem" 
          value={formData.mensagem} 
          onChange={handleChange} 
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
