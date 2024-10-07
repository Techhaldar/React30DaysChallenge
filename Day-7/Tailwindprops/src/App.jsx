import './App.css'
import Card from './components/Card';
function App() {

  let myObj = {
    username: "Ratin",
    age: 22
  }
  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className="bg-green-600 p-4 text-black rounded-xl font" >Tailwind and Props</h1><br />
      <Card username="techhaldar" about="YouTuber" url = "https://yt3.googleusercontent.com/ZN_q_Bt-rbQukezohW-37HzUmP68KYEwUBSzzkQmXyFsNLeRT0zuOBEWqBIUnp_P2r-ptjZ83Q=s900-c-k-c0x00ffffff-no-rj"></Card><br />
      <Card username="Ratin Haldar" about="Full Stack Web Developer" url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBE8uCMSRqM0NshoUpcjrhIbiupB9xQ613A&s"></Card>

    </>
  )
}

export default App
import { } from 'react';
