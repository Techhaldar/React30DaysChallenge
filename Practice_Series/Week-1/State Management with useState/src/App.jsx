import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count < 25){
      setCount(count + 1)
    }
    else{
      setCount(count)
    }
  }
  const removeValue = () => {
    if(count > 0){
      setCount(count - 1)
    }
    else{
      setCount(count)
    }
  }

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button className='m-4' onClick={addValue}>Increase Value</button>
        <button className='m-4' onClick={removeValue}>Decrease Value</button>
      </div>
    </>
  )
}

export default App
