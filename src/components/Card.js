import "./Card.css";

function Card(props) {
  const styleClasses = `card ${props.className}`;
  return <div className={styleClasses}>{props.children}</div>;
}

export default Card;
