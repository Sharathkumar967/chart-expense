import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selecedYear) => {
    setFilteredYear(selecedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    
    <Card className="expenses">
      <ExpensesFilter
        seleced={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses ={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
    
  );
};

export default Expense;
