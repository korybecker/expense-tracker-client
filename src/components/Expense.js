import React from "react";

const Expense = (props) => {
  return (
    <div className="bg-light container card">
      <div>
        <h1>{props.title}</h1>
        <p>${props.amount}</p>
      </div>
      <div>
        <button onClick={props.deleteExpense}>Delete</button>
      </div>
    </div>
  );
};

export default Expense;
