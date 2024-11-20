import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 border rounded-2xl mb-5' >Tailwind Test</h1>

      <Card profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gCy523X9MfRemJP7jzukQrTLdDbthzyl2A&s" firstName="Ratin Haldar" position="Software Engineer" about="A software engineer builds and maintains software to solve problems." />

      <Card profile="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" firstName="Raj Singh" position="Indian Army" about="The Indian Army defends India's borders and ensures national security."  />
    </>
  )
}

export default App
