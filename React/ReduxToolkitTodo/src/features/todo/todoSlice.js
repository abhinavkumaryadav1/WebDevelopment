import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1 , text:"hellow world"}]
}



export const todoSlice = createSlice({
    name: 'todo',  // name is word sesitive and come fron redux toolkit hence can't be changed
    initialState,
    reducers: {                 //this is the viable syntax just like usestate so remember this.
addTodo: (state,action) => {   //we will always have asses to state and action
                              // state tells the current state of todo what values it holds
                             // and action is for the values which we need to run the functions like id and todo Etc.
    const todo={
        id:nanoid(),         //nanoid gives unique id like date.now()
        text: action.payload //action supplies the data over payload which is bydefault an object. if ypu send text then u can acces it by payload(payload.text same thing)
    }

    state.todos.push(todo)  //best part: just update the state like this. no jhanjhat.
},

removeTodo: (state,action) => {

    state.todos= state.todos.filter(    //simply removed the value using action payload and filter method of js and simply overiden the state.todos
        (todo)=> todo.id!== action.payload)
},         
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer