import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    //One way of handling States
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    //2nd way of handling states
    // const [userInput, setUserIntput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(enteredTitle)
        //oneway
        // setUserIntput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        //another way
        // setUserIntput((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // console.log(enteredDate)
        // setUserIntput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        // setUserIntput((prevState)=>{
        //     return {...prevState, enteredDate:event.target.value}
        // })
        // console.log(userInput)

    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // console.log(enteredAmount)
        // setUserIntput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
        // setUserIntput((prevState)=>{
        //     return {...prevState, enteredAmount:event.target.value}
        // })
        // console.log(userInput)
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        const userData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(userData)
        props.onSavedEnteredData(userData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    }
    return <div>
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" value={enteredAmount} step="0.01" onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    </div>
}

export default ExpenseForm;