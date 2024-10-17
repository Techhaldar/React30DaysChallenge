import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  return (
    <>
      <button onClick={() => setcount(count + 1)}>+ Button {count}</button>
      <button onClick={() => setcount(count - 1)}> - Button {count}</button>
    </>
  )
}

export default Counter