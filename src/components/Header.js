import Button from './Button'
import React from "react"

const Header = ({title}) => {

    const onClick = () => {
        console.log('Bananas')
    }

    const {useState} = React;

    const [counter, setCounter] = useState(0);


    const addition = () => {
        setCounter(counter + 1);
    }
    
    const subtraction = () => {
        setCounter(counter - 1);
    }

    const multiply = () => {
        setCounter(counter * 2)
    }

    const divide = () => {
        setCounter(counter / 2)
    }


    return (
        <header className='header'>
            <h1>{title}</h1>
            
            <Button color='green' text='Add' onClick={onClick} />
            Add
            <Button onClick = {addition}>Add it</Button>
            Subtract
            <Button onClick = {subtraction}>Subtract it</Button>
            Multiply
            <Button onClick = {multiply}>Multiply it</Button>
            Divide
            <Button onClick = {divide}>Divide it</Button>

            <p>{counter}</p>
        </header>
    )
}

export default Header