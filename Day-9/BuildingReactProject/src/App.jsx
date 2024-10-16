import { useState } from 'react'

function App() {

  const [color, setColor] = useState("gray")

  return (

    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-lime-600 px-3 py-2 rounded-3xl">

          <button onClick={() => setColor('red')} className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor('blue')} className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={() => setColor('orange')} className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}>Orange</button>

          <button onClick={() => setColor('yellow')} className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button onClick={() => setColor('skyblue')} className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "skyblue" }}>SkyBlue</button>

          <button onClick={() => setColor('purple')} className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor('Lavender')} className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Lavender" }}>Lavender</button>

          <button onClick={() => setColor('Black')} className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Black" }}>Black</button>

          <button onClick={() => setColor('pink')} className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}>Pink</button>

          <button onClick={() => setColor('white')} className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}>White</button>
        </div>
      </div>
    </div>
  )
}
export default App;

