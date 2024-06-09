import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

import Todos from './components/Todos'
import CreateToDo from './components/CreateToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-7 mx-auto my-5'>
        <CreateToDo />
        <Todos />


        </div>
      </div>
    </div>
  )
}

export default App

