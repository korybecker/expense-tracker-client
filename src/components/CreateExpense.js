import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const CreateExpense = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [recurring, setRecurring] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleRecurringChange = () => {
    setRecurring(!recurring);
  };

  const createExpense = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/expenses", {
        title,
        amount,
        recurring,
      })
      .then((res) => {
        navigate("/expenses");
      })
      .catch((e) => {
        console.error(e);
      });
    setTitle("");
    setAmount(0);
    setRecurring(false);
  };

  return (
    <div className="container">
      <h1>Create an Expense</h1>
      <form onSubmit={createExpense}>
        <div className="form-group">
          <label>Title: </label>
          <input
            required
            autoComplete="off"
            type="text"
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
        <button type="submit" className="btn btn-lg btn-info">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default CreateExpense;
