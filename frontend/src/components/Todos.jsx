import { useState } from "react"


const Todos = () => {
    // Logic
    const  [todos, setTodos] = useState([
      {id:1, title: 'Python basicd', status:'DONE'},
      {id:2, title: 'Study JS', status:'INPROGRESS'},
    ])




  // UI + Logic
  return(
    <div className="container mt-5">
      <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between my-1 ">
              <span>{todo.title}</span>
              <button className={` btn btn-sm border ${todo.status == "DONE" ? "btn-success" : "btn-warning"}`}>{todo.status}</button>
        </li>
          ))}
      </ul>
    </div>
  )
}

export default Todos