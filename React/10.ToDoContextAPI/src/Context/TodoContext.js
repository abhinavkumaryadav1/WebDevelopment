import  { createContext,useContext } from 'react'

export const TodoContext= createContext(
  {
  todos:[
  {
    id:1,
    todo:"new todo",
    completed:false
  }
],

  addTodo:(todo) =>{},
  updateTodo:(id,todo) =>{},
  deleteTodo:(id) =>{},
  togleComplete:(id) =>{}

}
);
 
export const useTodo= () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider