import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = props => {
  const expenseNumber = props.expense.amount;
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">${expenseNumber}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
