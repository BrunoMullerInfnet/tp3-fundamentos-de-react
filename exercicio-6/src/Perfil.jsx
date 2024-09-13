const Perfil = ({ usuario }) => {
  return (
    <div>
      <h2>{usuario.nome}</h2>
      <p>{usuario.email}</p>
      <p>{usuario.endereco}</p>
    </div>
  );
};

export default Perfil;
