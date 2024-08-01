"use client";
import { useState, useEffect } from "react";
import Todos from "./Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/todo/")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setTodos(data))
      .catch(error => {
        console.error('Error fetching todos:', error);
        setError(error);
      });
  }, []);

  const onUpdateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  if (error) {
    return <div>Error fetching todos: {error.message}</div>;
  }

  return <Todos todos={todos} setTodos={setTodos} onUpdateTodo={onUpdateTodo} />;
};

export default App;
