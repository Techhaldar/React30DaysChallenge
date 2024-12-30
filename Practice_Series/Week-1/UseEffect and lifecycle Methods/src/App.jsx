import Counter from './component/Counter'
import './App.css'
import { useState } from 'react'

function App() {

  const [state, setState] = useState(true);

  return (
    <>
      <button onClick={(e) => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""}
    </>
  )
}

export default App
