import React from 'react'
import UseState from './UseState'
import UseEffect from './UseEffect'
import UseContext from './UseContext'
import UseRefwithFunctionComponent from './UseRef-with-FunctionComponent'
import UseRefwithClassComponent from './UseRef-with-ClassComponent'

function App() {
  return (
    <div>
      <UseState/>
      <hr></hr>
      <UseEffect/>
      <hr></hr>
      <UseContext/>
      <hr/>
      <UseRefwithFunctionComponent/>
      <hr/>
      <UseRefwithClassComponent/>
    </div>
  )
}

export default App