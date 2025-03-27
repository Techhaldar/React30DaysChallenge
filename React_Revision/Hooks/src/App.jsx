import { useState } from "react";

function App() {
  let [Counter, setCounter] = useState(15)


  function AddValue() {
    setCounter(Counter + 1)
  }
  function RemoveValue() {
    setCounter(Counter - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {Counter}</h2>
      <button onClick={AddValue}>Add Value: {Counter}</button>
      <br /><br />
      <button onClick={RemoveValue}>Remove Value: {Counter}</button>
    </>
  )
}

export default App
