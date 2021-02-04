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

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />

            <Button onClick = {addition}>Add it</Button>
            <p>{counter}</p>
        </header>
    )
}

export default Header