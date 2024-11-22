import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [bgColor, setbgColor] = useState("gray");

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);


  return (
    <>
      <div className='m-5 p-2 bg-slate-50 rounded-xl bottom-12' >
        <h1 className='text-black'>BG Changer</h1>
        <button className='m-4 py-2 bg-green-400 text-black' onClick={() => setbgColor("Green")}>Green</button>
        <button className='m-4 py-2 bg-yellow-400 text-black' onClick={() => setbgColor("Yellow")}>Yellow</button>
        <button className='m-4 py-2 bg-red-400 text-black' onClick={() => setbgColor("Red")}>Red</button>
        <button className='m-4 py-2 bg-indigo-400 text-black' onClick={() => setbgColor("indigo")}>indigo</button>
        <button className='m-4 py-2 bg-purple-400 text-black' onClick={() => setbgColor("Purpule")}>Purpule</button>
        <button className='m-4 py-2 bg-blue-400 text-black' onClick={() => setbgColor("Blue")}>Blue</button>
        <button className='m-4 py-2 bg-orange-400 text-black' onClick={() => setbgColor("Orange")}>Orange</button>
        <button className='m-4 py-2 bg-amber-400 text-black' onClick={() => setbgColor("Amber")}>Amber</button>
      </div>

    </>
  )
}

export default App
