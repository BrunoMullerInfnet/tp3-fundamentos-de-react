const Imagem = ({ imagem, descricao, link }) => {
  return (
    <a href={link}>
      <img src={imagem} alt={descricao} title={descricao} />
    </a>
  );
};

export default Imagem;
