import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Doctors Appointment",
      description: "Feb 5th at 2:30pm",
      completed: true,
    },
    {
      id: 2,
      title: "Comida pro Peixe",
      description: "Mar 12th at 2:30pm",
      completed: true,
    },
  ]);
  // const authString =
  //   "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Inl1eWkiLCJleHAiOjE2Mzc1MjI4MzksImVtYWlsIjoieXV5aXdhbmd4aWFAZ21haWwuY29tIiwib3JpZ19pYXQiOjE2MzczNTAwMzl9.Ow6aTdUAZ6RcOennG8DUF4IZ6kO4syz72SVXAOiHAH0";
  //Add Task
  const [authToken, setAuthToken] = useState("");

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    axios
      .post("http://localhost:8000/api/todos/", task, {
        headers: { Authorization: "JWT " + authToken },
      })
      .then((res) => getPosts());
  };

  const sendLoginAux = async (loginBody) => {
    const responseAxios = await axios
      .post("http://localhost:8000/token-auth/", loginBody)
      .then((response) => {
        setAuthToken(response.data.token);
      });
  };

  const sendLogin = async (loginBody) => {
    const response = await sendLoginAux(loginBody);
    console.log(authToken);
    const response2 = await getPosts();
  };
  //Delete Task
  const deleteTask = (id) => {
    //console.log("delete" + id);
    setTasks(tasks.filter((task) => task.id !== id));
    axios
      .delete(`http://localhost:8000/api/todos/${id}/`, {
        headers: { Authorization: "JWT " + authToken },
      })
      .then((res) => getPosts());
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getPosts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/todos/", {
      headers: { Authorization: "JWT " + authToken },
    });
    const postsData = await response.data;
    setTasks(postsData);
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <Header
        title="AmpliFocus"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Login onSendLogin={sendLogin} />

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
