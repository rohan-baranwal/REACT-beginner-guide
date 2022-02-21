import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let expenseContent = <p className='expenses-list__fallback'>No expenses found.</p>;
  if (props.items.length > 0) {
    expenseContent = (
      <ul className='expenses-list'>
        {props.items.map((expense) => {
          return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
        })}
      </ul>
    );
  }
  return expenseContent;
};

export default ExpenseList;
