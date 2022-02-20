import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeYearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onYearFilterChange={changeYearFilterHandler} />
        {props.items
          .filter((item) => item.date.getFullYear() === Number(filteredYear))
          .map((item) => {
            return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
          })}
      </Card>
    </div>
  );
};

export default Expenses;
