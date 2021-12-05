import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const saveFilterYearHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredArray = props.items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveFilterYear={saveFilterYearHandler}
          year={filteredYear}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList filteredArray={filteredArray} />
      </Card>
    </div>
  );
};
export default Expenses;
