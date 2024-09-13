import "./Card.css";

const Card = ({ titulo, subtitulo, conteudo }) => {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <h4>{subtitulo}</h4>
      <p>{conteudo}</p>
    </div>
  );
};

export default Card;
