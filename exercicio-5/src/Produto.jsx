const Produto = ({ produto }) => {
  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>R$ {produto.preco}</p>
      <p>{produto.descricao}</p>
    </div>
  );
};

export default Produto;
