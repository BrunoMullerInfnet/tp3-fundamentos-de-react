import "./Produto.css";
import { useState } from "react";

const Produto = ({ lista_produtos }) => {
  const [hideItems, setHideItems] = useState(false);

  const handleChange = (e) => {
    setHideItems(e.target.checked);
  };

  const filtredProducts = lista_produtos.filter(
    (product) => !hideItems || (product.disponivel && hideItems)
  );

  return (
    <div>
      <label>
        <input type="checkbox" checked={hideItems} onChange={handleChange} />
      </label>
      <div>
        {filtredProducts.map((product) => (
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
