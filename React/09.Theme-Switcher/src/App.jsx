import { useEffect , useState } from 'react'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
function App() {
const [themeMode,setthemeMode]=useState("light")

let lightTheme = ()=>{  //declaring and putting values herer will directly express orignal function just name should be same.
  setthemeMode("light")
}

let darkTheme = ()=>{
  setthemeMode("dark")
}

//actual change

useEffect(()=>{

const htmlbody= document.querySelector('html')
htmlbody.classList.remove("light","dark")
htmlbody.classList.add(themeMode)

},[themeMode])
 

return (
   <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
 <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
 </div>
        </ThemeProvider>     

  )
}

export default App
