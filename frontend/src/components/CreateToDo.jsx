import { useState } from "react";

const CreateToDo = ({ onCreateToDo }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('INPROGRESS');

  const handleCreateToDo = (e) => {
    e.preventDefault();
    const newToDo = { title, status };

    fetch("http://127.0.0.1:8000/api/todo/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToDo) // Remove extra curly braces
    })
      .then(response => response.json())
      .then(data => {
        onCreateToDo(data);
        setTitle('');
        setStatus('INPROGRESS'); // Reset status to 'INPROGRESS' instead of 'DONE'
      })
      .catch(error => console.error('Error creating todo:', error));
  };

  return (
    <div className="container mt-4">
      <form className="row w-100 align-items-center" onSubmit={handleCreateToDo}>
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Your ToDo"
          />
        </div>
        <div className="col-2">
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="DONE">Done</option>
            <option value="INPROGRESS">In Progress</option>
          </select>
        </div>
        <div className="col-2">
          <input type="submit" value="Add" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default CreateToDo;
