import { useState } from 'react';

export default function Counter() {

    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
    setCounter( (prev) => prev + 1);
    }

    const decrementCounter = () => {
    setCounter( (prev) => prev - 1);
    }

    return (
        <>
            <div className='space'>
                <h1>This is a counter</h1>
                <p>Counter value: {counter}</p>
                <button id='increment' className='btn btn-outline-success me-2' onClick={incrementCounter}>Increment</button>
                <button id='decrement' className='btn btn-outline-info' onClick={decrementCounter}>Decrement</button>
            </div>
        </>
    )
}