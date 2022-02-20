import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { INITIAL_EXPENSES } from "./constants/Constants";

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((previousExpenses) => {
      return [expenseData, ...previousExpenses];
    });
  };
  const changeYearFilterHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  // * Alternative way using JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, `Let's get started`),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses onYearFilterChange={changeYearFilterHandler} items={expenses} />
    </div>
  );
};

export default App;
