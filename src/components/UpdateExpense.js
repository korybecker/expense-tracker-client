import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";

const UpdateExpense = (props) => {
  const expenses = props.expenses.expenses;
  const { id } = useParams();

  const expense = expenses.filter((expense) => expense._id === id)[0];

  const navigate = useNavigate();
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [recurring, setRecurring] = useState(expense.recurring);

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
    console.log(send);
    axios
      .put(`/api/v1/expenses/${id}`, send)
      .then((res) => {
        console.log(res);
        navigate("/expenses");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container">
      <h1>Update an Expense</h1>
      <form onSubmit={updateExpense}>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label>Recurring: </label>
          <input
            name="recurring"
            amount="recurring"
            checked={recurring}
            onChange={handleRecurringChange}
            type="checkbox"
          ></input>
        </div>
        <div className="btn-group">
          <div>
            <button
              type="button"
              value="Cancel"
              onClick={() => navigate("/expenses")}
              className="btn btn-lg btn-secondary"
            >
              Cancel
            </button>
          </div>

          <div className="ml-2">
            <button type="submit" className="btn btn-lg btn-info">
              Update Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateExpense;
