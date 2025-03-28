import { useState } from "react";

function App() {
  let [Counter, setCounter] = useState(15)


  function AddValue() {
    if (Counter < 20) {
      setCounter(Counter + 1)
    } else (Counter)
  }
  function RemoveValue() {
    if (Counter > 0) {
      setCounter(Counter - 1)
    } else (Counter)
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
