import React from "react";

const Expense = (props) => {
  return (
    <div className="bg-light container card">
      <h1>{props.title}</h1>
      <p>${props.amount}</p>
    </div>
  );
};

export default Expense;
