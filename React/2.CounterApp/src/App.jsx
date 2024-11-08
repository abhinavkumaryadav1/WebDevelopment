import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  let [counter,setCounter]= useState(15) /* ye ek type of hook hai jo array return karta hai current state aur use set 
  karne ka variable, naam kuch bhi rakh sakte hai variable ka aur intial state bhi batani padti hai (isko use isiliye
   karte hai cuz react khud changes lata hai UI me directly variable updaate karke changes nhai ajate)*/
  

  const addValue = ()=>{    // aise update karte hai values ko counter ki
counter=counter+1
setCounter(counter)

  }

  const removeValue = ()=>{
    if (counter!=0) {
      counter=counter-1
    setCounter(counter)
    }
    
  }

  return(
    <>
    <h1>Abhinav aur uski Ego</h1>
    <h2>counter value: {counter}</h2>

    <button
    onClick={addValue}
    > Add Value</button>
    <br/>
    <button
    onClick={removeValue}
    > Remove Value</button>
    </>
  )
}

export default App

