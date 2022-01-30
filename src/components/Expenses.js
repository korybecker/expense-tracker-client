import React, { useState, useEffect } from "react";
import Expense from "./Expense";

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {
      title: "poo",
      amount: 0,
      recurring: false,
    },
  ]);

  useEffect(() => {
    const getExpenses = async () => {
      await fetch("https://expense-tracker-kb.herokuapp.com/api/v1/expenses")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) => setExpenses(jsonRes.expenses))
        .catch((e) => console.error(e));
    };
    getExpenses();
  }, []);
  return (
    <div className="container">
      <h1>My Expenses</h1>
      {expenses.map((expense) => (
        <Expense
          key={expense.title}
          title={expense.title}
          amount={expense.amount}
          recurring={expense.recurring}
        />
      ))}
    </div>
  );
};

export default Expenses;
