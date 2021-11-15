import React from "react";
import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please add a task");
      return;
    }
    onAdd({ title, description, completed });
    setTitle("");
    setDescription("");
    setCompleted(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Completed</label>
        <input
          type="checkbox"
          value={completed}
          checked={completed}
          onChange={(e) => setCompleted(e.currentTarget.checked)}
        ></input>
      </div>
      <input className="btn btn-block" type="submit" value="Save Task"></input>
    </form>
  );
};
export default AddTask;
