import { useState } from "react"


function App() {
const [color,setColor] = useState("#002222")
  


return (
    <>
   <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}} >
   

   <div className="fixed flex flex-wrap
   justify-center bottom-12 inset-x-0 px-2">

   <div className="flex flex-wrap justify=center
   gap-3 shadow-lg bg-white px-3 px-3 py-2 rounded-3xl"> 

  <button 
  onClick={()=> setColor("red")} className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"red"}}>red
  </button>
  <button
  onClick={()=> setColor("green")}  className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"Green"}}>Green
  </button>
  <button 
  onClick={()=> setColor("blue")} className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"blue"}}>blue
  </button>
  <button 
  onClick={()=> setColor("yellow")} className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"yellow"}}>yellow
  </button>
  <button 
  onClick={()=> setColor("pink")} className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"pink"}}>pink
  </button>
  <button 
  onClick={()=> setColor("olive")} className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor:"olive  "}}>olive
  </button>
   </div>
   </div>
   </div>


    </>
  )
}

export default App
