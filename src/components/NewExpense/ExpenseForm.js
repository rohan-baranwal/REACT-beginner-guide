import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // * Alternative way of using states
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // const titleChangeHandler = (event) => {
  //   /**
  //    * Another way of doing it where we copy the previous state and replace it with new value.
  //    * Problem in doing this way is that if we maintain a lot of states there might be a syncing issue.
  //    * As react schedules the state update, we should not use this method for larger state maintainence,
  //    * instead function call is better because it gives the latest state including all the scheduled states.
  //    */
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value
  //   // })
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("0.01");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const resetForm = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const sumbitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    props.onCancelExpenseClick();
    resetForm();
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2015-01-01' max='2025-01-01' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancelExpenseClick}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
