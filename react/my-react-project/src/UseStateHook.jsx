import React, {useState} from 'react'

function UseStateHook() {
    let [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <div className="counter-block">
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UseStateHook;