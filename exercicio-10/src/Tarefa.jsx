import "./tarefa.css";

const Tarefa = ({ nome, status }) => {
  return (
    <div className="content">
      <h3>{nome}</h3>
      <p>{status}</p>
    </div>
  );
};

export default Tarefa;
