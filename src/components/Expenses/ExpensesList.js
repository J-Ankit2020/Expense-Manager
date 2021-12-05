import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = props => {
  const { filteredArray } = props;
  if (filteredArray.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredArray.map(expense => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
};
export default ExpensesList;
