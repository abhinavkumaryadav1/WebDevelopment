import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    
    const [todo,setTodo]= useState("")

    const {addTodo}  = useTodo()

    const add = (e)=>{
        e.preventDefault()

        addTodo({todo:todo, completed:false})//you cannot put just todo here cuz in app.jsx u used it like object and spread it so use object and its inside value to assign in new todo
        setTodo("") // for emptying the feild in which you put todo.
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

