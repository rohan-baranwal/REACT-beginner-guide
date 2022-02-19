import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  let dated = props.date
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
    dated = new Date();
    console.log(dated);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={dated} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Edit title</button>
    </Card>
  );
};

export default ExpenseItem;
