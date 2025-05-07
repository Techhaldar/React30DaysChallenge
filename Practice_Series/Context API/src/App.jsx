import './App.css'
import ChildA from './component/ChildA'
import { createContext, useState } from 'react'
// Step 1 : create Context
const UserContext = createContext()
// Step 2: wrap all the child inside a provider
// step 3: consumer k andar jaake consume karlo

function App() {
const [user, setUser] = useState({name:"Ratin"})
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}