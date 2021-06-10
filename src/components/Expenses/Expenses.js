import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectedDropDownDateHandler = (selectedDate) => {
    setFilteredYear(selectedDate);
  };

  const filteredExpenseYear = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div className="expenses">
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onSelectedDropDownDate={selectedDropDownDateHandler}
        />

        <ExpensesChart expenses = {filteredExpenseYear} />

       <ExpenseList items={filteredExpenseYear} />

      </Card>
    </div>
  );
};

export default Expenses;
