import './App.css'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Counter from './Components/Counter'

function App() {

  return (
    <>
      <Header />
      <Profile 
      name = "Ratin Haldar" 
      Email = "Ratinhaldar123@gmail.com"
      Age = "22"
      />
      <Counter />
    </>
  )
}

export default App
