import './App.css'
import Card from './components/Card'
function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      <br />
      <Card username="Ratin Haldar" Position="Software Engineer" Profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gCy523X9MfRemJP7jzukQrTLdDbthzyl2A&s" />
      <br />
      <Card Position="Army Man" Profile="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />

    </>
  )
}

export default App
