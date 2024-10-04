import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            <p>Task title:</p>
            <input type="text" name="title" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            <p>Due date:</p>
            <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            <p>Details:</p>
            <input type="text" name="description" onChange={(event) => props.change(event)} />
        </label>
        <br />
        <label>
            <p>Priority:</p>
            <select name="priority" onChange={(event) => props.change(event)}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;