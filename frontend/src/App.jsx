import { useState } from 'react'
import './App.css'

import Todos from './components/Todos'
import CreateToDo from './components/CreateToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateToDo />
      <Todos />

    </div>
  )
}

export default App
