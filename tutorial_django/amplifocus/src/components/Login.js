import React from "react";
import { useState } from "react";

export const AddTask = ({ onSendLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please add a task");
      return;
    }
    onSendLogin({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <input className="btn btn-block" type="submit" value="Login"></input>
    </form>
  );
};
export default AddTask;
