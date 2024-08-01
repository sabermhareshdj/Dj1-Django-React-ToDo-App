import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Todos from './components/Todos';
import CreateToDo from './components/CreateToDo';

function App() {
  const [todos, setTodos] = useState([]);

  // execute at runtime get data from API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/todo/")
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Adding an empty dependency array to run only once

  const onUpdateTodo = (updateTodo) => {
    setTodos(todos.map(todo => (todo.id === updateTodo.id ? updateTodo : todo)));
  };

  const onCreateToDo = (newToDo) => {
    setTodos([...todos, newToDo]);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-7 mx-auto my-5'>
          <CreateToDo onCreateToDo={onCreateToDo} />
          <Todos todos={todos} setTodos={setTodos} onUpdateTodo={onUpdateTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
