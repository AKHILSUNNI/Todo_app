import React,{useState} from 'react'
import TodoList from './TodoList'
import Todo from './Todo'

function TodoForm() {
     const [todos,setTodos] = useState([])
        const addtodos = (todo) => {
            if(!todo.text || /^\s*$/.test(todo.text)){
                return
            }
            const newTodos = [todo,...todos]
            setTodos(newTodos)
        }

        const update = (edit_id,edit_value) =>{
            if(!edit_value.text || /^\s*$/.test(edit_value.text)){
                return
            }
            setTodos((prev)=> prev.map((todo)=> (todo.id === edit_id)? edit_value : todo))
        }

        const deleteList = (id) => {
            const deleted = todos.filter((todo)=> todo.id !== id)
            setTodos(deleted)
        }

        const complete = (id) => {
            const changed = todos.map((todo) =>{
                if(todo.id === id){
                    todo.isComplete = !todo.isComplete
                }
                return todo
            })
            setTodos(changed)
        }

     return(
         <div>
             <h1 className = "text"><u>CREATE YOUR OWN TODO LIST</u></h1>
             <TodoList onSubmit = {addtodos}/>
             <Todo todos = {todos} deleteList = {deleteList} update = {update} complete = {complete}/>
         </div>
     )
}

export default TodoForm
