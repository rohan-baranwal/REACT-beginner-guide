import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const changeYearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    props.onYearFilterChange(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onYearFilterChange={changeYearFilterHandler} />
        <ExpenseItem id={props.items[0].id} title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem id={props.items[1].id} title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem id={props.items[2].id} title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem id={props.items[3].id} title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
      </Card>
    </div>
  );
};

export default Expenses;
