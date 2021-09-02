import React, { Component } from "react";
import "./components/UI/style.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense";
const expenses = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: expenses,
            editExpense: {},
        };
    }
    render() {
        const expenseHandler = (expense) => {
            let expenses = this.state.expenses;
            if (expense.id) {
                expenses = expenses.map((item) => expense.id === item.id ? expense : item);
            } else if (expense.title) {
                let id = expenses[expenses.length - 1].id;
                expense.id = "e" + (parseInt(id.slice(1)) + 1);
                expenses = [expense, ...expenses];
            }
            this.setState({ expenses, editExpense: {} });
        };
        const editExpense = (id) => {
            this.setState({
                editExpense: this.state.expenses.find((exp) => exp.id === id),
            });
        };
        const deleteExpense = (id) => {
            this.setState({
                expenses: this.state.expenses.filter((el) => el.id !== id),
            });
        };
        return (
            <div>
                <NewExpense
                    editExpense={this.state.editExpense}
                    expenseHandler={expenseHandler}
                ></NewExpense>
                <Expenses
                    items={this.state.expenses}
                    editExpense={editExpense}
                    deleteExpense={deleteExpense}
                ></Expenses>
            </div>
        );
    }
}

export default App;
