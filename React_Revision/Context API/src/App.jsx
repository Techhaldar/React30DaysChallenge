import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
