import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">
                    ${props.expense.amount}
                </div>
            </div>
            <button
                className="btn btn-sm btn-warning"
                onClick={() => {
                    props.editExpense(props.expense.id);
                }}
            >
                Edit
            </button>
            <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                    props.deleteExpense(props.expense.id);
                }}
            >
                Delete
            </button>
        </Card>
    );
};

export default ExpenseItem;
