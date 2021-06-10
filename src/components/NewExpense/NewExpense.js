import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
   const saveExpenseHandler = (enteredExpense) => {
       const expenseData = {
           ...enteredExpense,
           id : Math.random().toString()
       };

       props.onSaveNewExpenseData(expenseData);

   };

   return (
       <div className="new-expense">
           <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
       </div>
   );
};

export default NewExpense;