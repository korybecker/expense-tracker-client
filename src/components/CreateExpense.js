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
  };

  return (
    <div className="container">
      <h1>Create an Expense</h1>
      <div className="border rounded pl-4">
        <form onSubmit={createExpense}>
          <div className="form-group m-4">
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
          <div className="form-group m-4">
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
          <div className="form-group m-4">
            <label>Recurring: </label>
            <br></br>
            <input
              name="recurring"
              amount="recurring"
              checked={recurring}
              onChange={handleRecurringChange}
              type="checkbox"
            ></input>
          </div>
          <button type="submit" className="btn btn-lg btn-info m-4">
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateExpense;
