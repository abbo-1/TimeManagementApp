import Button from './Button'
import React from "react"

const Header = ({title, onAdd, showAdd}) => {

    const {useState} = React;

    const [counter, setCounter] = useState(0);

    const addition = () => {
        setCounter(counter + 1);
    }
    
    const subtraction = () => {
        setCounter(counter - 1);
    }

    return (
        <header className='header'>

            <h1>{title}</h1>
            <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick = {onAdd}>
            </Button>
{/* 
            <Button color='green' text='Add 1' onClick = {addition}></Button>
            <Button color='red' text='Subtract 1' onClick = {subtraction}></Button> */}

            {/* <p>{counter}</p> */}

        </header>
    )
}

export default Header