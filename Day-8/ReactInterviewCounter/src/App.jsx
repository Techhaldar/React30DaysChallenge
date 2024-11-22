import { useState } from 'react'

import './App.css'

function App() {
  const [count, setcount] = useState(10)

  const addValue = () => {
    setcount(count + 1);
    setcount(count => count + 1);
    setcount(count => count + 1);

  }
  const removeValue = () => {
    setcount(count - 1);
  }


  return (
    <>
      <div>Value: {count}</div>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
