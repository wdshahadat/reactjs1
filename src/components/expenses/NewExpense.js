import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm
                editExpense={props.editExpense}
                expenseHandler={props.expenseHandler}
            />
        </div>
    );
};

export default NewExpense;
