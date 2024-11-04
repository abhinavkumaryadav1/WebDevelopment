document.addEventListener('DOMContentLoaded',()=>{


const todoinput = document.getElementById('todo-input');
const addtaskbtn = document.getElementById('add-task-btn');
const todolist= document.getElementById('todo-list')


let task = JSON.parse(localStorage.getItem("task")) || []
task.forEach((item)=> renderTask(item,task))

addtaskbtn.addEventListener('click', ()=>{
     let inputtext = todoinput.value.trim()
     if(inputtext==="") return

     let newtask = {

        text: inputtext,
        id:Date.now(),
        completed:false
     }

     task.push(newtask)
     saveit();
     renderTask(newtask)
     todoinput.value = ""
    //  console.log(task);
     
})

function saveit(){
    localStorage.setItem("task",JSON.stringify(task));
}
})

function renderTask(item,task){
const li = document.createElement('li')
// li.setAttribute("data-id",'item-id')   // comenting it does nothing i dont know why it is even used
if(item.completed) li.classList.add("completed")
li.innerHTML = `
<span>${item.text}</span>
<button>Delete </button>`;
li.addEventListener('click',(e)=>{
    if(e.target === "BUTTON") return
    item.completed =!item.completed
    li.classList.toggle('completed')
    saveit()
})

li.querySelector('button').addEventListener('click',(e)=>{
    e.stopPropagation()
    task = task.filter((t)=>t.id !== item.id)
    li.remove()
    localStorage.setItem("task",JSON.stringify(task));  
})
// todolist.appendchild(li)  -->same as below
document.getElementById('todo-list').appendChild(li)   
}