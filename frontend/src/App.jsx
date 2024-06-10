import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

import Todos from './components/Todos'
import CreateToDo from './components/CreateToDo'

function App() {

  const  [todos, setTodos] = useState([
    {id:1, title: 'Python basicd', status:'DONE'},
    {id:2, title: 'Study JS', status:'INPROGRESS'},
  ])



  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-7 mx-auto my-5'>
        <CreateToDo />
        <Todos todos={todos} setTodos={setTodos}/>


        </div>
      </div>
    </div>
  )
}

export default App

