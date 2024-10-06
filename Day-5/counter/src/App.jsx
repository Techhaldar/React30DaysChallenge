import {useState} from 'react';

function App() {

 let [counter, setCounter] = useState(15)

  // let counter = 25;

  const addValue = () => {
    console.log("clicked", Math.random(), counter)
    setCounter(counter + 1)
  }
  const removeValue = () => {
    console.log("clicked", Math.random(), counter)
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button><br /><br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )

}

export default App;
