//This file deals with expense items 
import React, {useState} from 'react';
import './expenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem (props) {
    
    const [title, setTitle] = useState(props.title);
    //title = pointer to props.title
    //setTitle is a function that makes the comp function execute again
    
    
    const clickHandler = () => {
       setTitle("New");
    };
    
    return (
    <Card className="expense-item">
       
        <ExpenseDate date={props.date}/>
        
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        
    </Card>
    );

    }

export default ExpenseItem;