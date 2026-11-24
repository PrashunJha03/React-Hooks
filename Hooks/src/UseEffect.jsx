import { useEffect, useState } from 'react'
function UseEffect()
{
 
  let [counter, setCounter] = useState(0)
  let [counter1, setCounter1] = useState(10)
  useEffect(()=>{
  console.log("Comp Loaded To Browser First Time")
  },[]);
  useEffect(()=>{
  console.log("Ctr1 Changed Comp Reloaded")
  },[counter]);
	function IncreaseValue()
	{
	    setCounter(counter+1)
	    console.log(counter);
	}
  function IncreaseValue1()
	{
	    setCounter1(counter1+1)
	    console.log(counter1);
	}
	return (
    	<>
     	 <h1>UseEffect Example</h1>
     	 <h2>Counter value : {counter} </h2>
      	<button onClick={IncreaseValue}>First Ctr Increment</button> {" "}
        <button onClick={IncreaseValue1}>Second Ctr Increment</button> {" "}
      	<p>footer: {counter1}</p>
    </>)
}
export default UseEffect;