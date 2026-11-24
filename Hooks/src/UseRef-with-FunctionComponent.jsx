import React from 'react'
import { useRef } from 'react';
function UseRefwithFunctionComponent() {
const focusPoint = useRef(null); 
const onClickHandler = () => { 
	focusPoint.current.value = 
	"Learning React With Krishna Sir "; 
	focusPoint.current.focus(); 
}
return( 
		<div> 
            <h1>UseRef With Function Component Example</h1>
		<button onClick={onClickHandler}> 
		ACTION 
		</button> 
    <label> 
	Click on the action button to 
	focus and populate the text. 
	</label><br/> 
	<textarea ref={focusPoint} /> 
	</div> 
)
}

export default UseRefwithFunctionComponent