import './App.css'
import ChildA from './component/ChildA'
import { createContext, useState } from 'react'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('Light')

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }} id="main">
        <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
export {ThemeContext}
