import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Expense from "./Expense";

const Expenses = () => {
  const navigate = useNavigate();
  const [deletedIndicator, setDeletedIndicator] = useState(true);
  const [expenses, setExpenses] = useState([
    {
      title: "",
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
  }, [deletedIndicator]);

  const renderExpenses = expenses
    .slice(0)
    .reverse()
    .map((expense, index) => {
      return (
        <Expense
          key={index}
          id={expense._id || 0}
          title={expense.title}
          amount={expense.amount}
          recurring={expense.recurring}
          deleteExpense={() => {
            axios
              .delete(
                `https://expense-tracker-kb.herokuapp.com/api/v1/expenses/${expense._id}`
              )
              .then((res) => {
                navigate("/expenses");
                setDeletedIndicator(!deletedIndicator);
              })
              .catch((e) => console.log(e));
          }}
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
