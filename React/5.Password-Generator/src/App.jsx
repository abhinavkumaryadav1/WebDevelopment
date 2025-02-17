import { useState,useCallback,useEffect, useRef } from 'react'


function App() {
  let [length,setlenght] = useState(8)
  let [numberAllowed,setnumberAllowed] = useState(false)
  let [charAllowed,setCharAllowed] = useState(false)
  let [Password,setPassword] = useState("")
  //useref hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(()=>{

  let pass = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed)   str+= "0123456789"
  if (charAllowed)   str+= "!@#$%^&*(){}_-+=[]~'"

  for (let i = 1; i <=length; i++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)

    
  }
  
  setPassword(pass)

  },[length, numberAllowed , charAllowed , setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordref.current?.select()
  window.navigator.clipboard.writeText(Password)
},[Password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md
rounded-lg px-4 py-8 my-8 bg-gray-800 text-orange-500 '>
<h1 className='text-white text-center my-3'>Password Generator</h1>

<div className="flex shadow rounded-lg overflow-hidden mb-4">

<input type="text"
value={Password} 
className='outline-none w-full py-1 px-3'
placeholder='Password'
readOnly
ref = {passwordref}/>

<button
onClick={copyPasswordToClipboard} 
className='outline-none bg-blue-700 text-white px-3
py-0.5 shrink-0'
>Copy </button>

</div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>

    <input type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer' 
    onChange={(e)=>{setlenght(e.target.value)}}
    />
<label>Lenght: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={()=>{
      setnumberAllowed((prev)=>!prev)
    }} 
    />
    <label htmlFor="numberInput">Number</label>
  </div>
  <div className='flex items-center gap-x-1'>
  <input type="checkbox"
    defaultChecked={charAllowed}
    id="characterInput"
    onChange={()=>{
      setCharAllowed((prev)=>!prev)
    }} 
    />
    <label htmlFor="numberInput">Character</label>
  </div>
</div>
</div>

  </>





)

}

export default App
