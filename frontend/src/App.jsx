import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

import Todos from './components/Todos'
import CreateToDo from './components/CreateToDo'

function App() {
  const  [todos, setTodos] = useState([])

  // execute at runtime get data from API
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/todo/")
    .then(response => response.json())
    .then(data => setTodos(data))
  })

  const onUpdateTodo = (onUpdateTodo) => {
    setTodos(todos.map(todo => (todo.id == onUpdateTodo.id ? onUpdateTodo : todo)))
     
  }



  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-7 mx-auto my-5'>
        <CreateToDo />
        <Todos todos={todos} setTodos={setTodos} onUpdateTodo={onUpdateTodo}/>


        </div>
      </div>
    </div>
  )
}

export default App

