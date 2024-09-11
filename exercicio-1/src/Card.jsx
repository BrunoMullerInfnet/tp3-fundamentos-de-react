import "./Card.css";

const Card = ({ name, description }) => {
  return (
    <div className="card">
      <div className="card-header"> {name} </div>
      <div className="card-body"> {description}</div>
    </div>
  );
};

export default Card;
