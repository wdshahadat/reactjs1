import React from "react";

import "./ExpenseForm.css";

function dateFormate(dateObj) {
    dateObj = new Date(dateObj);
    let month = dateObj.getMonth()+1;
    month = month < 9 ? '0'+month : month;
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    return [year, month, day].join("-");
}

const ExpenseForm = (props) => {
    let edit = props.editExpense
    const form = document.querySelector("form");
    const fields = document.querySelectorAll(".fields input");

    if (edit.id) {
        Array.from(fields).map(field => {
            field.value =
                field.name === "date"
                    ? dateFormate(edit[field.name])
                    : edit[field.name];
            return field;
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let expense = {};
        Array.from(fields).map((field) => {
            expense[field.name] = field.value;
            return expense[field.name];
        });

        if (Object.values(expense).filter((v) => v.length > 1).length >= 3) {
            expense.date = new Date(expense.date);
            expense.id = edit.id ? edit.id : false;
            props.expenseHandler(expense);
            form.reset();
        } else if (e.target.textContent === "Reset") {
            props.expenseHandler({});
            form.reset();
        }
    };
    const submitButton = `btn btn-sm ${edit.id ? 'btn-warning ' : 'btn-info'}`;
    const closeButton = edit.id ? <button type="submit" className="btn btn-sm btn-dark">Reset</button> : false;
    return (
        <form action="POST" onSubmit={submitHandler}>
            <div className="new-expense__controls fields">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        name='title'
                        type="text"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        name='amount'
                        type="number"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        name='date'
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button className={submitButton} type="submit">
                    {edit.id ? "Edit " : "Add "} Expense
                </button>{ closeButton }
            </div>
        </form>
    );
};

export default ExpenseForm;
