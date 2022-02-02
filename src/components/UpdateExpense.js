import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";

const UpdateExpense = (props) => {
  const [expenses, setExpenses] = useState(props.expenses.expenses);
  const { id } = useParams();

  const expense = expenses.filter((expense) => expense._id === id)[0];

  const navigate = useNavigate();
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [recurring, setRecurring] = useState(expense.recurring);

  // useEffect to get updated version of expense
  useEffect(() => {
    let mounted = true;
    axios
      .get("https://expense-tracker-kb.herokuapp.com/api/v1/expenses")
      .then((res) => {
        if (mounted) {
          console.log(res);
          setExpenses(res.data.expenses);
          setTitle(
            res.data.expenses.filter((expense) => expense._id === id)[0].title
          );
          setAmount(
            res.data.expenses.filter((expense) => expense._id === id)[0].amount
          );
          setRecurring(
            res.data.expenses.filter((expense) => expense._id === id)[0]
              .recurring
          );
        }
      })
      .catch((e) => console.log(e));
    return () => {
      mounted = false;
    };
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleRecurringChange = () => {
    setRecurring(!recurring);
  };

  const updateExpense = (e) => {
    e.preventDefault();
    const send = {
      title,
      amount,
      recurring,
    };
    axios
      .put(`/api/v1/expenses/${id}`, send)
      .then((res) => {
        navigate("/expenses");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container">
      <h1>Update an Expense</h1>
      <div className="border rounded pl-4">
        <form onSubmit={updateExpense}>
          <div className="form-group m-4">
            <label>Title: </label>
            <input
              autoComplete="off"
              type="text"
              value={title}
              name="title"
              id="title"
              className="form-control"
              onChange={handleTitleChange}
            ></input>
          </div>
          <div className="form-group m-4">
            <label>Amount: </label>
            <input
              required
              autoComplete="off"
              type="number"
              value={amount}
              name="amount"
              id="amount"
              className="form-control"
              onChange={handleAmountChange}
            ></input>
          </div>
          <div className="form-group m-4">
            <label>Recurring: </label>
            <input
              name="recurring"
              amount="recurring"
              checked={recurring}
              onChange={handleRecurringChange}
              type="checkbox"
            ></input>
          </div>
          <div className="btn-toolbar m-4">
            <div>
              <button
                type="button"
                value="Cancel"
                onClick={() => navigate("/expenses")}
                className="btn btn btn-secondary btn-group"
              >
                Cancel
              </button>
            </div>

            <div className="ml-2">
              <button type="submit" className="btn btn btn-info btn-group">
                Update Expense
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateExpense;
