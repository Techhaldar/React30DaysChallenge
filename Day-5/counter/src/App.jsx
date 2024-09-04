import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(10)
  const addValue = () => {
    // console.log("clicked", Counter);
    // Counter++;
    if(Counter < 20){
      setCounter(++Counter)
      
    }

  }

  const removeValue = () => {
    if(Counter > 0){
      setCounter(--Counter)
      
    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {Counter}</h2>
      <button
        onClick={addValue}
      >Add Value {Counter}</button>
      <br />
      <br />

      <button
        onClick={removeValue}
      >Remove Value {Counter}</button>

    </>
  )
}

export default App
