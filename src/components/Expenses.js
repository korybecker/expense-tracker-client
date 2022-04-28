import React, { useEffect, useState } from "react";
import axios from "axios";
import Expense from "./Expense";
import { useNavigate } from "react-router-dom";

const Expenses = (props) => {
  const [expenses, setExpenses] = useState();
  const [total, setTotal] = useState(0);

  // "deleted" indicator to rerender expenses when delete is pressed
  const [deletedIndicator, setDeletedIndicator] = useState(true);

  useEffect(() => {
    let mounted = true;
    axios
      .get("https://expense-tracker-kb.herokuapp.com/api/v1/expenses")
      .then((res) => {
        if (mounted) {
          setExpenses(res.data);
          let totalAmount = 0;
          res.data.expenses.forEach((expense) => {
            totalAmount += expense.amount;
          });
          setTotal(totalAmount);
        }
      })
      .catch((e) => console.log(e));
    return () => {
      mounted = false;
    };
  }, [deletedIndicator]);

  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/expenses");
  // }, [deletedIndicator]);

  return (
    <div className="container">
      <div>
        <h1>Our Expenses</h1>
        <h4>Total Magnitude of Expenditure: ${total}</h4>
      </div>

      {expenses &&
        expenses.expenses
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
                      setDeletedIndicator(!deletedIndicator);
                    })
                    .catch((e) => console.log(e));
                }}
                updateExpense={() => navigate(`/update/${expense._id}`)}
              />
            );
          })}
    </div>
  );
};

export default Expenses;
