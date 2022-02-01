import React, { useEffect, useState } from "react";
import axios from "axios";
import Expense from "./Expense";
import { useNavigate } from "react-router-dom";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [deletedIndicator, setDeletedIndicator] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/expenses");
  }, [deletedIndicator]);

  return (
    <div className="container">
      <h1>My Expenses</h1>
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
