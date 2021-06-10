import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [eneteredAmount, setEnteredAmont] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addNewExpenseButton, setaddNewExpenseButton] = useState(false);

  const setaddNewExpenseButtonTrueHandler = () => {
    setaddNewExpenseButton(true);
  };

  const setaddNewExpenseButtonFalseHandler = () => {
    setaddNewExpenseButton(false);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHanler = (event) => {
    setEnteredAmont(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +eneteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmont("");
    setEnteredDate("");
    setaddNewExpenseButton(false);
  };

  return (
    <div>
      {addNewExpenseButton ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHanler}
                value={eneteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
                value={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={setaddNewExpenseButtonFalseHandler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={setaddNewExpenseButtonTrueHandler}>
          Add New Expense?
        </button>
      )}
    </div>
  );
};

export default ExpenseForm;
