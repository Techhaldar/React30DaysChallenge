import { useState } from "react";

function Buttons() {
  const [color, setColor] = useState("gray")
  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="Container flex justify-center">
          <button className="button-1" onClick={() => setColor('red')}>Red</button>
          <button className="button-2" onClick={() => setColor('Green')} >Green</button>
          <button className="button-3" onClick={() => setColor('Blue')} >Blue</button>
          <button className="button-4" onClick={() => setColor('Gray')} >Gray</button>
          <button className="button-5" onClick={() => setColor('Yellow')} >Yellow</button>
          <button className="button-6" onClick={() => setColor('Pink')} >Pink</button>
          <button className="button-7" onClick={() => setColor('Purple')} >Purple</button>
          <button className="button-8" onClick={() => setColor('Lavender')} >Lavender</button>
          <button className="button-9" onClick={() => setColor('White')}>White</button>
          <button className="button-10" onClick={() => setColor('Black')}>Black</button>
        </div>
      </div>
    </>
  )
}

export default Buttons;