import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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

  //Add Task
  const addTask = (task) => {
    console.log(task);
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    axios
      .post("http://localhost:8000/api/todos/", task)
      .then((res) => getPosts());
  };

  //Delete Task
  const deleteTask = (id) => {
    //console.log("delete" + id);
    setTasks(tasks.filter((task) => task.id !== id));
    axios
      .delete(`http://localhost:8000/api/todos/${id}/`)
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
    const response = await axios.get("http://localhost:8000/api/todos/");
    const postsData = await response.data;
    setTasks(postsData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <Header
        title="AmpliFocus"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
