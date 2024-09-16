import "./Produto.css";

const Produto = ({ lista_produtos }) => {
  return (
    <div>
      <div>
        {lista_produtos.map((product) => (
          <div
            key={product.id}
            className={
              product.disponivel ? "produto-disponivel" : "produto-indisponivel"
            }
          >
            <h2>{product.nome}</h2>
            <p>Preço: {product.preco}</p>
            <p>Disponível: {product.disponivel ? "Sim" : "Não"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produto;
