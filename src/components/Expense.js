import axios from "axios";
import React from "react";

const Expense = (props) => {
  const deleteExpense = (e) => {
    e.preventDefault();
    console.log({ props });
    axios
      .delete(`/api/v1/expenses/${props.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
  console.log({ props });
  return (
    <div className="bg-light container card">
      <div>
        <h1>{props.title}</h1>
        <p>${props.amount}</p>
      </div>
      <div>
        <button onClick={deleteExpense}>Delete</button>
      </div>
    </div>
  );
};

export default Expense;
