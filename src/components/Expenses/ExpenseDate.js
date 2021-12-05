import './ExpenseDate.css';
function ExpenseDate(props) {
  const { date } = props;
  const expenseMonth = date.toLocaleString('en-US', { month: 'long' });
  const expenseYear = date.getFullYear();
  const expenseDay = date.toLocaleString('en-US', {
    day: '2-digit',
  });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__day">{expenseDay}</div>
      <div className="expense-date__year">{expenseYear}</div>
    </div>
  );
}
export default ExpenseDate;
