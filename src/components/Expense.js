import React from "react";

const Expense = (props) => {
  return (
    <div className="bg-light container card mb-2">
      <div className="row">
        <h1>{props.title}</h1>
      </div>
      <div className="row">
        <div className="col-md-3 mycols">
          <p>${props.amount}</p>
        </div>
        <div className="col-md-3 mycols btn-toolbar mx-3">
          <div className="mr-2">
            <button
              className="btn btn-danger ml-2"
              onClick={props.deleteExpense}
            >
              Delete
            </button>
          </div>
          <div>
            <button className="btn btn-info" onClick={props.updateExpense}>
              Update
            </button>
          </div>
        </div>
        <div className="col-md-2 mycols">
          {props.recurring && <p>Recurring</p>}
        </div>
      </div>
    </div>
  );
};

export default Expense;
