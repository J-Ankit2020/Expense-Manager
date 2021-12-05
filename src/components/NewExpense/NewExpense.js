import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = props => {
  const [showButton, setShowButton] = useState(true);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowButton(true);
  };
  const hideBtnHandler = () => {
    setShowButton(false);
  };
  const showBtnHandler = () => {
    setShowButton(true);
  };
  return (
    <div className="new-expense">
      {showButton && (
        <button type="button" onClick={hideBtnHandler}>
          Add New Expense
        </button>
      )}
      {!showButton && (
        <ExpenseForm
          onSaveExpense={saveExpenseDataHandler}
          onCancel={showBtnHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
