

const CreateToDo = () => {
  // Logic



  // UI + Logic
  return(
    <div className="container mt-4">
      <form className="row w-100 align-items-center">
        <div className="col-8">
          <input type="text" className="form-control" placeholder="Enter Your ToDo"></input>
          </div>
          <div className="col-2">
            <select className="form-control">
              <option value="DONE"> Done </option>
              <option value="INPROGRESS"> InProgress </option>
            </select>
          </div>
          <div className="col-2">
            <input type="submit" value="Add" className="btn btn-primary" />

          </div>
      </form>

    </div>
  )
}

export default CreateToDo