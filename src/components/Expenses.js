import React, { useState, useEffect } from "react";
import axios from "axios";
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
    const fetchData = async () => {
      await axios
        .get("https://expense-tracker-kb.herokuapp.com/api/v1/expenses")
        .then((res) => {
          setExpenses(res.data.expenses);
        })
        .catch((e) => console.log(e));
    };
    fetchData();
  }, []);

  const renderExpenses = expenses.map((expense, index) => {
    return (
      <Expense
        key={index}
        id={expense._id}
        title={expense.title}
        amount={expense.amount}
        recurring={expense.recurring}
      />
    );
  });

  return (
    <div className="container">
      <h1>My Expenses</h1>
      {renderExpenses}
    </div>
  );
};

export default Expenses;
