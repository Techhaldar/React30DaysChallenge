import { useState } from 'react'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15)

  function AddValue() {
    if (Counter < 25) {
      setCounter(Counter + 1);
    } else {
      setCounter(Counter)
    }
  }

  function RemoveValue() {
    if (Counter > 0) {
      setCounter(Counter - 1);
    } else {
      setCounter(Counter)
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Value :{Counter}</h2>
      <button onClick={AddValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value Value</button>
    </>
  )  
}

export default App
