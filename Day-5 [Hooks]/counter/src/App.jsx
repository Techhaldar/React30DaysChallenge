import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  const addValue = () => {
    if (counter < 24) {
      setcounter(++counter)
    } else {
      setcounter(counter)
    }


  }
  const removeValue = () => {
    if (counter > 0) {
      setcounter(--counter)
    } else {
      setcounter(counter)
    }
    console.log("Button Clicked", counter)
  }

  return (
    <>
      <h1>React with Hitesh Chaudhary</h1>
      <h1>Counter Value : {counter}</h1>

      <button onClick={addValue}>Add Value: {counter}</button>
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
