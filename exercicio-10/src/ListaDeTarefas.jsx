import Tarefa from "./Tarefa";

const ListaDeTarefas = ({ tarefa }) => {
  return (
    <div>
      <Tarefa nome="Lava a louça" status="Feito" />
      <Tarefa nome="Ir na academia" status="Não feito" />
      <Tarefa nome="Estudar" status="Feito" />
    </div>
  );
};

export default ListaDeTarefas;
