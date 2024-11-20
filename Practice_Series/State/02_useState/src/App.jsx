import { useState } from 'react'
import './App.css'

function App() {

  let [count, Setcount] = useState(15)

  const addValue = () => {
    if (count < 20) {
      Setcount(count + 1);
    } else {
      Setcount(count)
    }
  }

  const removeValue = () => {
    if (count > 0) {
      Setcount(count - 1);
    } else {
      Setcount(count)
    }
  }
  return (
    <>
      <div className='border-solid border-red-600 border-2 p-12 bg-gray-800'>
        <div className='mb-10'>Value : {count}</div>
        <button className='mr-2 bg-blue-500' onClick={addValue}>Add Value</button>
        <button className='ml-2 bg-blue-500' onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App
