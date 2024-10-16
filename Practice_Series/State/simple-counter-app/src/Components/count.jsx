import { useState } from "react";



function Counter() {
  const [Count, setcount] = useState(0);
  
  return (
  <>
    <button onClick={() => setcount(Count + 1)}>Add: {Count} </button>
    
    <button onClick={() => setcount(Count - 1)}>Sub: {Count} </button>
    
  </>
  )
}

export default Counter