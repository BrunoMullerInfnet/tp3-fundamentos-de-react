function Resumo({dados}){
return <div>
    <h3>Resumo dos componentes submetidos </h3>
        <p>nome: {dados.nome}</p>
        <p>email: {dados.email}</p>
        <p>mensagem: {dados.mensagem}</p>
</div>
}

export default Resumo