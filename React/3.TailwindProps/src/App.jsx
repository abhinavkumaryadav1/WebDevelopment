import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name :"abhinavkyadav",
    age : 21
  }
  return (
    <>

{/* ye jo sab niche likha hai tailwind ko integrate karne ke baaad likha hai just for checking kahi se bhi utha liya hai niche ka content */}
   
   
   
    <h1 className='bg-green-900 rounded-xl mb-4'>Tailwind test</h1>

    <Card username="Abhi"  btnText="click me" />
    <Card username    ="abhinav"  btnText="click here" />

    </>
  )
}

export default App
