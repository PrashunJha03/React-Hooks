import React from 'react'
import {useState} from 'react'
function UseState() {
    let [counter, setCounter ] = useState(0)
    
    function IncreaseValue()
    {
        setCounter(counter + 1)
        console.log(counter)
    }

    function DecreaseValue()
    {
        setCounter(counter - 1)
        console.log(counter)
    }
  return (
    <div>
        <h1>UseState Example</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={IncreaseValue}>Increment</button>{" "}
        <button onClick={DecreaseValue}>Decrement</button>{" "}
        <p>footer : {counter}</p>
    </div>
  )
}

export default UseState