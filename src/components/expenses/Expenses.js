import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const [filterYear, setYear] = useState(2020);
    const getFilterYear = (year) => {
        setYear(year);
    };
    let expenses = props.items.filter(
        (expense) =>
            filterYear.length < 1 ||
            new Date(expense.date).getFullYear() === filterYear
    );
    let expenseContent = <p className="text-warning">No expenses found!</p>;
    if (expenses.length > 0) {
        expenseContent = expenses.map((expense, i) => (
            <ExpenseItem
                key={i}
                expense={expense}
                editExpense={props.editExpense}
                deleteExpense={props.deleteExpense}
            />
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                onChangeFilter={getFilterYear}
            />
            {expenseContent}
        </Card>
    );
};

export default Expenses;
