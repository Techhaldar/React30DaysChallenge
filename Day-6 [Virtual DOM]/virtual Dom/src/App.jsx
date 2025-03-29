import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  const addValue = () => {
    if (counter < 24) {
      setcounter(counter + 1)
    } else {
      setcounter(counter)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1)
    } else {
      setcounter(counter)
    }
  }

  return (
    <>
      <h1>React Add Value & Remove Value</h1>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
