import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function addValue() {
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)

  }
  function removeValue() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>

      <h1 className="text-3xl font-bold underline">Counter Value: {count}</h1>
      <button className='btn' onClick={addValue}>Add Button {count}</button>
      <button className='btn' onClick={removeValue}>Remove Button {count}</button>


    </>
  )
}

export default App
