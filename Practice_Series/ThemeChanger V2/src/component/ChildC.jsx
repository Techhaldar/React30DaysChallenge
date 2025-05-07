import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
   const { theme, setTheme } = useContext(ThemeContext)
   return (
      <div>
         <button onClick={() => {
            if (theme === 'light')
               setTheme('dark')
            else
               setTheme("light")
         }}>Theme Change</button>
      </div>
   )
}

export default ChildC