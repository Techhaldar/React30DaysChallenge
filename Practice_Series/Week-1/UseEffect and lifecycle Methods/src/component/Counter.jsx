import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(15)

  const INC = () => {
    setCount(count + 1)
  }

  const DEC = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.log("Counter Mounted")
    return function () {
      console.log("Unmount Counter");
    }
  }, []);

  useEffect(() => {
    console.log("Counter Mounted")
  }, [count]);
  return (
    <>
      <div className="flex flex-wrap">
        <p className="text-center p-4 text-2xl">{count}</p>
        <button className="bg-green-400 mr-2 px-10" onClick={INC}>INC</button>
        <button className="bg-red-500 ml-2" onClick={DEC}>DEC</button>
      </div>
    </>
  )
}

export default Counter;