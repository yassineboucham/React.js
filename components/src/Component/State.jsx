import React, {useState} from "react";

export default function Counter(){
     // Initialize state with useState
     const [count, setcount] = useState(0);
    // Function to handle incrementing the count
    const increment = () => {
        setcount(count + 1);
    }
    // Function to handle decrementing the count
    const decrement = () => {
        setcount(count - 1);
    }
    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    )
}