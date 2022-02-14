import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseItemName = "Car Insurance";
  const expenseItemDate = new Date(2021, 0, 3);
  const expenseItemPrice = 200;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
