const Tabela = ({ dados }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Disponível</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.preco}</td>
            <td>{item.disponivel ? "Sim" : "Não"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
