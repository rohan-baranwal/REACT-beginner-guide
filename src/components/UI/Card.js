import React from "react";
import "./Card.css";

const Card = (props) => {
  const styleClasses = `card ${props.className}`;
  return <div className={styleClasses}>{props.children}</div>;
}

export default Card;
