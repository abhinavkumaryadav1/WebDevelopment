import { useState, useEffect } from "react"
import { TodoProvider  } from "./Context"
import TodoForm from "./Components/TodoForm"
import TodoItem from "./Components/TodoItem"


function App() {
  
const [todos,setTodos] = useState([])
 
//core functionalites 
const addTodo = (todo)=>{
  setTodos((prev) => [...prev,{id:Date.now() ,...todo }])
  /*just looks complex. call sethook->if we directly put todo argument into the settodo then it will overide the list and only current todo
   will be shown thats why we first fire callback which gives previous all data then we make an empty array then spread the previos value
   in it with the corrosponding current todo data (seTodoContex file for more details)*/
}

const updateTodo = (id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id ===id? todo : prevTodo)))
}

const deleteTodo =(id)=>{setTodos((prev)=>prev.filter((todo)=>todo.id !== id))

}

const toggleComplete =(id) => {
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id ===id? {...prevTodo,completed:!prevTodo.completed} :prevTodo ))
}

useEffect(() => {

const todos= JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0)
  {
    setTodos(todos);
  }
  }
, [])

useEffect(() => {

localStorage.setItem("todos",JSON.stringify(todos))
  }
, [todos])



  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>
                         <div key={todo.id} className='w-full'>
                          <TodoItem todo={todo}/>
                        </div>
                        )}
                    </div>
                </div>
            </div>
    console.log("ping");
    
    </TodoProvider>
  )
}

export default App
