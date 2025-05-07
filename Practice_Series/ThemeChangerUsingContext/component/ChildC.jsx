import React, { useContext } from 'react'

import {ThemeContext} from '../src/App'
const ChildC = () => {
  const {theme , setTheme} = useContext(ThemeContext);

  
  return (
    <div>
      <button onClick={() => {
        if(theme === "light")
          setTheme('dark')
        else
          setTheme('light')
      }}>Change Theme</button>
    </div>
  )
}

export default ChildC