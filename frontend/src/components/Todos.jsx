import { useState } from "react"


const Todos = ({todos,setTodos,onUpdateTodo}) => {
    // Logic
  const handelToDoUpdate = (todo) => {
    const updatedStatus = todo.status == "DONE" ? "INPROGRESS" : "DONE"

    fetch(`http://127.0.0.1:8000/api/todo/${todo.id}/`,{
      method: "PUT",
      headers:{"Content-Type": "application/json"},
    
    body: JSON.stringify({title:todo.title , status: updatedStatus })
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    onUpdateTodo(data)
  })
}
  




  // UI + Logic
  return(
    <div className="container mt-5">
      <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between my-1 ">
              <span>{todo.title}</span>
              <button 
              className={` btn btn-sm border ${todo.status == "DONE" ? "btn-success" : "btn-warning"}`}
              onClick={() => handelToDoUpdate(todo)}
              >{todo.status}</button>
        </li>
          ))}
      </ul>
    </div>
  )
}

export default Todos